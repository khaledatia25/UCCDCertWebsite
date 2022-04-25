import React from "react";
import UsersList from "./UsersList";
import UserSearch from "./UserSearch";
import Header from './Header';
const UsersPage = () => (
    <div>
        <Header />
        <UserSearch />
        <UsersList />
    </div>
);

export default UsersPage;