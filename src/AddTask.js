import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from './redux/actions/actions';

const AddTask = ({ addTask }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      const newId = Date.now();
      addTask(newId, taskDescription);
      setTaskDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default connect(null, { addTask })(AddTask);
