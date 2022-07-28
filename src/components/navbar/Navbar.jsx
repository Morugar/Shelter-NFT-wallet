import React,{ useState} from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png'
import {  Link } from "react-router-dom";
import * as fileSaver from "file-saver";

const Menu = () => (
  <>
     <Link to="/"><p>Explore</p> </Link>
     <p>My Items</p>

  </>



 )

 const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
   const [user,setUser] = useState(false)

     function saveFile() {
         fileSaver.saveAs(
             process.env.PUBLIC_URL + "/shelter-windows-x64-22.7.15.exe",
             "shelter-windows-x64-22.7.15.exe");
         return 0
     }

  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
          <Link to="/">
            <h1>Shelter</h1>
          </Link>

        </div>
      </div>

        <h2 className="Text">Best NFT cryptowallet for PC</h2>


      <div className="navbar-sign">

         <button type='button' onClick={saveFile} className='primary-btn'>Download</button>


      </div>
    </div>
  )
}

export default Navbar
