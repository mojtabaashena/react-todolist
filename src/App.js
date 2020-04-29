
import React, { Component } from 'react';
import './App.css';
import Todolists from './Components/Todolists'
import store from './store/index'
import { observer } from 'mobx-react'

function App() {
  return (
      <div>
          {store.time.toLocaleTimeString()}
          <button onClick={store.startClock}> Start</button>
          <button onClick={store.stopClock}> Pause</button>
          
          <Todolists />
       
      </div>
  );
}


export default App;
