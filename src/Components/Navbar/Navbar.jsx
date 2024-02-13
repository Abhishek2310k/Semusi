import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';
import {auth} from "../../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect,useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  const [authUser,setAuthUser] = useState(null);
  const [appear,setAppear] = useState(false);
  useEffect(()=>{
      const listen = onAuthStateChanged(auth,(user)=>{
          if(user){
              setAuthUser(user);
          }
          else {
              setAuthUser(null);
          }
      });
      return () => {
          listen();
      }
  },[]);

  const userSignOut = () => {
    signOut(auth).then(()=>{
        console.log("signout successful")
    }).catch(error=>console.log(error))
  }

  return (
    <div className='navbar'>
      <div className='content_navbar'>
        <div className='left'>
          <Link to="/" style={{color:"white",textDecoration:"none"}}>
            <h1>RoomMate Finder</h1>
          </Link>
          <div className='dropdown'>
            <div className='button' onClick={()=>setAppear(!appear)}><MenuIcon fontSize='large'/></div>
          </div>
        </div>
        <div className='right'>
            <Link to="/"
            style={{color:"white",textDecoration:"none"}}>
            <div className='explore'>Explore</div>
            </Link>
            <Link to="/offers" 
            style={{color:"white",textDecoration:"none"}}>
            <div className='offers'>offers</div>
            </Link>
            {authUser === null ? <></> : <div onClick={userSignOut} className='signout'>SignOut</div>}
            {authUser === null ? 
            <Link to="/login" 
            style={{color:"white",textDecoration:"none"}}>
              <div className='signin'>SignIn</div>
              </Link> : <></>}
            {authUser === null ? 
            <Link to="/signup" 
            style={{color:"white",textDecoration:"none"}}>
            <div className='register'>SignUp</div>
            </Link> : <></>}

        </div>
          <div className= {appear === false ? "hide" : "appear"}>
              <div className='dropdown_content'>
            <Link to="/"
              style={{color:"white",textDecoration:"none"}}>
              <div className='explore' onClick={()=>setAppear(!appear)}>Explore</div>
              </Link>
              <Link to="/offers" 
              style={{color:"white",textDecoration:"none"}}>
              <div className='offers' onClick={()=>setAppear(!appear)}>offers</div>
              </Link>
              {authUser === null ? <></> : <div onClick={userSignOut} className='signout'>SignOut</div>}
              {authUser === null ? 
              <Link to="/login" 
              style={{color:"white",textDecoration:"none"}}>
                <div className='signin' onClick={()=>setAppear(!appear)}>SignIn</div>
                </Link> : <></>}
              {authUser === null ? 
              <Link to="/signup" 
              style={{color:"white",textDecoration:"none"}}>
              <div className='register' onClick={()=>setAppear(!appear)}>SignUp</div>
            </Link> : <></>}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar