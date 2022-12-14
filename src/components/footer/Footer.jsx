import React from 'react'
import './footer.css'
import nftlogo from '../../assets/logo.png'
import { AiOutlineInstagram,AiOutlineTwitter, } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import * as fileSaver from "file-saver";

const Footer = () => {

  function saveFile() {
    fileSaver.saveAs(
        process.env.PUBLIC_URL + "/shelter-windows-x64-22.7.15.exe",
        "shelter-windows-x64-22.7.15.exe");
    return 0
  }

  return (
    <div className='footer section__padding'>
      <div className="footer-links">
        <div className="footer-links_logo">
        <div>
          <img className="Logo" src={nftlogo} alt="logo" />
          <p>Shelter</p>
        </div>
        <div>
          <h3>Download the latest update</h3>
        </div>
        <div>
          <button onClick={saveFile} className="DownloadButton">Download</button>
        </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div>
        <p> © {(new Date().getFullYear())} Shelter, Inc. All Rights Reserved</p>
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
