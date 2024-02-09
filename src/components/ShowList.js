import React from "react";
import ShowListItem from "./ShowListItem";
const ShowList = (props) => {
    return ( 
        <div className="show-list">
        {
            props.users.map((user) => (<ShowListItem key={user.id} name={user.name} nid={user.nid} program={user.program}/>))
        }
        </div>
     );
}
 
export default ShowList;