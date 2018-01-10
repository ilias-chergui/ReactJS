import React from 'react';

export default class TodoItem extends React.Component {

  render() {
    const {index,item,AddToList,toggleTodo} = this.props;

    let string = item.done ? 'Marquer à faire': 'Marquer comme fait';
    return (
      <div key={index} className="todo">
        <input type="checkbox" className="inputs"
        value={index} onClick={(e) => AddToList(index, e.target.checked)} />
        {item.title}
        <button onClick={() => toggleTodo(item, index)}> {string} </button>
      </div>
    );
  };
};
