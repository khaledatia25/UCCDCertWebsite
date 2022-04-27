import React  from 'react';
import { connect } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const PrivateRourte = ({isAuth, component: Component, ...rest}) =>{ 
        const params = useParams();

       return (isAuth?(
            <Component params={params} {...rest}/>
        ):(
            <Navigate to="/"/>
        )
    
);
}

const mapStateToProps = (state) => ({
    isAuth: true
});

export default connect(mapStateToProps)(PrivateRourte);