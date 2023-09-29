import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import checklistReducer from './slices/checkListSlice';

export default configureStore({
    reducer: {
        counterReducer:counterReducer,
        checklistReducer:checklistReducer
    },
  })