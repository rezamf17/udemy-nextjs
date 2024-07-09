import Link from 'next/link'
import classes from './page.module.css'
import { getMeals } from '@/lib/meals';
import MealsGrid from '@/components/meals/meals-grid';
import { Suspense } from 'react';

async function MealsPage(){
    console.log('Fetcing meals...');
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

export default async function Meals(){
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious Meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself</p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>
                        Share your favorite recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching...</p>}>
                    <MealsPage />
                </Suspense>
            </main>
        </>
    )
}