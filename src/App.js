
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import { incNumber,decNumber} from "./actions/index"
function App() {
  const myState= useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment /Decrement counter</h1>
      <h4>using React and Redux</h4>
      <div className='quantity'>
        <button className='quantity__minus' title="Decrement" onClick={()=>dispatch(decNumber())}><span>-</span></button>
        <input name="quantity" type="text" className="quantity__input" value={myState}/>
        <button className='quantity__plus' title="Increment" onClick={()=>dispatch(incNumber())} ><span>+</span></button>
      </div>
    
    </div>
  );
}

export default App;
