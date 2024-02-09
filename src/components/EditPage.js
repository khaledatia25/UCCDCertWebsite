import React from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import Header from './Header';
import { startEditUser, startRemoveUser } from '../actions/users';
import { history } from '../routers/AppRouter';

const EditPage = (props) => {
    return (
        <div className='page edit-page'>
        <Header/>
        <div>
            <UserForm 
                user={props.user}
                onSubmit={(user) => {
                    props.dispatch(startEditUser(props.user.id, user));
                    //props.history.push('/');
                    //console.log(user);
                }}

            />
                <button className="delete-button" onClick={() => {
                    props.dispatch(startRemoveUser(props.user.id));
                    history.go(-1);
                }}>Delete</button>
            
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