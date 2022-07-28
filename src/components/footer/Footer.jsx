import React from 'react'
import './footer.css'
import nftlogo from '../../assets/logo.png'
import { AiOutlineInstagram,AiOutlineTwitter, } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className="footer-links">
        <div className="footer-links_logo">
        <div>
          <img className="Logo" src={nftlogo} alt="logo" />
          <p>shelter.space</p>
        </div>
        <div>
          <h3>Download the latest update</h3>
        </div>
        <div>
          <button className="DownloadButton">Download</button>
        </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div>
        <p> © {(new Date().getFullYear())} shelter.space, Inc. All Rights Reserved</p>
        </div>
        {/*<div>*/}
        {/*  <AiOutlineInstagram size={25} color='white' className='footer-icon' />*/}
        {/*  <AiOutlineTwitter size={25} color='white' className='footer-icon'/>*/}
        {/*  <RiDiscordFill size={25} color='white' className='footer-icon'/>*/}
        {/*  <FaTelegramPlane size={25} color='white'  className='footer-icon' />*/}
        {/*</div>*/}

      </div>
    </div>
  )
}

export default Footer
