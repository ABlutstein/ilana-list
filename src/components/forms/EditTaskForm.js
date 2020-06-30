import React, { useState, useEffect } from "react";
import "./forms.css";

const EditTaskForm = ({ updateTask, setEditing, currentTask }) => {
  const [task, setTask] = useState(currentTask);

  useEffect(() => {
    setTask(currentTask);
  }, [currentTask]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setTask({ ...task, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!task.name) return;
    updateTask(task, task);
  };

  return (
    <form className="form-inLine" align="center" onSubmit={handleSubmit}>
      <label className="sub-head"></label>
      <input
        type="text"
        className="updateEnter"
        placeholder="Edit your task here"
        name="name"
        value={task.name}
        onChange={handleInputChange}
      />
      <button className="button1">Update task</button>
      <button className="button1" onClick={() => setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditTaskForm;
