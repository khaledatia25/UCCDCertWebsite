import React from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import Header from './Header';

const EditPage = (props) => {
    return (
        <div>
        <Header/>
        <div>
            <UserForm 
                user={props.user}
                onSubmit={(user) => {
                    console.log(user);
                }}

            />
        </div>
        </div>
    );  
};

const mapStateToProps = (state, props) => {
    return {
         user: state.users.find((user) => user.id === props.params.id)
    };
};

export default connect(mapStateToProps)(EditPage);