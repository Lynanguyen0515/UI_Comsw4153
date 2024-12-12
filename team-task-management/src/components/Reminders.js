import React, { useState } from "react";

const Reminders = () => {
  const [reminders, setReminders] = useState([]);
  const [reminder, setReminder] = useState({ task: "", dateTime: "" });

  const addReminder = (e) => {
    e.preventDefault();
    if (reminder.task && reminder.dateTime) {
      setReminders([...reminders, reminder]);
      setReminder({ task: "", dateTime: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="page">
      <h2>Reminders</h2>
      <form onSubmit={addReminder}>
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          id="task"
          value={reminder.task}
          onChange={(e) => setReminder({ ...reminder, task: e.target.value })}
          required
        />
        <label htmlFor="dateTime">Date & Time:</label>
        <input
          type="datetime-local"
          id="dateTime"
          value={reminder.dateTime}
          onChange={(e) =>
            setReminder({ ...reminder, dateTime: e.target.value })
          }
          required
        />
        <button type="submit">Add Reminder</button>
      </form>
      {reminders.length > 0 ? (
        <ul>
          {reminders.map((rem, index) => (
            <li key={index}>
              <p>Task: {rem.task}</p>
              <p>Reminder set for: {new Date(rem.dateTime).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reminders set.</p>
      )}
    </div>
  );
};

export default Reminders;
