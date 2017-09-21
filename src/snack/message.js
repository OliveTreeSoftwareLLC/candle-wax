"use strict";

class Message {
  constructor (text, timeout = 0) {
    this.text = text;
    this.timeout = timeout;
  }

  show () {
    window.orio.push(this);
  }
}

export default Message;
