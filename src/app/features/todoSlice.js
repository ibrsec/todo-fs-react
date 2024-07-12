import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
    loading:false,
    error:false
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        fetchTodoStart : state => {
            state.loading = true;
            state.error = false;
        },
        fetchTodoFailEnd : state => {
            state.loading = false;
            state.error = true;
        },
        fetchTodoSuccessWithoutPayload : state => {
            state.loading = false;
        },
        fetchTodoSuccess : (state,{payload}) => {
            state.loading = false;
            state.todos = payload;
        },
    }
})

export const { fetchTodoStart, fetchTodoFailEnd, fetchTodoSuccessWithoutPayload, fetchTodoSuccess, } = todoSlice.actions;
export default todoSlice.reducer;