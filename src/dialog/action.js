"use strict";

class Action {
  constructor (content, onClick, color = "primary") {
    this.content = content;
    this.onClick = onClick;
    this.color = color;
  }
}

export default Action;
