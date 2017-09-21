"use strict";

import React from "react";
import snackStories from "../src/snack/stories";
import { storiesOf } from "@storybook/react";

storiesOf("Snack", module)
  .add("infinite", snackStories.infinite)
  .add("two seconds", snackStories.timed);
