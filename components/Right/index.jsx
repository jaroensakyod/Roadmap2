import React from "react";
import TextLink from "../TextLink";
import TextLink2 from "../TextLink2";
import "./Right.css";

class Right extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`right-1 ${className || ""}`}>
        <div className="desktop-menu-1">
          <div className="text-link-3"></div>
          <TextLink />
          <TextLink2 />
        </div>
      </div>
    );
  }
}

export default Right;
