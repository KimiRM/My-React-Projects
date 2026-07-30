import React from 'react';
import Header from '../header/header';
import Footer from '../Footer/Footer';
import './Layout.css'

const Layout = ({Children}) => {
    return (
        <div>
            <Header></Header>
            <main className="Main-content">
                {Children}
            </main>
            <Footer ></Footer>
        </div>

    );
}

export default Layout