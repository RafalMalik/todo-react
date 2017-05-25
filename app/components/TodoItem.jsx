import React from 'react';
import TodoStore from '../stores/TodoStore';

export default class Todo extends React.Component {

  deleteTodo(e) {
    e.preventDefault();
    TodoStore.deleteTodo(this.props.todo.id);
    TodoStore.emitChange();
  }

  render() {
    const todo = this.props.todo;
    return (
      <li>
        <span className="todo-name">{todo.name}</span>
        <div className="btn btn-xs btn-danger delete" onClick={this.deleteTodo.bind(this)}>
          <i className="glyphicon glyphicon-remove"></i>
        </div>
      </li>
    );
  }
}
