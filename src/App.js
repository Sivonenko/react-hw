import React, { Component } from 'react';
import Counter from './components/Counter/Counter';
import DropDown from './components/Dropdown/Dropdown';
import ColorPicker from './components/ColorPicker/ColorPicker';
import TodoList from './components/TodoList';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo-1', completed: false },
      { id: 'id-2', text: 'Todo-2', completed: false },
      { id: 'id-3', text: 'Todo-3', completed: false },
      { id: 'id-4', text: 'Todo-4', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Состояние компонента</h1>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        <Counter initialValue={10} />
        <DropDown />
        <ColorPicker options={colorPickerOptions} />
      </div>
    );
  }
}

export default App;
