import React from 'react'
import styles from './Button.module.css'
const Button = (props) => {
  return (
    <button onClick={props.handleClick} className={styles}>{props.icon} {props.text}</button>
  )
}

export default Button