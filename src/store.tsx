import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import formState from './slices/form.slice';
import taskSlice from './slices/task.slice';

export const store = configureStore({
    reducer: {
        task: taskSlice,
        editFromState: formState,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
