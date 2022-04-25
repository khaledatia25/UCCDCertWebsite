import React from "react";
import { connect } from "react-redux";
import UserListItem from "./UserListItem";
import getVisibleUsers from "../selectors/users";
import '../style/table.css';
const UserList = (props) => (
    <table id="myTable">
            <tr id="header" className="header">
               <th className="number"> #</th>
               <th className="table-name">Name</th>
			   <th className="nid"> National ID </th>
               <th> Program </th>
               <th className="action-h"> Actions </th>
            </tr>
            
            {
                props.users.map((user) => {
                    return (<UserListItem key={user.id} {...user}/>);
                })
            }
            {
                props.users.length === 0 &&
                <p>No Users</p>
            }
    </table>    
);

const mapStateToProps = (state) => {
    return {
        users: getVisibleUsers(state.users, state.filters)
    }
}

export default connect(mapStateToProps)(UserList);