import React from "react";
import ShowList from "./ShowList";
const LandMain = (props) => {
    return ( <div className="main-area">
    <div className="view">
      { !props.users.length&&<img src={require("../images/landing-page/Cet copy.webp")}/>}
      {!!props.users.length&&<ShowList users={props.users}/>}
    </div>
    <div className="seperator">
      <div className="seperator-line"></div>
    </div>
    <div className="search">
      <div className="search-up">
        <div className="back">
          <div className="ver-logo">
            <img src={require("../images/landing-page/ver-logo.webp")} alt=""/>
          </div> 
          <div className="text">
            <div className="ver-title">UCCD</div>
            <div className="ver-text">Online platform to display its accredited ceertificates</div>
            <div className="ver-points">. . . .</div>
          </div>
        </div>
        
      </div>
      <div className="search-down">
        <div className="seacr-down_title">
          <span>FIND YOUR'S</span> 
          <span className="search-down_subtitle">Search your programs by natiolnal ID</span>
        </div>
          
          <div className="search-box">
            <input type="text" placeholder="# # # # # # # # # # # # # # #" val={props.nid} onChange={(e) => props.onNIDChange(e)}/>
            <div className="search-box--sep">
              <div className="sep"></div>
            </div>
            <div className="search-box--logo">
              <button onClick={(e) => props.onSubmit(e)}>
                <img src={require("../images/landing-page/Magnifire-02.png")}/>
              </button>
              
            </div>
          </div>
          {<span className="error">{props.error}</span>}
      </div>
          
      </div>
  </div> );
}
 
export default LandMain;