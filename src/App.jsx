import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { addTodos,removeTodos } from './features/counter/counterSlice';
import { MdDeleteOutline } from "react-icons/md";




function App() {
  const [todo,setTodo] = useState("")
  const {todos} = useSelector((store) => store.todos);
  const dispatch = useDispatch()

const hanldeSubmit = (e) => {
    e.preventDefault()
    if(todo !== "") {
       dispatch(
         addTodos({
           id: uuidv4(),
           text: todo,
         })
       );
    }
 
    setTodo("")
}


  return (
    <div className='container'>
      <h1 className='title'>TodoList</h1>
      <form className='Form' onSubmit={hanldeSubmit}>
        <input className='input'
          onChange={(e) => setTodo(e.target.value)}
         type="text"
         value={todo}  
         placeholder="Add your text"
           />
        <button className='input-btn'>add</button>
      </form>
      <div className='list'>{todos && todos.map((todo) => {
        return (
          <div className='item' key={todo.id}>
             <input type="checkbox"  />
             <h4 className='todo-text'>{todo.text}</h4>
             <button 
             className='delete-btn'
             onClick={() => dispatch(removeTodos(todo.id))}><MdDeleteOutline/></button>
          </div>
        )
      })}</div>
    </div>
  );
}

export default App;
