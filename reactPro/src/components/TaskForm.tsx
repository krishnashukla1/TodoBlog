// src/components/TaskForm.tsx
import React, { useState } from 'react';
import { createTask } from '../services/api'; // Assuming you have an API helper for making API requests

interface TaskFormProps {
  onTaskCreated: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskCreated }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [datetime, setDatetime] = useState<string>('');
  const [deadline, setDeadline] = useState<string>('');
  const [priority, setPriority] = useState<string>('Low');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found, please login');

      await createTask({ title, description, datetime, deadline, priority, token });
      onTaskCreated(); // Notify parent that a new task was created
      setTitle('');
      setDescription('');
      setDatetime('');
      setDeadline('');
      setPriority('Low');
    } catch (err: any) {
      setError(err.message || 'Failed to create task');
    }
  };

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Description:</label>
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Datetime:</label>
          <input 
            type="datetime-local" 
            value={datetime} 
            onChange={(e) => setDatetime(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Deadline:</label>
          <input 
            type="datetime-local" 
            value={deadline} 
            onChange={(e) => setDeadline(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Priority:</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
