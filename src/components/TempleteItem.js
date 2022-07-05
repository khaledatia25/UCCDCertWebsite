import React from "react";

const TempleteItem = (props) =>(
    <div className={`templete-item ${props.templeteName}`}>
        <img src={require(`../images/temp_${props.temp}.webp`)}/>
    </div>
);

export default TempleteItem;