import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface comSliceStateType {
  fullCode:{
    html: string;
    javascript: string;
    python: string;

  };
  currentLanguage: "html" | "javascript" | "python";
 
}
const initialState: comSliceStateType = {
  fullCode:{

    html: " this is html",
    javascript: "this is javascript",
    python: "this is python",
    
  },
  currentLanguage: "html",
};
const comSlice = createSlice({
  name: "comSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<comSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodevalue:(state , action:PayloadAction<string>)=>{
  state.fullCode[state.currentLanguage]=action.payload;
    },
  
  },
});
export default comSlice.reducer;
export const { updateCurrentLanguage, updateCodevalue} = comSlice.actions;
