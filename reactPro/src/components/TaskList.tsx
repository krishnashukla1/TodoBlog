// src/components/TaskList.tsx
import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../services/api'; // Assuming you have an API helper for making API requests

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  const loadTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found, please login');

      const fetchedTasks = await fetchTasks(token);
      setTasks(fetchedTasks);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch tasks');
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <h1>Your Tasks</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>{task.datetime} - {task.deadline}</p>
            <p>Priority: {task.priority}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
