"use strict";

import PropTypes from "prop-types";
import React, { PureComponent } from "react";

class Container extends PureComponent {
  constructor (props, state, itemRender, onPush, onPop) {
    super(props, state);

    window[props.id] = this;
    this.itemRender = itemRender;
    this.onPush = onPush;
    this.onPop = onPop;
    this.state = {
      item: null,
      items: []
    };
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.item !== this.state.item;
  }

  render () {
    return this.itemRender(this.state.item);
  }

  pop () {
    let items = this.state.items.splice(1);
    this.setState({
      item: null,
      items
    }, () => this.onPop ? this.onPop(items[0]) : this.proceed());

    if (this.onPop)
      this.onPop(items[0]);
  }

  proceed () {
    this.setState({
      item: this.state.items[0]
    });
  }

  push (item) {
    let items = [
      ...this.state.items,
      item
    ];

        if (this.onPush)
          this.onPush(item);

    this.setState({
      item: this.state.item || item,
      items
    });
  }
}

Container.defaultProps = {
  id: "candle-wax-container"
};

Container.propTypes = {
  id: PropTypes.string.isRequired,
  timePad: PropTypes.number.isRequired
};

export default Container;
