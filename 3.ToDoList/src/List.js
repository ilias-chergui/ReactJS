import React from 'react';

export default class Liste extends React.Component {
  titreTodo() {
    return 'My To Do List !';
  }
  toggleTodo(todoDone, index) {
    console.log(todoDone, index);
  }
  showTodos(todos) {
    return (
      todos.map((todo, index) => {
        return (
          <div key={index} className="todo" >
            {todo.title}
            <button onClick={() => this.toggleTodo(todo, index)}>{todo.done ? 'true': 'false'}</button>
          </div>
        )}
    ));
  }
  render() {
    return (
      <div className="Liste">
        <br/>
        {this.showTodos(this.props.todos)}
        <br/>
        {this.props.todos}
      </div>
    );
  }
}
