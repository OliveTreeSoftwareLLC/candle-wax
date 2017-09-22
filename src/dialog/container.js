"use strict";

import BaseContainer from "../common/container";
import { Button } from "material-ui";
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from "material-ui/Dialog";
import { map } from "lodash";
import PropTypes from "prop-types";
import React from "react";

class Container extends BaseContainer {
  constructor (props, state) {
    super(props, state, (message) => {
      this.placeholder = message || this.placeholder;

      let fullScreen = message ? message.fullScreen :
        this.placeholder ? this.placeholder.fullScreen : false;
      let title = message ? message.title :
        this.placeholder ? this.placeholder.title : "";
      let details = message ? message.details :
        this.placeholder ? this.placeholder.details : "";
      let actions = message ? message.actions :
        this.placeholder ? this.placeholder.actions : [];

      return <Dialog fullScreen={fullScreen}
        onRequestClose={this.pop.bind(this)}
        open={message !== null && message !== undefined}>
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {details}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {message && map(actions, (action, index) =>
            <Button color={action.color}
              key={index}
              onClick={(e) => {
                if (action.onClick)
                  action.onClick(e);

                if (!e.defaultPrevented)
                  this.pop();
              }}>
              {action.content}
            </Button>
          )}
        </DialogActions>
      </Dialog>;
    });
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
