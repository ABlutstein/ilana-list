import React, { useState } from "react";
import "./forms.css";

const AddTaskForm = ({ addTask }) => {
  const initialFormState = {
    id: null,
    name: "",
    completed: ""
  };
  const [task, setTask] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    setTask({
      ...task,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!task.name) return;

    addTask(task);

    setTask(initialFormState);
  };

  return (
    <form className="form-inLine" align="center" onSubmit={handleSubmit}>
      <label className="sub-head"></label>
      <input
        type="text"
        className="textEnter"
        name="name"
        placeholder="Enter your task here"
        value={task.name}
        onChange={handleInputChange}
      />
      <button className="button1">Add new task</button>
    </form>
  );
};

export default AddTaskForm;
