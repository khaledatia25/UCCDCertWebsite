import React from "react";

const TempleteItem = (props) =>(
    <div className="templete-item">
        <img src={props.src}/>
        <div className="middle">
            <div className="text">{props.templeteName}</div>
        </div>
    </div>
);

export default TempleteItem;