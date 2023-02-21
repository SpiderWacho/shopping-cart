import React from 'react'
import './Button.css'

export const Button = ({ color, children, onClick }) => {
  return (
    <button type='button' className={`${color} btn`} onClick={onClick}>{children}</button>
  )
}
