import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './accountsSlice';

const store = configureStore({
  reducer: {
    accounts: accountReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;