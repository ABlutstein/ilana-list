import React, { useState } from "react";
import AddTaskForm from "./components/forms/AddTaskForm";
import EditTaskForm from "./components/forms/EditTaskForm";
import TaskTable from "./components/tables/TaskTable";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Tidy up",
      completed: false
    },
    {
      id: 2,
      name: "Feed pippi",
      completed: false
    },
    {
      id: 3,
      name: "Eat chocolate",
      completed: false
    }
  ]);

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,
    name: "",
    completed: ""
  };

  const [currentTask, setCurrentTask] = useState(initialFormState);

  const addTask = task => {
    task.id = tasks.length;
    setTasks([...tasks, task]);
  };

  const deleteTask = event => {
    setEditing(false);
    setTasks(
      tasks.filter(task => event.currentTarget.dataset.task !== task.id)
    );
  };

  const handleChange = (task, event) => {
    if (task => event.currentTarget.dataset.task === task.id) {
      task.completed = !task.completed;
    }
    return task;
  };

  const updateTask = event => {
    setTasks(
      tasks.map(task =>
        event.currenTarget.dataset.task.id
          ? event.currentTarget.dataset.updatedTask
          : task
      )
    );
  };

  const editRow = task => {
    setEditing(true);
    setCurrentTask({
      id: task.id,
      name: task.name,
      completed: task.completed
    });
  };

  return (
    <div className="container">
      <h1>What do I have to do today?</h1>
      <div>
        <div>
          {editing ? (
            <div>
              <EditTaskForm
                editing={editing}
                setEditing={setEditing}
                currentTask={currentTask}
                updateTask={updateTask}
              />
            </div>
          ) : (
            <div>
              <AddTaskForm addTask={addTask} />
            </div>
          )}
        </div>

        <div>
          <TaskTable
            tasks={tasks}
            editRow={editRow}
            deleteTask={deleteTask}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
