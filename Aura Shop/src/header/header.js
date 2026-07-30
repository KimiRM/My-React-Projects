import React from 'react'
import '../header/header.css'
import NavBar from '../NavBar/Navbar'
import ToolBar from '../Toolbar/Toolbar';

const Header = () => (
    <div className='Header'>
        <NavBar></NavBar>
        <div className='Logo'>
            {/* <image src='../pics/logo.jfif'></image> */}
            <span className='Logo-type'>AURA</span>
        </div>
        <ToolBar></ToolBar>
    </div>    
);

export default Header