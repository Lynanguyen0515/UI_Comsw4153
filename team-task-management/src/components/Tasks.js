import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Tasks = () => {
  const nav = useNavigate();
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("auth_token") === null) {
      return nav("/login");
    }

    const token = localStorage.getItem("auth_token");
    console.log(token);
    Axios.get(`${BACKEND_URL}/tasks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        setTasks(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, [nav]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="page">
      <h2>Tasks</h2>
      <TaskForm addTask={addTask} />
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <p>Due: {task.dueDate}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks yet.</p>
      )}
    </div>
  );
};

export default Tasks;
