import React from 'react';
import TodoItem from './TodoItem';

export default class Liste extends React.Component {

  titreTodo() {
    return 'My To Do List !';
  }

  showTodos(todos) {
    console.log(todos);
    return (
      todos.map((todo, index) => {
        return (
          <TodoItem
            AddToList={this.props.AddToList}
            item={todo}
            index={index}
            key={index}
            toggleTodo={this.props.onTodoToggle}
          />
        )}
    ));
  }

  render() {
    return (
      <div className="Liste">
        <br/>
        {this.showTodos(this.props.todos)}
        <br/>
      </div>
    );
  }
}
