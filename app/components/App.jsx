import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center">TodoApp</h1>
		<h3 className="text-center author">by R. Malik</h3>
		<div className='container-fluid'>
			<div className='container'>
				<div className='col-lg-6 col-lg-offset-3' id="todo-app-list">
					<AddTodo/>
					<TodoList/>
				</div>
			</div>
		</div>
      </div>
    );
  }
}
