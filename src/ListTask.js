// ListTask.js
import React from 'react';
import { connect } from 'react-redux';
import { toggleTask, editTask } from './redux/actions/actions';

const ListTask = ({ tasks, toggleTask, editTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input type="checkbox" checked={task.isDone} onChange={() => toggleTask(task.id)} />
          {task.isDone ? <s>{task.description}</s> : task.description}
          <button onClick={() => editTask(task.id, prompt('Edit Task:', task.description))}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { toggleTask, editTask })(ListTask);