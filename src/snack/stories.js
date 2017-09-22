"use strict";

import { Button } from "material-ui";
import { Container, Message } from "./index";
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
      <Container />
      <Button onClick={() => new Message("To infinity and beyond!").show()}
        raised>
        Show infinite message
      </Button>
    </div>
  </MuiThemeProvider>;

const left = () =>
  <MuiThemeProvider theme={theme}>
    <div>
      <Container horizontal="left"
        id="left-orio" />
      <Button onClick={() => new Message("I'm the only one left!", 0, true).show("left-orio")}
        raised>
        Show left-aligned message
      </Button>
    </div>
  </MuiThemeProvider>;

const timed = () =>
<MuiThemeProvider theme={theme}>
  <div>
    <Container id="timed-orio" />
    <Button onClick={() => new Message("For I am ephemeral, and perish ere the day breaks...", 5000, false).show("timed-orio")}
      raised>
      Show timed message
    </Button>
  </div>
</MuiThemeProvider>;

const top = () =>
<MuiThemeProvider theme={theme}>
  <div>
    <Container horizontal="right"
      id="top-orio"
      vertical="top" />
    <Button onClick={() => new Message("Front and right, men!", 0, true).show("top-orio")}
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
