import React from 'react';
import Header from '../header/header';
import Footer from '../Footer/Footer';
import './Layout.css'

const Layout = ({children}) => {
    return (
        <div className='Layout-container'>
            <Header></Header>
            <main className="Main-content">
                {children}
            </main>
            <Footer ></Footer>
        </div>

    );
}

export default Layout