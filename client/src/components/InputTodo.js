import { Fragment, useState } from "react";

function InputTodo() {
  const [description, setDescription] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const body = { description };

    try {
      const res = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form onSubmit={onSubmitHandler} className="d-flex mt-5">
        <input
          type="text"
          value={description}
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
}

export default InputTodo;
