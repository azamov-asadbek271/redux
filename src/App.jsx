// import './App.css'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "./features/counter/counterSlice";

function App() {
const {counter} = useSelector((store) => store)
const {dispatch} = useDispatch()
const [todo,setTodo] = useState({})
  return (
    <>
      <h1>redux</h1>
      <h2>{counter.value}</h2>
      <form
      >
        <label>
          <input type="text" />
        </label>
        <button>add</button>
      </form>
      
    </>
  );
}

export default App
