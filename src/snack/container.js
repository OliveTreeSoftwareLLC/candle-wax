"use strict";

import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import Snackbar from "material-ui/Snackbar";

let timer = null;

class Container extends PureComponent {
  constructor (props, state) {
    super(props, state);

    window.orio = this;
    this.state = {
      message: null,
      messages: []
    };
  }

  shouldComponentUpdate (nextProps, nextState) {
    return timer === null ||
      nextState.message !== this.state.message;
  }

  render () {
    let message = this.state.message;

    if (message && message.timeout > 10 && !timer)
      timer = setTimeout(this.pop.bind(this), message.timeout);

    return <Snackbar anchorOrigin={{
        horizontal: this.props.horizontal,
        vertical: this.props.vertical
      }}
      message={message ? message.text : ""}
      onRequestClose={this.pop.bind(this)}
      open={message !== null && message !== undefined} />
  }

  pop () {
    if (this.props.onPop)
      this.props.onPop(this.state.messages[0]);

    timer = null;

    let messages = this.state.messages.splice(1);
    this.setState({
      message: null,
      messages
    });

    setTimeout(() => this.setState({
      message: messages[0]
    }), 300);
  }

  push (message) {
    if (this.props.onPush)
      this.props.onPush(message);

    let messages = [
      ...this.state.messages,
      message
    ];

    this.setState({
      message: this.state.message || message,
      messages
    });
  }
}

Container.defaultProps = {
  horizontal: "center",
  vertical: "bottom"
};

Container.propTypes = {
  horizontal: PropTypes.string.isRequired,
  vertical: PropTypes.string.isRequired
};

export default Container;
