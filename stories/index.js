"use strict";

import dialogStories from "../src/dialog/stories";
import React from "react";
import snackStories from "../src/snack/stories";
import { storiesOf } from "@storybook/react";

storiesOf("Snack", module)
  .add("infinite", snackStories.infinite)
  .add("left-aligned", snackStories.left)
  .add("top-aligned", snackStories.top)
  .add("timed", snackStories.timed);

storiesOf("Dialog", module)
  .add("normal", dialogStories.normal)
  .add("full-screen", dialogStories.fullScreen);
