"use strict";

import BaseContainer from "../common/container";
import Dialog, { DialogTitle } from "material-ui/Dialog";
import PropTypes from "prop-types";
import React from "react";

class Container extends BaseContainer {
  constructor (props, state) {
    super(props, state, (message) =>
      <Dialog fullScreen={message.fullScreen}
        onRequestClose={this.pop.bind(this)}
        open={message !== null && message !== undefined}>
        <DialogTitle>{message.title}</DialogTitle>
      </Dialog>);
  }
}

Container.defaultProps = {
  fullScreen: false,
  id: "candle-wax-dialog-container"
};

Container.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default Container;
