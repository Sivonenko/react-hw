import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {
  state = {};

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}

export default App;
