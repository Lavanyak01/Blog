import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import './sidebar.css';
import { Link } from "react-router-dom";

export default function SideBar() {
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            try{
            const res = await axios.get('https://blog-app-api-fvor.onrender.com/api/categories');
            setCats(res.data);
            } catch {}
        }
        getCats();
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className='sidebarTitle'>ABOUT</span>
                <img src='https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3' alt='about-img' />
                <p>
                This is simply a blog where the entire focus is on the world of travel. It contains one of the best places to visit. 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link" key={c._id}>
                            <li className="sidebarListItem">{c.name }</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle"> Follow Us</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}