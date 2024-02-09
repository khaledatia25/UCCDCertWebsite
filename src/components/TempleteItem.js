import React from "react";

const TempleteItem = (props) =>(
    <div className={`templete-item ${props.templeteName}`} >
        {
            
                props.temp == 0 ?  <img alt="white page" style={{
                    background:"white",
                    height: "150px"
                }}/> : <img src={require(`../images/temp_${props.temp}.webp`)}/>
            
        }
    </div>
);

export default TempleteItem;