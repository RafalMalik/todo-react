import {EventEmitter} from 'events';
import assign from 'object-assign';

const TodoStore = assign({}, EventEmitter.prototype, {
  items: {
    todos: [
      { id: 0, name: 'Make dinner' },
      { id: 1, name: 'Pay insurance' },
      { id: 2, name: 'Send package' },
    ]
  },

  nextId: 3,

  getAll: function getAll() {
    return this.items;
  },

  emitChange: function emitChange() {
    this.emit('change');
  },

  addChangeListener: function addChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function removeChangeListener(callback) {
    this.removeListener('change', callback);
  },

  addNewTodo: function addNewTodo(todo) {
    const todos = this.items.todos;
    if (!todos || typeof this.items.todos.length !== 'number') {
      this.items.todos = [];
    }
    todo.id = this.nextId++;
    this.items.todos.push(todo);
  },

  deleteTodo: function deleteTodo(id) {
    this.items.todos = this.items.todos.filter((todo) => todo.id !== id);
  }
});

export default TodoStore;
