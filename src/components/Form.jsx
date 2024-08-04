import React, { useState } from 'react'
import styles from '../App.module.css'

const Form = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors,setErrors] = useState({})
  // console.log(email)
  const handleSubmit = (event)=>{
    event.preventDefault();
    const errors = validate()
    // setError(errors)
    // if(Object.keys.length===0){

    // }
  }


  const validate = ()=>{
    const errors = {}
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!email){
      errors.email= 'Email is required!'
    }else if (!regex.test(email)){
      errors.email= 'Email format is not valid!'
    }

    if(!password){
      errors.password= 'Password is required!'
    }else if(password.length < 6){
      errors.password= 'Password must be 6 characters!'
    }else if(password.length>10){
      errors.password= 'Password must be less than 10 characters!'
    }
    
    setErrors(errors);

    return Object.keys(errors).length === 0;
  }


  return (
    <div className={styles.form_container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="email">Email:</label>
          <input id='email' type="text" placeholder='name@gmail.com' onChange={(e)=>{setEmail(e.target.value)}}/>
          {errors.email && <p className={styles.error_message}>{errors.email}</p>}
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">Password</label>
          <input id='password' type="password" placeholder='123456' onChange={(e)=>{setPassword(e.target.value)}}/>
          {errors.password && <p className={styles.error_message}>{errors.password}</p>}
        </div>
        <button className={styles.button}>Login</button>
      </form>
    </div>
  )
}


export default Form