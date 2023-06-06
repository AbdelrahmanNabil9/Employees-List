import { configureStore } from '@reduxjs/toolkit';
import { employeeSlice } from './redux/slice';



export const store = configureStore({
  reducer: {
    employee: employeeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;