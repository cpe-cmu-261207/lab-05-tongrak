import React from 'react';

import Header from './component/Header';
import TodoList from './component/TodoList';


function App() {

  

  return (
    <div>

      {/* header section */}
      <Header/>

      {/* Todolist Box */}
      <TodoList/>

      {/* Footer section */}
      <p className='text-center text-gray-400'> Copyright © 2021 </p>
    </div>
  );
}

export default App;
