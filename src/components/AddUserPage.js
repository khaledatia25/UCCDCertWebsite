import React from "react";
import UserForm from "./UserForm";
import { connect } from 'react-redux';
import Header from "./Header";
const AddUserPage = (props) => (
    <div>
        <Header/>
        <UserForm 
                    onSubmit={(user) => {
                          
                    }}
        
        />
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
}

export default connect(mapDispatchToProps)(AddUserPage);