import React ,{useState} from 'react'
import {auth} from '../../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.scss'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [success,setSuccess] = useState("false");
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((useCredential)=>{
            console.log(useCredential);
            navigate("/");
        })
        .catch((error)=>{
            setSuccess(true);
            console.log(error);
        });
    }
  return (
    <div className='login'>
        <div className='content'>
        <div className='left'>
            <img src='https://imgs.search.brave.com/IuHb9EUpod5UZH3yg2X0bTNgKJsoOWDDl_dAzSjO0Dw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8x/MC8wNS8wNS80MC9z/dW5zZXQtNzQ5OTc1/OV82NDAuanBn' alt=''/>
        </div>
        <div className='right'>
        <form onSubmit={signIn}>

            <h3>Continue The Search</h3>
            <input type='email' 
            placeholder='Enter Your Email'
            onChange={(e)=>setEmail(e.target.value)}    
            />
            <input type='password' 
            placeholder='Enter Your Password'
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button type='submit'>LogIn</button>
            {success === true ? <p>Sorry Either the username or the password is wrong</p> : <></>}
        </form>
        </div>
        </div>
    </div>
  )
}

export default Login