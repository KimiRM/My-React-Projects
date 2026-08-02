import React from 'react'
import '../header/header.css'
import NavBar from '../NavBar/Navbar'
import ToolBar from '../Toolbar/Toolbar';
import logo from '../pics/Header-logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className='Header'>
        <NavBar></NavBar>
        <Link to='/Home' className='Logo-link'>
            <div className='Logo' >
                <img src={logo} alt='logo' className='header-logo-img'/>
                <span className='header-logo-name'>Aura</span>
            </div>
        </Link>
        <ToolBar></ToolBar>
    </div>    
);

export default Header