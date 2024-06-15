// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-svg-core';
import './App.css';

import React from 'react';
import Todo from './todo/todo';
import About from './about/about';

function App() {
  return (
    <div className='container'>
      <Todo />
      <About/>
    </div>
  );
}

export default App;
