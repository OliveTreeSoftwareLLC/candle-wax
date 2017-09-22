"use strict";

class Message {
  constructor (text, timeout = 0, autoDismiss = true) {
    this.autoDismiss = autoDismiss;
    this.text = text;
    this.timeout = timeout;
  }

  show (id = "candle-wax-snack-container") {
    window[id].push(this);
  }
}

export default Message;
