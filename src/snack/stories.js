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
      <SnackContainer horizontal="left" />
      <Button onClick={() => new SnackMessage("I'm the only one left!", 0, "left").show()}
        raised>
        Show left-aligned message
      </Button>
    </div>
  </MuiThemeProvider>;

const timed = () =>
<MuiThemeProvider theme={theme}>
  <div>
    <SnackContainer />
    <Button onClick={() => new SnackMessage("For I am ephemeral, and perish ere the night falls...", 3000, "left").show()}
      raised>
      Show timed message
    </Button>
  </div>
</MuiThemeProvider>;

const top = () =>
<MuiThemeProvider theme={theme}>
  <div>
    <SnackContainer horizontal="right"
      vertical="top" />
    <Button onClick={() => new SnackMessage("Front and right, men!", 0, "left").show()}
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
