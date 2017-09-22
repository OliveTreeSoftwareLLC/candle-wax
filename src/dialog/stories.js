"use strict";

import { Action, Container, Message } from "./index";
import { Button } from "material-ui";
import { createMuiTheme, MuiThemeProvider } from "material-ui/styles";
import React from "react";

const theme = createMuiTheme({
  palette: {
    type: "light"
  }
});

const fullScreen = () =>
  <MuiThemeProvider theme={theme}>
    <div>
      <Container />
      <Container id="second-container" />
      <Button onClick={() => {
          let message = new Message("It was a dark and stormy knight.", "Then he got scurvy and died.", true);
          message.actions.push(new Action("Go away", (e) => {
            e.preventDefault();
            let no = new Message("No!", "");
            no.actions.push(new Action("OK, I submit"));
            no.show("second-container");
          }))
          message.show();
        }}
        raised>
        Show full-screen dialog
      </Button>
    </div>
  </MuiThemeProvider>;

const normal = () =>
  <MuiThemeProvider theme={theme}>
    <div>
      <Container />
      <Button onClick={() => {
          let message = new Message("It was a dark and stormy knight.", "Then he got scurvy and died.");
          message.actions.push(new Action("OK", () => { }))
          message.show();
        }}
        raised>
        Show dialog
      </Button>
    </div>
  </MuiThemeProvider>;

export default {
  fullScreen,
  normal
};
