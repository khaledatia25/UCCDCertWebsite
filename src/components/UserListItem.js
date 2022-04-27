import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import '../style/table.css';
import '../style/style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const UserListItem = ({ name, id, nid, program,num}) => (
    <tr className="table-row">
        <td className="number">{num++}</td>
        <td className="table-name">{name}</td>
        <td className="nid">{nid}</td>
        <td>{program}</td>
        <td className="actions">
            <Link to={`/edit/${id}`} className="btn btn-primary btn-sm">Edit</Link>
            <Link to={`/cert/${id}`} className="btn btn-primary btn-sm">Certificate</Link>
            <button className="btn btn-danger btn-sm">Delete</button>
        </td>

    </tr>
);

export default UserListItem;