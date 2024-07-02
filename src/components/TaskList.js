import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
          </span>
          <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
          <button onClick={() => dispatch(toggleComplete(index))}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
