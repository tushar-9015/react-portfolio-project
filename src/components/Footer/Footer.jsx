import React from 'react'
import {BsGithub, BsTwitter, BsLinkedin} from "react-icons/bs"
import  {SiHashnode } from "react-icons/si"
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <h1 className='title'>Connect with me:</h1>
      <div className="links">
        <a href='https://github.com/tushar-9015'>
          <BsGithub />
        </a>
        <a href='https://twitter.com/Tushar9015'>
          <BsTwitter />
        </a>
        <a href='https://www.linkedin.com/in/tushar-joshi-495486252/'>
          <BsLinkedin />
        </a>
        <a href='https://tushar9015.hashnode.devs'>
          <SiHashnode />
        </a>
      </div>
    </div>
  )
}

export default Footer
