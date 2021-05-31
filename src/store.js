import { configureStore } from '@reduxjs/toolkit';
/* import counterReducer from './slices/counterSlice'; */
import userReducer from './slices/userSlice';
import backNoveltiesReducer from './slices/backNoveltiesSlice';
import modalReducer from './slices/modalSlice';

export default configureStore({
  reducer: {
    /* counter: counterReducer, */
    user: userReducer,
    novelties: backNoveltiesReducer,
    modal: modalReducer
  }
});
