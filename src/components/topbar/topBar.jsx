import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import './topBar.css';

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = 'https://blog-app-api-fvor.onrender.com/images/';

    const handleLogout = ()=>{
        dispatch({type: "LOGOUT"});
    };
    return (
        <div className="top">
            <div className="top-left">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="top-center">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to='/' className="link">HOME</Link>
                    </li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">
                        <Link to='/write' className="link">WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="top-right">
                { user ? (
                        <Link className="link" to='/settings'>
                            <img
                                className="topImage"
                                src={PF + user.profilePic}
                                alt='profile'
                            />
                        </Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">
                                    LOGIN
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">
                                    REGISTER
                                </Link>
                            </li>
                        </ul>    
                    )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}