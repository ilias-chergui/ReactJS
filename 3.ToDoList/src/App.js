import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Liste from './List';
import TodoForm from './TodoForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos:[],
      selectedTodos:[]
    };
  }

  AddToList(index, event) {
    let _list = this.state.selectedTodos;
    let _todo = this.state.todos[index];
    if(event) {
      _list.push(_todo)
    } else {
      _list.splice(_list.indexOf(_todo), 1);
    }
    this.setState({
      selectedTodos: _list
    });
  };

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

  processTodo() {
    let list = this.state.selectedTodos;
    list.forEach(item => item.done = !item.done)
    this.setState({
      selectedTodos: list
    })
  }

  deleteTodo(item) {
    let trash = this.state.todos.filter((_todo) => {
      return _todo !== item
    });
    this.setState({todos: trash});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p></p>
        </header>
        <TodoForm onNewTodo={this.onNewTodo.bind(this)} />
        <Liste
          AddToList={this.AddToList.bind(this)}
          todos={this.state.todos}
          onTodoToggle={this.todoToggleState.bind(this)}
          selectedTodos={this.state.selectedTodos}
          processTodo={this.processTodo.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
          />
      </div>
    );
  }
}

export default App;
