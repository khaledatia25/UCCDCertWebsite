import React from "react";
import UsersList from "./UsersList";
import UserSearch from "./UserSearch";
import Header from './Header';
import { connect } from "react-redux";
import { startSetUsers } from "../actions/users";

class UsersPage extends React.Component
 {
    constructor(props){
        super(props);
        this.startSetUsers = props.dispatch;
        this.state = {
            isLoaded: false,
            data: null
        }
    }
    componentDidMount(){
        this.startSetUsers();
    }
    render(){
        return(
            <div className="page">
                <Header />
                <div className="spacing"></div>
                <UserSearch />
                <UsersList />
            </div>
            )
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: () => dispatch(startSetUsers())
    }
}
export default connect(undefined,mapDispatchToProps)(UsersPage);