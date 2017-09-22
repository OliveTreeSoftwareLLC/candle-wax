"use strict";

import BaseContainer from "../common/container";
import PropTypes from "prop-types";
import React from "react";
import Snackbar from "material-ui/Snackbar";

let timer = null;

class Container extends BaseContainer {
  constructor (props, state) {
    super(props,
      state,
      (message) => {
        this.placeholder = message || this.placeholder;

        let text = message ? message.text :
          this.placeholder ? this.placeholder.text : "";

        return <Snackbar anchorOrigin={{
            horizontal: props.horizontal,
            vertical: props.vertical
          }}
          message={text}
          onRequestClose={(message && message.autoDismiss) ? this.pop.bind(this) : null}
          open={message !== null && message !== undefined} />;
      },
      (message) => this.pushed(message),
      (message) => this.popped(message)
    );
  }

  popped (message) {
    timer = setTimeout(() => {
      if (message) {
        this.proceed();
        if (message.timeout > 0)
          timer = setTimeout(this.pop.bind(this), message.timeout);
      } else {
        timer = null;
      }
    }, 300);
  }

  pushed (message) {
    if (message.timeout > 0 && timer === null)
      timer = setTimeout(() => {
        this.pop();
      }, message.timeout);
  }
}

Container.defaultProps = {
  horizontal: "center",
  id: "candle-wax-snack-container",
  vertical: "bottom"
};

Container.propTypes = {
  horizontal: PropTypes.string.isRequired,
  vertical: PropTypes.string.isRequired
};

export default Container;
