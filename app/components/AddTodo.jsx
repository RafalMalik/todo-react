import React from 'react';
import TodoStore from '../stores/TodoStore';

export default class AddTodo extends React.Component {
  addTodo() {
    const newTodoName = this.refs.todoName.value;
    if (newTodoName) {
      TodoStore.addNewTodo({
        name: newTodoName
      });
      TodoStore.emitChange();
      this.refs.todoName.value = '';
    }
  }

  render() {
    return (
	  <div className="add-todo input-group">
		<input type="text" className="form-control" placeholder="New Todo name" ref="todoName" />
		<span className="input-group-btn">
			<button className="btn btn-success add-button" onClick={this.addTodo.bind(this)}>
				Add Todo
			</button>
		</span>
	  </div>
    );
  }
}
