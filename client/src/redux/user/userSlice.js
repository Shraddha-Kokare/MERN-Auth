import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading:false,
    error:null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.currentUser=null;
            state.error=null;
            state.loading=true;
        },
        signInSuccess:(state,action)=>{
            state.currentUser=action.payload;
            console.log("Payload: ",action.payload);
            state.loading=false;
            state.error=null;
        },
        signInFailure:  (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {signInStart,signInSuccess,signInFailure}=userSlice.actions;

export default userSlice.reducer;