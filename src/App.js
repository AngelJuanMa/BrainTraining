import React from 'react';
import './assets/App.css';
import { useSelector, useDispatch } from 'react-redux'
import {increment} from './actions';
import Router from './Router';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Router></Router>
      {/*
        <button onClick={() => dispatch(increment())}>+</button>
      <h1>Counter: {counter}</h1>
      */
      }
      
    </div>
  );

}

export default App;
