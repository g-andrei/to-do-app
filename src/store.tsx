import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slices/task.slice";
import formState from "./slices/form.slice";

export const store = configureStore({
  reducer: {
    task: taskSlice,
    editFromState: formState,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
