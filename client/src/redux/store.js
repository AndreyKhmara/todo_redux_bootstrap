import { configureStore } from '@reduxjs/toolkit';
import todoreducer from './reducers/todoreducer';

export const store = configureStore({
  reducer: {
    todo: todoreducer,
  },
});
