import React from "react";

class ClickCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClickDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  handleClickIncrement = () => {
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClickDecrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleClickIncrement}>+</button>
      </div>
    );
  }
}

export default ClickCounter;
