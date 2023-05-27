import { Fragment, useState } from "react";

function EditTodos({ todo }) {
  const updateTodosHandler = async (e) => {
    e.preventDefualt();
    try {
      const body = { description };

      const response = await fetch(`http://localhost:5000/${todo.todo_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      console.log(response);
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };
  const [description, setDescription] = useState(todo.description);
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target="#myModal"
        onClick={(e) => updateTodosHandler(e)}
      >
        Edit
      </button>

      <div class="modal" id={`${todo.todo_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Modal Heading</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
              >
                Edit
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditTodos;
