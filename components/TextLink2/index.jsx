import React from "react";
import "./TextLink2.css";

class TextLink2 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`text-link-8 ${className || ""}`}>
        <div className="roadmap-1 montserrat-semi-bold-lavender-16px">Roadmap</div>
      </div>
    );
  }
}

export default TextLink2;
