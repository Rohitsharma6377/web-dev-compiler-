
import {configureStore} from '@reduxjs/toolkit'
import comSlice from './slices/comSlice';
export const store = configureStore({
    reducer:{
comSlice:comSlice,
    },
});

export default store.getState;