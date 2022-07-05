import React from "react";
import UsersList from "./UsersList";
import UserSearch from "./UserSearch";
import Header from './Header';
import { connect } from "react-redux";
import { startSetUsers } from "../actions/users";

const UsersPage = (props) => {
    async function componentDidMount() {
        await props.dispatch();
      }
    return(
    <div className="page">
        <Header />
        <div className="spacing"></div>
        <UserSearch />
        <UsersList />
    </div>
);}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: () => dispatch(startSetUsers())
    }
}
export default connect(undefined,mapDispatchToProps)(UsersPage);