import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import '../App.css';

interface Task {
    id:number;
    title: string;
    dueDate: Date;
    category: string;
  }


function App() {
 // const [tasks, setTasks] = useState([]);
   const [tasks, setTasks] = useState<Task[]>([]);
   
  const addTask = (newTask:Task) => {
    // Add the new task to the task list
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId:number) => {
    // Filter out the task with the specified taskId
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>

     <TaskForm addTask={addTask} />

      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
