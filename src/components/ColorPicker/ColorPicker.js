import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activaOptionIdx: 3,
  };

  setActiveIdx = index => {
    this.setState({ activaOptionIdx: index });
  };

  makeOptionsClassesName = index => {
    const optionClasses = ['ColorPicker__option'];
    if (index === this.state.activaOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    const { activaOptionIdx } = this.state;
    const { options } = this.props;

    const { label } = options[activaOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет {label}</p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionsClassesName(index)}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
