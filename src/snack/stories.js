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
      <Button onClick={() => new SnackMessage("To infinity and beyond!").show()}
        raised>
        Show infinite message
      </Button>
    </div>
  </MuiThemeProvider>;

const left = () =>
  <MuiThemeProvider theme={theme}>
    <div>
      <SnackContainer horizontal="left"
        id="left-orio" />
      <Button onClick={() => new SnackMessage("I'm the only one left!", 0, true, "left").show("left-orio")}
        raised>
        Show left-aligned message
      </Button>
    </div>
  </MuiThemeProvider>;

const timed = () =>
<MuiThemeProvider theme={theme}>
  <div>
    <SnackContainer id="timed-orio" />
    <Button onClick={() => new SnackMessage("For I am ephemeral, and perish ere the day breaks...", 5000, false, "left").show("timed-orio")}
      raised>
      Show timed message
    </Button>
  </div>
</MuiThemeProvider>;

const top = () =>
<MuiThemeProvider theme={theme}>
  <div>
    <SnackContainer horizontal="right"
      id="top-orio"
      vertical="top" />
    <Button onClick={() => new SnackMessage("Front and right, men!", 0, true, "left").show("top-orio")}
      raised>
      Show top-aligned message
    </Button>
  </div>
</MuiThemeProvider>;

export default {
  infinite,
  left,
  timed,
  top
};
