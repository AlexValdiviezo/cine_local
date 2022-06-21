import React from 'react';

import {useState, useEffect} from 'react';
import { FormStars } from './FormStars';

export const InputMovie = ({setInput, setLte, setGte}) =>{
    const [value, setValue] = useState('');
    
    useEffect(() => {
        if(value.length > 0){
            setInput(value);
        }
    }, [value])
    

    const changeValue = (e) => {
        setValue(e.target.value)
    }

    const handleInputSubmit = (event) => {
        event.preventDefault();
        setValue('');
    }
    return(
        <form onSubmit={handleInputSubmit}>
            <input value={value} onChange={changeValue}/>
            <FormStars setLte={setLte} setGte={setGte}/>
        </form>
    )
}