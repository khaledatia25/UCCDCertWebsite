import React from "react";
import { getUser } from "../actions/users";
import { NavLink } from 'react-router-dom';
import LandingHeader from "./LandingHeader";
import LandFooter from "./LandFooter";
import LandMain from "./LandMain";
export default class SearchUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nid: "",
            users: [],
            error: ""
        }

    }
    onNIDChange = (e) => {
            const nid = e.target.value;
            this.setState(() => ({nid}));
    }
    onSubmit = async (e) => {
        const users = await getUser(this.state.nid);
        if(!!users){
            this.setState(() => ({users}));
            console.log(users)
        }else{
            this.setState({error: "No Users"})
            setTimeout(() => {
                this.setState({error:""})
            },2000)
        }
        
    }
    render(){
        let num = 1;
        return (
            <div  id="landing-page">
                <LandingHeader />
                <LandMain users={this.state.users} onSubmit={this.onSubmit} onNIDChange={this.onNIDChange} nid={this.state.nid} error={this.state.error}/>
                <LandFooter />
            </div>
            );
    }
}
 