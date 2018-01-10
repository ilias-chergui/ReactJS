import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Liste from './List';
import TodoForm from './TodoForm';

import Rebase from 're-base';
import app from './Base';
var base = Rebase.createClass(app.database());

class App extends Component {

  state = {
    todos:[],
    selectedTodos:[]
  };

  componentDidMount(){
    base.syncState(`/`, {
      context: this,
      state: 'todos',
      asArray: true
    });
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
    let listTodo = this.state.todos;
    list.forEach(item => {
        let index = listTodo.indexOf(item);
        listTodo[index].done = !listTodo[index].done
      }
    );
    this.setState({
      todos: listTodo,
      selectedTodos: []
    })
    let inpput = document.querySelectorAll('.inputs');
    inpput.forEach(inpput => {
        inpput.checked = false;
      }
    )
  }

  deleteTodo() {
    let list = this.state.selectedTodos;
    let trash = this.state.todos;
    list.forEach(todo =>
      trash.splice(trash.indexOf(todo), 1)
    );
    this.setState({
      todos: trash,
      selectedTodos: []
    });
    let inpput = document.querySelectorAll('.inputs');
    inpput.forEach(input => {
      input.checked = false;
    });
  }

  render() {
    const afficher = this.state.selectedTodos.length > 0;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My To Do List With React</h1>
          <p></p>
        </header>
        <TodoForm onNewTodo={this.onNewTodo.bind(this)} />
        <Liste
          AddToList={this.AddToList.bind(this)}
          todos={this.state.todos}
          onTodoToggle={this.todoToggleState.bind(this)}
        />
        { afficher ? <button onClick={() => this.deleteTodo()}> Supprimer </button> : null }
        { afficher ? <button onClick={() => this.processTodo()}> Inverser le statut </button> : null }

      </div>
    );
  }
}

export default App;
