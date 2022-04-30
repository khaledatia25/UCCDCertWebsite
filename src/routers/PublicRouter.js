import React  from 'react';
import { connect } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

const PublicRoute = ({isAuth, component: Component, ...rest}) => (
   
        !isAuth?(
            <Component {...rest}/>
        ):(
            <Navigate to="/dashboard/"/>
        )
);

const mapStateToProps = (state) => {
    const token = state.auth.token ;
    return {
        isAuth: !!token  
    }
};

export default connect(mapStateToProps)(PublicRoute);