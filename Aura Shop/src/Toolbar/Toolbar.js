import React from 'react'
import Button from '../buttons/button';
import '../Toolbar/Toolbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const ToolBar = () => {
    return (
        <div className='Toolbar'>
            <Button className={'toolbar-icon'} children={<i class="fa-solid fa-cart-shopping"></i>}></Button>
            <Button className={'toolbar-icon'} children={<i class="fa-solid fa-user"></i>}></Button>
        </div>
    );

}

export default ToolBar