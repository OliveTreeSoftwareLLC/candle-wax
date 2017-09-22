"use strict";

class Message {
  constructor (text, timeout = 0, horizontal = "center", vertical = "bottom") {
    this.text = text;
    this.timeout = timeout;
    this.horizontal = horizontal;
    this.vertical = vertical;
  }

  show () {
    window.orio.push(this);
  }
}

export default Message;
