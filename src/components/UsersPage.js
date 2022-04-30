import React from "react";
import UsersList from "./UsersList";
import UserSearch from "./UserSearch";
import Header from './Header';
const UsersPage = () => (
    <div className="xl-box">
        <Header />
        <div className="spacing"></div>
        <UserSearch />
        <UsersList />
    </div>
);

export default UsersPage;