import React from "react";


const Footer = (props) => {
  const {footerText, footerAnchorLink, footerLinkText, target} = props; 
    return ( 
      <div className="footer">
        <p>{footerText}<a href={footerAnchorLink} target={target}>{footerLinkText}</a></p>
      </div>
  );
}

export default Footer