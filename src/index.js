import React, { Component } from "react";
import ReactDom from "react-dom";
import "./index.css";

class Index extends Component {
  state = {
    style: "hide-div" // style : display - none
  };

  checkStyle = () => {
    if (this.state.style === "hide-div") {
      this.setState({ style: "show-div" });
    } else {
      this.setState({ style: "hide-div" });
    }
  };
  do_hide = () => {
    this.setState({ style: "hide-div" });
  };
  checkDiv = (event) => {
    if (event.target.id === "main") {
      this.do_hide();
    }
  };

  render() {
    return (
      <div id="main" onClick={this.checkDiv}>
        <button onClick={this.checkStyle}>Click Me</button>

        <div id="mainDiv" className={this.state.style}>
          <span className="span" onClick={this.do_hide}>
            X
          </span>{" "}
          <br />
          <p className="p">
            This is your very first post. Click the Edit link to modify or
            delete it, or start a new post. If you like, use this po st to tell
            readers why you started this blog and what you plan to do with it.
            This is your very first post. Click the Edit link to modify or
            delete it, or start a new post. If you like, use this po st to tell
            readers why you started this blog and what you plan to do with it.
            This is your very first post. Click the Edit link to modify or
            delete it, or start a new post. If you like, use this po st to tell
            readers why you started this blog and what you plan to do with it.
          </p>
        </div>
      </div>
    );
  }
}

ReactDom.render(<Index />, document.querySelector("#root"));
