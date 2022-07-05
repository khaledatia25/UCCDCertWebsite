import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const UserListItem = ({ name, id, nid, program,num, onDeleteUserClick}) => (
    <tr>
        <td className="number">{num++}</td>
        <td className="name--">{name}</td>
        <td className="nid">{nid}</td>
        <td className="program">{program}</td>
        <td className="action action--item">
            <Link className="user-action-button" to={`/edit/${id}`} >Edit</Link>
            <Link className="user-action-button" to={`/cert/${id}`} >Certificate</Link>
            <button className="user-action-button danger" onClick={onDeleteUserClick}>Delete</button>
        </td>

    </tr>
);

export default UserListItem;