import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Liste from './List';
import TodoForm from './TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[]
    };
  }
  onNewTodo(todo) {
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({ todos: newTodoList });
  }
  todoToggleState(todo, index) {
    let _todo = todo;
    _todo.done = ! todo.done;
    let newTodos = this.state.todos;
    newTodos[index] = _todo;
    this.setState({todos: newTodos})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoForm onNewTodo={this.onNewTodo.bind(this)} />
        <Liste todos={this.state.todos} onTodoToggle={this.todoToggleState.bind(this)}/>
      </div>
    );
  }
}

export default App;
