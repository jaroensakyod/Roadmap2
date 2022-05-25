import React from "react";
import "./TextLink.css";

class TextLink extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`text-link-5 ${className || ""}`}>
        <div className="community-1 montserrat-semi-bold-viking-16px">Community</div>
      </div>
    );
  }
}

export default TextLink;
