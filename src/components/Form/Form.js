import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    expirience: 'junior',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Прозвище{' '}
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <p>Ваш уровень</p>
        <label htmlFor="">
          <input
            type="radio"
            name="expirience"
            value="junior"
            onChange={this.handleChange}
            cheched={this.state.expirience === 'junior'}
          />
          junior
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="expirience"
            value="middle"
            onChange={this.handleChange}
            cheched={this.state.expirience === 'middle'}
          />
          middle
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="expirience"
            value="senior"
            onChange={this.handleChange}
            cheched={this.state.expirience === 'senior'}
          />
          senior
        </label>

        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form;
