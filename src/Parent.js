import Child from './Child'
import Child2 from './Child2'

function Parent(props) {
    return (
      <div className="App">
       Parent
       <Child num = {props.num}></Child> 
       <Child2></Child2>
      </div>
    );
  }
  
  export default Parent;