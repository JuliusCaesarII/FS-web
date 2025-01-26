import React, { useState } from 'react';

const App = () => {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTask ([...tasks, newTask]);
    setNewTask('');
  }

  return (
    <div className="min-h-screen bg-blue-200 flex justify-center items-center">
        <div className="bg-white p-6 w-full max-w-md rounded-lg shadow-md">
          <h1 className="text-2xl text-center"> To-do-List </h1>
          <div className="flex justify-center space-x-2">
            <input
              className="border border-blue-400 rounded-lg "
              type="text"
              placeholder=' Add new task '
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)} />
            <button 
              className="bg-blue-300 px-2 rounded-lg border border-cyan-400 hover:bg-yellow-200 "
                onClick={addTask}> add </button>
          </div>
          <ul className="space-y-2">
            {tasks.map((tasks, index) => (<li key={index}>{tasks} </li>))}
          </ul>
        </div>
    </div>
  )
}

export default App;