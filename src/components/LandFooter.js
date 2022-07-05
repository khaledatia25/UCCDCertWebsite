import React from "react";

const LandFooter = () => {
    return ( <div class="footer">
    <div class="social-media">
      <a target="blank" href="https://www.facebook.com/UCCD.Mans.Eng"><img src={require("../images/landing-page/Facebook-01.png")}/></a>
      <a target="blank" href="https://www.facebook.com/UCCD.Mans.Eng"><img src={require("../images/landing-page/LinkedIn-01.png")}/></a>
      <a target="blank" href="http://www.mmp.aucegypt.edu/"><img src={require("../images/landing-page/Browser-01.png")}/></a>
    </div>
        <img src={require("../images/landing-page/Below shape-01.webp")} class="below-img" alt=""/>
    </div>
 );
}
 
export default LandFooter;
