import React from "react";

const TempleteItem = (props) =>(
    <div className="templete-item">
        <img src={require("../images/certificate.webp")}/>
        <div className="middle">
            <div className="text">{props.templeteName}</div>
        </div>
    </div>
);

export default TempleteItem;