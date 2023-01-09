import React from 'react'
import { useState } from 'react'

const Login = (props) => {
    const[email, setEmail] = useState('')
    const[pass, setPass] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email)
    }
  return (

    <div className='auth-form-container'>
      <h2> LogIn</h2>
        <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='enter your email@gmail.com' id='email' name='email'/> 
        <br /> <br />
        <label htmlfor='password'> Password: </label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder='*******' name="password" id="password" /> 
        <br /> 
        <button type='submit'> LogIn</button>
        </form>
        <button className='link-btn' onClick={()=> props.onFormSwitch('register')}> Don't have an account? Register here</button>
    </div>
  )
}

export default Login