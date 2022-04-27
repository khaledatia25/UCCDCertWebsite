import React from "react";
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import Header from './Header';
const DashBoard = () => (
    <div>
        <Header/>
        <div className="main">
            <div className="cards">
                <NavLink to="/add" className="card">
                    <img src="../images/add-user.png"/>
                    <span className="main-text1">Add User</span>
                </NavLink>
                <NavLink to="/users" className="card">
                    <img src="../images/user.png"/>
                    <span className="main-text2">View Users</span>

                </NavLink>
            </div>
        </div>
    </div>
);

export default DashBoard;