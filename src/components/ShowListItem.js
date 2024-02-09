import React from "react";
const ShowListItem = (props) => {
    return ( 
        <div className="show-item">
            <div className="name">{props.name}</div>
            <div className="bottom">
            <div className="program">{props.program}{" "}Program</div>
            <div className="id"><span>ID:</span>{" "}{props.nid}</div>
            </div>
            
        </div> );
}
 
export default ShowListItem;