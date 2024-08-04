import React from 'react'
import Form from './Form'
import style from '../App.module.css'

const login = () => {
  return (
    <div className={style.outer_container}>
        <h1>Login</h1>
        <Form/>
    </div>
  )
}

export default login