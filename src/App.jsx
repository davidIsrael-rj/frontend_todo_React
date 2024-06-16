import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-svg-core';
import './App.css';

import React from 'react';
import Todo from './todo/todo';
import About from './about/about';
import Menu from './template/menu';

function App() {
  return (
    <div className='container'>
      <Menu/>
      <Todo />
      <About/>
    </div>
  );
}

export default App;
