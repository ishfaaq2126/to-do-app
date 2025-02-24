import React from 'react';

function TaskItem({ task, deleteTask }) {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Done</button>
    </div>
  );
}

export default TaskItem;