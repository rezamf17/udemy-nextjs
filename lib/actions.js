'use server';

import { saveMeal } from "@/lib/meals.js";
import { redirect } from 'next/navigation'

function isInvalidForm(formData) {
  if (typeof formData === 'string') {
    return!formData || formData.trim() === '';
  } else {
    return!formData;
  }
}

export async function shareMeal(prevState, formData) {

    const meal = {
      title : formData.get('title'),
      summary : formData.get('summary'),
      instructions : formData.get('instructions'),
      image : formData.get('image'),
      creator : formData.get('name'),
      creator_email : formData.get('email')
    }
    if (
      isInvalidForm(meal.title) ||
      isInvalidForm(meal.summary) ||
      isInvalidForm(meal.instructions) ||
      isInvalidForm(meal.image) ||
      isInvalidForm(meal.creator) ||
      isInvalidForm(meal.creator_email) ||
      !meal.creator_email.includes('@') ||
      !meal.image || meal.image.size === 0
    ) {
      return {
        message : 'Invalid form'
      }
    }

    await saveMeal(meal)
    redirect('/meals')
}