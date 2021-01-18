import React from 'react';
import './Counter.css';
import Controls from './Controls';
class Counter extends React.Component {
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="Counter">
        <span className="Counter__value">{value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
export default Counter;
