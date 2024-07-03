'use client';

import classes from './image-picker.module.css'
import { useRef, useState } from 'react'
import Image from 'next/image';

export default function ImagePicker({label, name}){
    const imageInputRef = useRef()
    const [pickedImage, setPickedImage] = useState()
    function handleCLick(){
        imageInputRef.current.click()
    }

    function handleChange(event){
        const file = event.target.files[0]
        if (!file) {
            return
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No picked image yet</p>}
                    {
                        pickedImage && <Image src={pickedImage} alt='Preview' fill/>
                    }
                </div>
                <input id={name} type='file' accept='image/png, image/jpeg' name={name} className={classes.input} ref={imageInputRef} onChange={handleChange} />
                <button type='button' className={classes.button} onClick={handleCLick}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}