import valueContext from './valueContext';
import React, {useContext} from 'react';

function Child(props) {
  let value = useContext(valueContext);
    return (
      <div className="App">
       Child Number: {value}
       <br/>
       <button onClick = {() => {value[1] (++value[0])}}>Update Child Number</button>
       <br/>
       Number: {props.num}
      </div>
    );
  }
  
  export default Child;