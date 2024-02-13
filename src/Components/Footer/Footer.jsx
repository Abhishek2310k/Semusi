import React from 'react'
import './Footer.scss'
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='content'>
        <h1>RoomMate Finder</h1>
        <div className='madeby'>
          <h2>Abhishek Kumar</h2>
          <div className='socials'>
          <a href='https://leetcode.com/abhishek_0040/'>
            <SiLeetcode size={30}/>
          </a>
          <a href='https://www.codechef.com/users/abhishek_2310a'>
          <SiCodechef size={30}/>    
          </a>
          <a href='https://codeforces.com/profile/AbhishekKu_AK47'>
          <SiCodeforces size={30}/>
          </a>
          <a href='https://github.com/Abhishek2310k'>
          <FaGithub size={30}/>
          </a>
          <a href='https://www.linkedin.com/in/abhishek-kumar-031a81235/'>
          <CiLinkedin size={30}/>
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer