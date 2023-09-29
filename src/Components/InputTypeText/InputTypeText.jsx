import './inputTypeText.module.scss';
import {forwardRef} from 'react';

const InputTypeText= forwardRef (function InputTypeText({Name}, ref)
{
  return (
    <input type='text' name={Name} ref ={ref}/>
  )
})
export default InputTypeText;