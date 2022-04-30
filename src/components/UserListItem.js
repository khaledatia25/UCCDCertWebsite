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
            <Link className="pure-button button-success button-small" to={`/edit/${id}`} >Edit</Link>
            <Link className="pure-button button-secondary button-small" to={`/cert/${id}`} >Certificate</Link>
            <button className="button-error button-small pure-button" onClick={onDeleteUserClick}>Delete</button>
        </td>

    </tr>
);

export default UserListItem;