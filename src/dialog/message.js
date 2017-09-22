"use strict";

class Message {
  constructor (title, details, fullScreen = false) {
    this.title = title;
    this.details = details;
    this.fullScreen = fullScreen;
  }

  show (id = "candle-wax-dialog-container") {
    window[id].push(this);
  }
}

export default Message;
