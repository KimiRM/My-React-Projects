import React from "react";
import Button from "../buttons/button";
import './Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-contact">
                <div className="Footer-contact-item">
                    <Button className={'Footer-icon'} children={<i class="fa-brands fa-telegram"></i>}></Button>
                    <span className="Footer-contact-span">@kimi_r_m</span>
                </div>
                <div className="Footer-contact-item">
                    <Button className={'Footer-icon'} children={<i class="fa-solid fa-phone"></i>}></Button>
                    <span className="Footer-contact-span">+98 912 799 0224</span>
                </div>
                <div className="Footer-contact-item">
                   <Button className={'Footer-icon'} children={<i class="fa-brands fa-github"></i>}></Button>
                   <span className="Footer-contact-span">github.com/KimiRM/My-Portofolio</span>
                </div>
            </div>
            <span>Created with a lot of <span className="Footer-heart">❤</span> and ☕ by <a href="thisiskimia.ir">KimiRM</a></span>
        </div>
    );
}

export default Footer