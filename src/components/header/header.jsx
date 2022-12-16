import React from "react";
import './header.css';

export default function Header(){
    return (
        <div className="header">
            <div className="headerTitles">
                <span className='titlesm'>Travel</span>
                <span className="titlelg">Blog</span>
            </div>
            <img className="headerImg" src="https://wallpaperaccess.com/full/284466.jpg" alt='header-img' />
        </div>
    )
}