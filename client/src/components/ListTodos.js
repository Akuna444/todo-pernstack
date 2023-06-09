import { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodos";

function ListTodos() {
  const [todos, setTodos] = useState([]);
  const deleteTodos = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const getTodos = async () => {
    try {
      const res = await fetch("http://localhost:5000/todos");
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <h2>Basic Table</h2>
      <p>
        The .table class adds basic styling (light padding and horizontal
        dividers) to a table:
      </p>
      <table class="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    onClick={() => deleteTodos(todo.todo_id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ListTodos;
