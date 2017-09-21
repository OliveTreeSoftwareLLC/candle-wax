"use strict";

import React, { PureComponent } from "react";
import Snackbar from "material-ui/Snackbar";

class Container extends PureComponent {
  constructor (props, state) {
    super(props, state);

    window.orio = this;
    this.state = {
      messages: [ ]
    };
  }

  render () {
    let hasMessages = this.state.messages.length > 0;
    let message = this.state.messages[0];

    if (message && message.timeout > 10)
      setTimeout(this.pop.bind(this), message.timeout);

    return <Snackbar anchorOrigin={{
        horizontal: "center",
        vertical: "bottom"
      }}
      message={message ? message.text : ""}
      onRequestClose={this.pop.bind(this)}
      open={hasMessages} />
  }

  pop () {
    let messages = this.state.messages.splice(1);
    this.setState({
      messages
    });
  }

  push (message) {
    let messages = [
      ...this.state.messages,
      message
    ];

    this.setState({
      messages
    });
  }
}

export default Container;
