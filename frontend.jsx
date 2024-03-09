import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    try {
      await axios.post('/api/tasks', { name: newTask });
      setNewTask('');
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`/api/tasks/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const markTaskComplete = async (taskId) => {
    try {
      await axios.put(`/api/tasks/${taskId}`, { completed: true });
      fetchTasks();
    } catch (error) {
      console.error('Error marking task as complete:', error);
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
            <button onClick={() => markTaskComplete(task._id)}>Mark Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
