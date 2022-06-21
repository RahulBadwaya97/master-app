//@ts-nocheck
import React from 'react'
import { ButtonInterface } from 'Modals/Interface'
import { Link } from 'react-router-dom'
import './Button.scss'
const Button =({children , requestPath , disable , ...props}:ButtonInterface)=>{
  let className = "Button"
  return (
    <section className='button-wraper'>
      <Link to={requestPath} className={className} disable={disable} {...props}>{children}</Link>
    </section>
    )
}

export default Button