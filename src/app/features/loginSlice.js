import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    username:"",
    token:"",
    loading:false,
    error:false,
}


const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        fetchLoginStart:state=>{
            state.loading = true;
            state.error = false;
        },
        fetchLoginFailEnd:state=>{
            state.loading = false;
            state.error = true;
        },
        fetchLoginSuccessWithoutPayload:state=>{
            state.loading = false;
        },
        fetchLoginSuccess:(state,{payload})=>{
            state.loading = false;
            state.username = payload?.username;
            state.token = payload?.accessToken;
        },
        fetchLoginLogoutSuccess:(state,{payload})=>{
            state.loading = false;
            state.username = "";
            state.token = "";
        },
    }
})

export const {fetchLoginStart,fetchLoginFailEnd ,fetchLoginSuccessWithoutPayload ,fetchLoginSuccess ,fetchLoginLogoutSuccess , } = loginSlice.actions;
export default loginSlice.reducer;