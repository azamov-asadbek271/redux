import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}

export const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state,{payload}) => {
        state.todos.push(payload)
    },
    removeTodos: (state,{payload}) => {
        state.todos = state.todos.filter((todo) => {
            return todo.id !== payload
        })
    },
  },
});

export const {addTodos,removeTodos} = counterSlice.actions
export default counterSlice.reducer