import React, { useState, useEffect } from "react";
import "./forms.css";

const EditTaskForm = props => {
  const [task, setTask] = useState(props.currentTask);

  useEffect(() => {
    setTask(props.currentTask);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setTask({ ...task, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!task.name) return;
    props.updateTask(task.id, task);
  };

  return (
    <form
      align="center"
      style={{ padding: "60px" }}
      className="form-inline"
      onSubmit={handleSubmit}
    >
      <label className="sub-head"></label>
      <input
        type="text"
        className="updateEnter"
        placeholder="Edit your task here"
        name="name"
        value={task.name}
        onChange={handleInputChange}
      />
      <button className="button1" style={{}}>
        Update task
      </button>
      <button
        className="button1"
        onClick={() => props.setEditing(false)}
        style={{ margin: "5px" }}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditTaskForm;
