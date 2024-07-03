'use client';

import classes from './image-picker.module.css'
import { useRef } from 'react'

export default function ImagePicker({label, name}){
    const imageInputRef = useRef()
    function handleCLick(){
        imageInputRef.current.click()
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <input id={name} type='file' accept='image/png, image/jpeg' name={name} className={classes.input} ref={imageInputRef} />
                <button type='button' className={classes.button} onClick={handleCLick}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}