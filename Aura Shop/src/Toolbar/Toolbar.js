import React from 'react'
import Button from '../buttons/button';
import '../Toolbar/Toolbar.css';

const ToolBar = () => {
    return (
        <div className='Toolbar'>
            <Button className='toolbar-icon' children={<i class="fa-solid fa-cart-shopping"></i>} title='cart'></Button>
            <Button className='toolbar-icon' children={<i class="fa-solid fa-user"></i>} title='profile'></Button>
        </div>
    );

}

export default ToolBar