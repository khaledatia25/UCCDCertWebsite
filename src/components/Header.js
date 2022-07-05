import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

const Header = (props) => (
    <div className="header">
        <NavLink className="logo" to="/users" >UCCD ADMIN</NavLink>
        <ul className="links">
            <li  > <NavLink className='-link' to="/" >Landing Page</NavLink> </li>
            <li ><NavLink className='-link' to="/users" >View Users</NavLink></li>
            <li  ><NavLink className='-link' to="/add" >Add User</NavLink></li>
            <li ><button className="logout-button" onClick={() => {
                props.startLogOut();
            }}>LOG OUT</button></li>
        </ul>
        
        
        
    </div>
);
const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});
export default connect(undefined,mapDispatchToProps)(Header);