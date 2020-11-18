import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import valueContext from './valueContext';

function App() {
  let [number, setNumber] = useState(50);
  let value = 81;
  return (
    <ValueContext.Provider value = {value}>
    <div>
     Hello World
     <Parent num = {number}> </Parent>
     <button onClick = {() => {setNumber(++number)}}> Update Number</button>
    </div>
    </ValueContext.Provider>
  );
}

export default App;
