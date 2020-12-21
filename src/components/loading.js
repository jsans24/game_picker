import React from "react";
import loadingImg from "../images/Infinity-1s-200px(1).gif";

class Loading extends React.Component {
  render() {
    return (
      <div className="">
        <img className="loader" src={loadingImg} alt="Loading..." />
      </div>
    );
  }
}

export default Loading;
