
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from './action.types';
import './App.css';
import { Add, sub } from './payload';


function App() {

  const dispatch= useDispatch();

  const count = useSelector((state)=> state.count)
  return (
    <div className="App">
      <h1>Counter:{count}</h1>
      <button onClick={()=>dispatch(Add(1))}>Add</button>
      <button onCanPlay={()=>dispatch(sub(1))}>Subtract</button>
      <button onCanPlay={()=>dispatch((1))}>Multiply</button>
      <button onCanPlay={()=>dispatch((1))}>Divide</button>
      
    </div>
  );
}

export default App;
