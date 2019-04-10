import React, { PureComponent } from 'react';

class Toogle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
     on: true
    };

    const { onAction, offAction } = this.props;
    this.onAction = onAction;
    this.offAction = offAction;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.onAction();
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    if (!this.state.on) {
      this.onAction();
    } else {
      this.offAction();
    }

    this.setState((previousState) => {
      return {
        on: !previousState
      }
    });
  };

  render() {
    return(<button onClick={this.handleClick}>Toogle WebSocket</button>)
  }
}

export default Toogle;