import { configureStore } from "@reduxjs/toolkit";
import comSlice from "./slice/comSlice";

export const store = configureStore({
    reducer:{
    comSlice,
    },
});
export type RootState = ReturnType <typeof store.getState>
export default store;