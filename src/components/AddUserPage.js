import React from "react";
import UserForm from "./UserForm";
import { connect } from 'react-redux';
import Header from "./Header";
import { startAddUser } from "../actions/users";
const AddUserPage = (props) => (
    <div className='page'>
        <Header/>
        <UserForm 
                    onSubmit={(user) => {
                          props.startAddUser(user);
                    }}
        
        />
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        startAddUser: (user) => dispatch(startAddUser(user))
    };
}

export default connect(undefined,mapDispatchToProps)(AddUserPage);