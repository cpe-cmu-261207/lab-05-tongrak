import React from 'react';

import Header from './component/Header';
import TodoList from './component/TodoList';

import { useState } from 'react';

function App() {

  

  return (
    <div>

      {/* header section */}
      {/* <div className='flex justify-center items-end space-x-2'>
        <span className='text-center italic my-2 text-2xl'>Minimal Todo List </span>
        <span className='text-gray-400 italic my-2 text-xl'>by ...</span>
      </div> */}
      <Header/>

      {/* Todolist Box */}
      <TodoList/>

      {/* Footer section */}
      <p className='text-center text-gray-400'> No idea Empty forehead </p>
    </div>
  );
}

export default App;
