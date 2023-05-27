import { Fragment, useEffect, useState } from "react";

function ListTodos() {
  const [todos, setTodos] = useState();
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
  console.log(todos);
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
            return <tr>{todo.description}</tr>;
          })}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ListTodos;
