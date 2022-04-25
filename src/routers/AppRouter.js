import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import Header from "../components/Header";
import UserForm from "../components/UserForm";
import UsersPage from '../components/UsersPage';
import CertPage from './../components/CertPage';
const user =  {
    name:"khaled",
    program:"Embeded",
    hours:175,
    description: "Gooood",
    startDate: 1846464646484,
    endDate: 156454644854,
};
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Routes>
                <Route path="/" element={<UserForm/>} exact={true}/>
                <Route path="/cert/:id" element={<CertPage />} exact={true}/>
                <Route path="/users" exact={true} element={<UsersPage/>}/>
            </Routes>
        </div>
    </BrowserRouter>
);

export default AppRouter