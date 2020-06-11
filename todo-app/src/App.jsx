import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Play Mario Kart" },
    ],
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, (({ content }) => ({
        content,
        id: this.state.todos.length + 1,
      }))(todo)],
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
