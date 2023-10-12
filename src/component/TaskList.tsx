import React from 'react';

interface Task {
  id: number;
  title: string;
  dueDate: string;
  category: string;
}

interface TaskListProps {
  tasks: Task[];            // An array of tasks
  onDeleteTask: (taskId: number) => void;  // A function to delete a task
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? ( //handle the scenario where there are no tasks
        <p>No tasks to display.</p>
      ) : (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Due Date</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                    <td>{task.title}</td>
                    <td>{task.dueDate}</td>
                    <td>{task.category}</td>
                    <td><button onClick={() => onDeleteTask(task.id)}>Delete</button></td>                    
                    </tr>
                ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
