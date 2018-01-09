import React from 'react';
import TodoItem from './TodoItem';

export default class Liste extends React.Component {

  titreTodo() {
    return 'My To Do List !';
  }

  showTodos(todos) {
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
    const afficher = this.props.selectedTodos.length > 0;
    return (
      <div className="Liste">
        <br/>
        {this.showTodos(this.props.todos)}
        <br/>
        {this.props.todos}
        { afficher ? <button onClick={this.props.deleteTodo}> Supprimer </button> : null }
        { afficher ? <button onClick={this.props.processTodo}> Inverser le statut </button> : null }
      </div>
    );
  }
}
