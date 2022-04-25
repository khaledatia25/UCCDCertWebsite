import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="header-logo">UCCD FEMU</div>
        <NavLink to="/" exact={true}>Dashboard</NavLink>
        <NavLink to="/add" exact={true}>Add User</NavLink>
    </header>
);
export default Header;