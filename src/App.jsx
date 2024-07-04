import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  const [tasks, setTasks] = useState(storedTasks);
  const [filter, setFilter] = useState('all');
  const [containerHeight, setContainerHeight] = useState('auto');

  useEffect(() => {
    const taskListHeight = 350 + tasks.length * 100; // Adjust based on your task item height
    setContainerHeight(taskListHeight + 'px');
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const updateTaskStatus = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div style={{ height: containerHeight, overflowY: 'auto' }} className="App">
      <h2>My To Do List</h2>
      <p>Insert title and description</p>
      <TaskForm onAddTask={addTask} />
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('active')}>Active</button>
      </div>
      <TaskList
        tasks={filteredTasks} 
        onUpdateStatus={updateTaskStatus}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
      />
    </div>
  );
};

export default App;