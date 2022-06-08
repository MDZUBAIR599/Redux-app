
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Divide, Increment, Multiply } from './action.types';
// import { Decrement, Increment } from './action.types';
import './App.css';
// import { Add, sub } from './payload';


function App() {

  const dispatch= useDispatch();

  const counter = useSelector((state)=> state.counter)
  return (
    <div className="App">
      <input type="number" placeholder="Enter Number" style={{width:"120px" }}>
      </input>
      <h1>counter:{counter}</h1>
      <button onClick={(()=> dispatch({type:Increment}))}>ADD</button>
      <button onClick={(()=> dispatch({type:Decrement}))}>Subtract</button>
      <button onClick={(()=> dispatch({type:Multiply}))}>Multiply</button>
      <button onClick={(()=> dispatch({type:Divide}))}>Divide</button>
      
      
    </div>
  );
}

export default App;
