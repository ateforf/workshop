
// App.js
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './redux/reducers.js/reducer';
import AddTask from './AddTask';
import ListTask from './ListTask';
import './App.css'
import './AddTask.css'

const store = createStore(todoReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;