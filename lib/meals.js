import fs from 'node:fs'
import sql from 'better-sqlite3'
import xss from 'xss'
import slugify from 'slugify'
const db = sql('meals.db')

export async function getMeals() {
  await new Promise((resolve => setTimeout(resolve, 1000)))
  // throw new Error('Something went wrong')
  return db.prepare(`
    SELECT * FROM meals
  `).all()
}

export function getMeal(slug) {
  const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
  return meal;
}

export async function saveMeal(meal){
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const filename = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if(error) {
      throw new Error('save image failed')
    }
  });

  meal.image = `/images/${filename}`;

  db.prepare(
    `INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug) 
    VALUES (
         @title,
         @summary,
         @instructions,
         @image,
         @creator,
         @creator_email,
         @slug)`
    ).run(meal);
}