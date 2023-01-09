import React from 'react'
import { useState } from 'react'

const Register = (props) => {
    const[fname, setFname] = useState('')
    const[lname, setLname] = useState('')
    const[email, setEmail] = useState('')
    const[pass, setPass] = useState('') 

    const handleSubmit=(e)=> {   
        e.preventDefault()
        console.log(email);
    }
  return (
    <div className='auth-form-container'>
        <h2>Register Form</h2>
        <form className='register-form'  onSubmit={handleSubmit}>
        <label htmlFor='fname'> First Name</label>
        <input value={fname} onChange={(e)=>setFname(e.target.value)} placeholder='Enter your First name'  type="text" name="fname" id="fname" /> 
        <br />
        <label htmlFor='lname'> Last Name</label>
        <input value={lname} onChange={(e)=>setLname(e.target.value)} placeholder='Enter your last name'  type="text" name="lname" id="lname" />
        <label htmlFor='email'>Email:</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='enter your email@gmail.com' id='email' name='email'/> 
        <br /> 
        <label htmlfor='password'> Password: </label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder='*******' name="password" id="password" /> 
        <br /> <br />
        <button type='submit'> Register</button>
        </form>
        <button className='link-btn' onClick={()=> props.onFormSwitch('login')}> Already have an account? LogIn here.</button>
     </div>
  )
}

export default Register