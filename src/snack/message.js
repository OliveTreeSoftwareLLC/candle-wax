"use strict";

class Message {
  constructor (text, timeout = 0, autoDismiss = true, horizontal = "center", vertical = "bottom") {
    this.autoDismiss = autoDismiss;
    this.text = text;
    this.timeout = timeout;
    this.horizontal = horizontal;
    this.vertical = vertical;
  }

  show (id = "candle-wax-snack-container") {
    window[id].push(this);
  }
}

export default Message;
