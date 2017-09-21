"use strict";

import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import React from "react";
import snackStories from "../src/snack/stories";
import { storiesOf } from "@storybook/react";

storiesOf("Snack", module)
  .add("infinite", snackStories.infinite)
  .add("two seconds", snackStories.timed);
