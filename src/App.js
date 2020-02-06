import React, { Component } from 'react';
import ToDo from './ToDo.js';
import AddToDo from './AddToDo.js';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "go shopping", date: "20.02.2020" },
      { id: 2, content: "fix the chair", date: "15.02.2020"}
    ],
    nextId: 3
  }
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  }
  addToDo = (todo) => {
    let nextId = this.state.nextId;
    todo.id = nextId;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
      nextId: nextId + 1
    });
  }
  render () {
    return (
      <div className="todo-app">
        <div className="nav bg-dark justify-content-center mb-4">
          <h1 className="text-light m-3">ToDo list</h1>
        </div>
        <div className="container">
          <AddToDo addToDo={this.addToDo} />
          <ToDo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
