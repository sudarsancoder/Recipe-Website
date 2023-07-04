import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
  return (
    <div className="auth">
      <Login/>
      or
      <Register/>
    </div>
  );
};


const Login =()=>{
  const[username,setUsername] = useState('');
  const[password,setPassword] = useState('');
  const[_,setCookies]=useCookies(["access_token"])
const navigate = useNavigate();

  const onSubmit = async (event)=> {
    event.preventDefault();
    try{
    const response = await axios.post("http://localhost:3001/auth/login",{
         username,
         password,
       });
       console.log(response.data.token) //token is obtained from axios
      setCookies("access_token",response.data.token);
      window.localStorage.setItem("userID",response.data.userID) 
      /* If the request is successful, it sets the "access_token" cookie using the 
      setCookies function from useCookies, and it also stores the "userID" 
      in the localStorage of the browser.*/
      navigate('/');
 
    }catch(err){
         console.error(err);
    }
 };

    return (
        
           <Form username={username} setUsername={setUsername}
           onSubmit={onSubmit} password={password} setPassword={setPassword} label='Login'
           id='pass1' us="us1"
        />
        
    )
}

const Register =()=>{

const[username,setUsername] = useState('');
const[password,setPassword] = useState('');

const onSubmit = async (event)=> {
   event.preventDefault();
   try{
      await axios.post("http://localhost:3001/auth/register",{
        username,
        password,
      });
      alert("Registered successfully")
   }catch(err){
        console.error(err);
   }
};

 return (<Form username={username} setUsername={setUsername}
         password={password} setPassword={setPassword} label='Register'
        onSubmit={onSubmit} id='pass2' us="us2"
        />);
    
}


const Form =({onSubmit,username,setUsername,password,setPassword,label,id, us})=>{

return (<div className='auth-container'>
           <form onSubmit={onSubmit}>
            <h2> {label} </h2>

            <div className='form-group'>
                <label htmlFor= {us}> Username : </label>
                <input type='text' value={username}
                id= {us} onChange={(event)=>setUsername(event.target.value)}/>
            </div>

            <div className='form-group'>
                <label htmlFor= {id}> Password : </label>
                <input type='password' value={password}
                id={id} onChange={(event)=>setPassword(event.target.value)}/>
            </div>

            <button type="submit"> {label} </button>
           </form>
  </div>)
}