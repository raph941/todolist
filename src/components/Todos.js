import React, { Component } from "react";
import { render } from "@testing-library/react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markCompleate={this.props.markCompleate}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markCompleate: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
