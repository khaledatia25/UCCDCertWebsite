import React from "react";
import { connect } from "react-redux";
import UserListItem from "./UserListItem";
import getVisibleUsers from "../selectors/users";
import { startRemoveUser } from "../actions/users";

const UserList = (props) => {
    let num = 1;
    return(
    <div className="user-list">
    <div className="user-list-scroll"> 
        <table  className="user-table">
            <thead>
                <tr>
                <th className="number"> #</th>
                <th className="name--">Name</th>
                <th className="nid"> National ID </th>
                <th className="program"> Program </th>
                <th className="action"> Actions </th>
                </tr>
            </thead> 
            <tbody> 
                {
                    props.users.slice(0, props.num).map((user) => {
                        return (<UserListItem onDeleteUserClick={() => {
                            props.dispatch(startRemoveUser(user.id));
                        }} key={user.id} {...user} num={num++}/>);
                    })
                }
                
            </tbody>
            
        </table>
        
        </div>
        {
            props.users.length === 0 &&
            <div className="no-users-msg">No Users</div>
        }
    </div>          
);
        }

const mapStateToProps = (state) => {
    return {
        users: getVisibleUsers(state.users, state.filters),
        num: state.filters.numAppears
    }
}

export default connect(mapStateToProps)(UserList);