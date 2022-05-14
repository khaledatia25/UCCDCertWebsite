import React from "react";
import { getUser } from "../actions/users";
import { NavLink } from 'react-router-dom';

export default class SearchUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nid: "",
            users: [],
        }

    }
    onNIDChange = (e) => {
            const nid = e.target.value;
            this.setState(() => ({nid}));
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const users = await getUser(this.state.nid);
        if(!!users){
            this.setState(() => ({users}));
        }
        
    }
    render(){
        let num = 1;
        return (
            <div>
                    <div id="search-header">
                    <div className="header">
                    <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                            <div className="pure-menu-heading" >Search Your Certificate</div>
                            <ul className="pure-menu-list">
                                <li className='pure-menu-item' > <NavLink className='pure-menu-link' to="/login/" >Admin</NavLink> </li>
                            </ul>                        
                            </div>
                    </div>
                    </div>
                    <form className="pure-form search-form public-search" onSubmit={this.onSubmit}>
                    <fieldset>
                    <input  
                        type="text" 
                        placeholder="Search Your Programs By National ID" 
                        value={this.state.nid}
                        onChange={this.onNIDChange}
                        />
                        <button  className="button-large pure-button">Search</button>
                    </fieldset>
                    </form>
                    <div className="user-list">  
                    <table  className="pure-table pure-table-bordered">
                        <thead>
                            <tr>
                            <th className="number"> #</th>
                            <th className="name--">Name</th>
                            <th className="nid"> National ID </th>
                            <th className="program"> Program </th>
                            </tr>
                        </thead> 
                        <tbody>
                            {
                                this.state.users.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td className="number">{num++}</td>
                                            <td className="name--">{user.name}</td>
                                            <td className="nid">{user.nid}</td>
                                            <td className="program">{user.program}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                        
                    </table>
                    {
                        !this.state.users.length&&
                        <div className="no-users-msg">No Users</div>
                    }  
                </div> 
                <div id='footer'>
                <div className='container text-center'>
                <p>
                    This Website designed and created by our volunteers{" "}
                    <a href='https://www.linkedin.com/in/khaled-waleed-mohammed/'>Khaled Waleed Attia</a>{", "}
                    <a>Ahmed Mohammed Seif</a>
                </p>
                </div>
            </div> 

            </div>);
    }
}
 