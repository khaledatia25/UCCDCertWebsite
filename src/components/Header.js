import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

const Header = (props) => (
    <div className="header">
    <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <NavLink className="pure-menu-heading" to="/" >UCCD</NavLink>
        <ul className="pure-menu-list">
            <li className='pure-menu-item' > <NavLink className='pure-menu-link' to="/" >Dashboard</NavLink> </li>
            <li className='pure-menu-item' ><NavLink className='pure-menu-link' to="/add" >Add User</NavLink></li>
            <li className='pure-menu-item'><NavLink className='pure-menu-link' to="/users" >View Users</NavLink></li>
            <li className='pure-menu-item'><button className="pure-button button-small" onClick={() => {
                props.startLogOut();
            }}>LOG OUT</button></li>
        </ul>
        
        
        </div>
    </div>
);
const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});
export default connect(undefined,mapDispatchToProps)(Header);