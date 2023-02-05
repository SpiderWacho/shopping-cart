import React from 'react'
import './Button.css'

export const Button = ({ color, children }) => {
    console.log(children);
  return (
    <button type='button' className={`${color} btn`}>{children}</button>
  )
}
