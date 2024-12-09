import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !dueDate) {
      alert('Title and Due Date are required!');
      return;
    }

    // Create a new task object
    const newTask = {
      title,
      description,
      dueDate,
    };

    // Call the addTask function to add the task
    addTask(newTask);

    // Clear the form
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <div className="task-form">
      <h3>Create New Task</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-title">Title:</label>
        <input
          type="text"
          id="task-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="task-desc">Description:</label>
        <textarea
          id="task-desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label htmlFor="task-date">Due Date:</label>
        <input
          type="date"
          id="task-date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />

        <button type="submit">Save Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
