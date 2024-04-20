import React, { useState } from 'react'
import './Auth.css'
export default function Auth() {
    const [isSignUp , setIsSignUp] = useState(true)
    const [Data , setData] = useState({firstname : "" , lastname: "", password: "",confirmpassword :"", username:""})
    const [confirmPass , setConfirmPass] = useState(true)
    const handleChange = (e)=>{
        setData({...Data ,[e.target.name]: [e.target.value]})
    }
    const handleSubmit = (e) => {
        setConfirmPass(true);
        e.preventDefault();
        if (isSignUp) {
          Data.password === Data.confirmpass
            ? dispatch(signUp(Data, navigate))
            : setConfirmPass(false);
        } else {
          dispatch(logIn(Data, navigate));
        }
      };

      const ResetForm = ()=>{
        setConfirmPass(true)
        setData({
            firstname : "" , lastname: "", password: "",confirmpassword :"", username:""            
        })

      }
  return (
    <div className="auth">
     <form className='infoForm authForm' onSubmit={handleSubmit}>
     <h3>{isSignUp ? "Sign up":"LogIn"}</h3>
     {isSignUp &&
     
     <div>
         <input type='text' placeholder='First Name' className='infoInput' name='firstname' onClick={handleChange} value={Data.firstname}></input>
         <input type='text' placeholder='Last Name' className='infoInput' name='lastname' onClick={handleChange} value={Data.lastname}></input>
     </div>
}
     <div className='username'>
         <input type="text" placeholder='Username' className='infoInput' name='username' onClick={handleChange} value={Data.username}/>
     </div>
    {isSignUp&&
     <div className='email'>
         <input type="text" placeholder='Email Address' className='infoInput' name='email' />
     </div>
}
     <div>
         <input type="password" placeholder='Password' className='infoInput' name='password' onClick={handleChange} value={Data.password}/>
         {isSignUp&&
         
         <input type="password" placeholder='Confirm Password' className='infoInput' name='confirmpassword' onClick={handleChange} value={Data.confirmpassword}/>
}
     </div>
        <span style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}>
            Password Incorrect
        </span>
    
     <div>
        <span onClick={()=>{setIsSignUp((prev)=>!prev); ResetForm()}} style={{cursor: "pointer"}}>
         {isSignUp?"Adready have an account? Login":"Don't have an account? SingUp"}
        </span>
     </div>
     <button className='button infoButton' type="submit">{isSignUp? "SignUp" : "Login"}</button>
     </form>
    </div>
  )
}
