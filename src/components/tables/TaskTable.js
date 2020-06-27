import React from "react";
import "./tables.css";

const TaskTable = props => {
  return (
    <table className="table-1">
      <thead align="center">
        <tr>
          <th className="completeTab" scope="col">
            Completed
          </th>
          <th className="taskTab" scope="col">
            Task
          </th>
          <th className="actionsTab" scope="col">
            Actions
          </th>
        </tr>
      </thead>
      <tbody align="center">
        {props.tasks.length > 0 ? (
          props.tasks.map(task => (
            <tr key={task.id}>
              <td className="align-middle">
                <input
                  type="checkbox"
                  style={{
                    transform: "scale(3)",
                    margin: "40px"
                  }}
                  defaultChecked={task.completed}
                  onClick={() => {
                    props.handleChange(task.id);
                  }}
                />
              </td>
              <td className="align-middle">
                {task.completed === true ? <del>{task.name}</del> : task.name}
              </td>
              <td>
                <button
                  type="button"
                  className="editButton"
                  style={{ margin: "5px" }}
                  onClick={() => {
                    props.editRow(task);
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="deleteButton"
                  style={{ margin: "5px" }}
                  onClick={() => props.deleteTask(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No tasks today</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TaskTable;
