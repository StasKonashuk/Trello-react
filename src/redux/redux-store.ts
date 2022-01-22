import { configureStore } from '@reduxjs/toolkit';
import boards from './boardsSlise';

const store = configureStore({
  reducer: {
    boards,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
