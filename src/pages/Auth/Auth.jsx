import React from 'react'
import './Auth.css'
export default function Auth() {
  return (
    // <Signup/>
    <Login/>
  )
  function Signup(){
  return (
    <div className="auth">
     <form className='infoForm authForm'>
     <h3>Sign up</h3>
     <div>
         <input type='text' placeholder='First Name' className='infoInput' name='firstname'></input>
         <input type='text' placeholder='Last Name' className='infoInput' name='lastname'></input>
     </div>
     <div className='username'>
         <input type="text" placeholder='Username' className='infoInput' name='username' />
     </div>
     <div className='email'>
         <input type="text" placeholder='Email Address' className='infoInput' name='email' />
     </div>
     <div>
         <input type="text" placeholder='Password' className='infoInput' name='password'/>
         <input type="text" placeholder='Confirm Password' className='infoInput' name='confirmpassword'/>
     </div>
     <div>
         <span>Adready have an account? <a href=''>Login</a></span>
     </div>
     <button className='button infoButton' type="submit">SignUp</button>
     </form>
    </div>
   )
  }
  function Login(){
    return (
      <div className="auth">
       <form className='infoForm authForm'>
       <h3>Login</h3>
       <div className='username'>
           <input type="text" placeholder='Username' className='infoInput' name='username' />
       </div>
       <div>
           <input type="text" placeholder='Password' className='infoInput' name='password'/>
       </div>
       <div>
           <span>Don't have an account? <a href=''>Signup</a></span>
       </div>
       <button className='button infoButton' type="submit">Login</button>
       </form>
      </div>
     )
    }
}

