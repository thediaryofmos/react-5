//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import valueContext from './valueContext';

function App() {
  let [number, setNumber] = useState(50);
  let value = useState(81);

  return (
    <valueContext.Provider value = {value}>
    <div>
     Hello World
     <Parent num = {number}> </Parent>
     <button onClick = {() => {setNumber(++number)}}> Update Number</button>
    </div>
    </valueContext.Provider>
  );
}

export default App;
