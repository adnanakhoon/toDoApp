import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      <h2>Tasks</h2>
      <ul className="task-list">
        {tasks.length ? (
          tasks.map(task => (
            <Task key={task.id} task={task} />
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
