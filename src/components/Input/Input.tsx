//@ts-nocheck
import React from 'react'
import InputLabel from 'components/InputLabel/InputLabel'
import { InputInterface } from 'Modals/Interface'
import './Input.scss'
function Input({
  label,
  type,
  required,
  placeholder,
  name,
  value,
  handleChange
} : InputInterface)
 {
  return (
    <>
    <div className='input-wrapper'>
    <InputLabel label={label} required={required}/>
    <input 
    type={type}
    name={name}
    onChange={handleChange}
    placeholder={placeholder}
    value={value}
    />
    </div>
    </>
  )
}

export default Input