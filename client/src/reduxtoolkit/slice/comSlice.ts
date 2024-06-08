import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface comSliceStateType {
    
    html:string
    javascript:string
    python:string
    currentLanguage:"html"|"javascript"|"python";
}
 const initialState:comSliceStateType = {
       html:"",
       javascript:"",
       python:"",
       currentLanguage:"html",
 }
const comSlice = createSlice({
    name:"comSlice",
    initialState,
    reducers:{
updateCurrentLanguage:(state , action:PayloadAction<comSliceStateType["currentLanguage"]>)=>{
    state.currentLanguage = action.payload;
},


    },
});
export default comSlice.reducer;
export const {updateCurrentlanguage} = comSlice.actions;