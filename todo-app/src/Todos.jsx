import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  return (
    <div className="todos collection">
      {todos.length ? (
        todos.map((todo) => (
          <div className="collection-item" key={todo.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{todo.content}</span>{" "}
              <button className="btn white" onClick={() => deleteTodo(todo.id)}>
                🧺
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="center">You have no todos left, yay!</p>
      )}
    </div>
  );
};

export default Todos;
