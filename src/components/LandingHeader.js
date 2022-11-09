import React from "react";
import { NavLink } from "react-router-dom";

function LandingHeader() {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-1" src={require("../images/landing-page/Logo 2-01.webp")} alt=""/>
                <img className="logo-2" src={require("../images/landing-page/Logo 3.webp")} alt=""/>
                <img className="logo-3" src={require("../images/landing-page/Logo 1-01.webp")} alt=""/>
            </div>
            <ul className="links">
                <li className="contact"><a  href="http://about-us.uccdeng.com" className='-link'>About Us</a></li>
                <div className="v-line"></div>
                <li className="admin"><NavLink className='-link' to="/login" >Admin</NavLink></li>
                <img src={require("../images/landing-page/Top Shape-02.webp")}/>
            </ul>
        </div>
        
   );
}

export default LandingHeader;