import { useId, useRef, useState } from 'react';
import Button from '../Button/Button.jsx';
import InputTypeText from '../InputTypeText/InputTypeText.jsx';
import styles from './Form.module.scss';

function Form({onSubmit})
{
    const formref = useRef(null);
    const inputref = useRef(null);

    const inputName = 'TaskName';
    const getId = ()=> Date.now();
    const handlesubmit=(e)=>{
        e.preventDefault();

        const form = formref.current;
        const formData  = new FormData(form);
        const tasktitle = formData.get(inputName);
        if(tasktitle ==='') return;

        const input = inputref.current;
        input.value='';
        onSubmit({id:`${tasktitle}_${getId()}`,title:tasktitle})
    };
    return(
        <form className={styles.title} ref={formref}>
            <InputTypeText Name={inputName} ref={inputref}/>
            <Button clickHandler={handlesubmit}>Add</Button>

        </form>
    )
}

export default Form;