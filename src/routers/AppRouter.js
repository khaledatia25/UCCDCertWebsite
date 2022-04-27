import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import PublicRoute from "./PublicRouter";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../components/LoginPage";
import DashBoard from "../components/Dashboard";
import EditPage from '../components/EditPage';
import UsersPage from './../components/UsersPage';
import CertPage from "../components/CertPage";
import AddUserPage from "../components/AddUserPage";
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Routes>
                <Route path="/" element={<PublicRoute component={LoginPage}/>} exact={true}/>
                <Route path="/dashboard/" element={<PrivateRoute component={DashBoard} exact={true}/>}/>
                <Route path="/users/" element={<PrivateRoute component={UsersPage} exact={true}/>}/>
                <Route path="/add/" element={<PrivateRoute component={AddUserPage} exact={true}/>}/>
                <Route path="/edit/:id" element={<PrivateRoute component={EditPage} exact={true}/>}/>
                <Route path="/cert/:id" element={<PrivateRoute component={CertPage} exact={true}/>}/>
            </Routes>
        </div>
    </BrowserRouter>
);

export default AppRouter