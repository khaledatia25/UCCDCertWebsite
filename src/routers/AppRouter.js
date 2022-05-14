import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRoute from "./PublicRouter";
import { createBrowserHistory } from "history";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../components/LoginPage";
import EditPage from '../components/EditPage';
import UsersPage from './../components/UsersPage';
import CertPage from "../components/CertPage";
import AddUserPage from "../components/AddUserPage";
import SearchUser from "../components/SearchUser";
import VerificationPage from "../components/Verificaton";
import ParamsRouter from "./ParamsRouter";
export const history = createBrowserHistory();
const AppRouter = () => {
    return(
    <BrowserRouter history={history}>
        <div>
            <Routes>
                <Route path="/" element={<SearchUser/>} exact={true}/>
                <Route path="/verify/:id" element={<ParamsRouter component={VerificationPage}/>} exact={true}/>
                <Route path="/login/" element={<PublicRoute component={LoginPage}/>} exact={true}/>
                <Route path="/users/" element={<PrivateRoute component={UsersPage} exact={true}/>}/>
                <Route path="/add/" element={<PrivateRoute component={AddUserPage} exact={true}/>}/>
                <Route path="/edit/:id" element={<PrivateRoute component={EditPage} exact={true}/>}/>
                <Route path="/cert/:id" element={<PrivateRoute component={CertPage} exact={true}/>}/>
            </Routes>
        </div>
    </BrowserRouter>
);}

export default AppRouter