import React, { useState } from 'react';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate("/");
            })
            .catch((error) => {
                console.log(error.code === "auth/email-already-in-use");
                setSuccess(true);
            });
    }

    return (
        <div className='signup'>
            <div className='content'>
                <div className='left'>
                    <img src='https://imgs.search.brave.com/IuHb9EUpod5UZH3yg2X0bTNgKJsoOWDDl_dAzSjO0Dw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8x/MC8wNS8wNS80MC9z/dW5zZXQtNzQ5OTc1/OV82NDAuanBn' alt=''/>
                </div>
                <div className='right'>
                    <form onSubmit={signUp}>
                        <h3>Start The Search For the</h3>
                        <h3>Perfect Roommate</h3>
                        <input
                            type='email'
                            placeholder='Enter Your Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Enter Your Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type='submit'>SignUp</button>
                    </form>
                    {success === true ? <p>Email already in use please login</p> : <></>}
                </div>
            </div>
        </div>
    );
}

export default Signup;
