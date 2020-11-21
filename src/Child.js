import valueContext from './valueContext';
import React, {useContext} from 'react';

function Child(props) {
  let value = useContext(valueContext);
    return (
      <div className="App">
       Child Number: {value}
       Number: {props.num}
      </div>
    );
  }
  
  export default Child;