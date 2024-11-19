import { configureStore } from '@reduxjs/toolkit';
import financeReducer from './financeSlice';

const store = configureStore({
  reducer: {
    finance: financeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;