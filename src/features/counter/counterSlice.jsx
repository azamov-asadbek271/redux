import { createSlice } from "@reduxjs/toolkit";

const dataForm = () => {
    return (
      JSON.parse(localStorage.getItem("todos")) || {
        todos: [],
      }
    );
}



export const counterSlice = createSlice({
  name: "todos",
  initialState:dataForm,
  reducers: {
    addTodos: (state,{payload}) => {
        state.todos.push(payload)
        localStorage.setItem("todos",JSON.stringify(state))
    },
    removeTodos: (state,{payload}) => {
        state.todos = state.todos.filter((todo) => {
            return todo.id !== payload
        })
        localStorage.setItem("todos", JSON.stringify(state));

    },
  },
});

export const {addTodos,removeTodos} = counterSlice.actions
export default counterSlice.reducer