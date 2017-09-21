"use strict";

import { Button } from "material-ui";
import { Container as SnackContainer, Message as SnackMessage } from "./index";
import { createMuiTheme, MuiThemeProvider } from "material-ui/styles";
import React from "react";

const theme = createMuiTheme({
  palette: {
    type: "light"
  }
});

const infinite = () =>
  <MuiThemeProvider theme={theme}>
    <div>
      <SnackContainer />
      <Button onClick={() => new SnackMessage("Hey there!").show()}
        raised>
        Show message
      </Button>
    </div>
  </MuiThemeProvider>;

const timed = () =>
  <MuiThemeProvider theme={theme}>
    <div>
      <SnackContainer />
      <Button onClick={() => new SnackMessage("Hey there!", 2000).show()}
        raised>
        Show message
      </Button>
    </div>
  </MuiThemeProvider>;

export default {
  infinite,
  timed
};
