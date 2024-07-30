import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { selectImportantTasks } from '../redux/tasksSlice';

const ImportantTaskList = () => {
  const importantTasks = useSelector(selectImportantTasks);

  return (
    <div>
      <h2 className="important-task-header">Important Tasks</h2>
      <ul className="important-task-list">
        {importantTasks.length ? (
          importantTasks.map(task => (
            <Task key={task.id} task={task} />
          ))
        ) : (
          <p>No important tasks available</p>
        )}
      </ul>
    </div>
  );
};

export default ImportantTaskList;
