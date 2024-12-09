import React, { useState } from 'react';
import TaskForm from './TaskForm';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

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
