import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../store';

export interface Task {
    id: string;
    task: string;
    status: string;
    previousStatus: string;
}

interface TaskState {
    loading: boolean;
    error: boolean;
    data: Task[];
}

const initialState: TaskState = {
    loading: false,
    error: false,
    data: [],
};

const updateTask = (task: Task, id: string) =>
    task.id === id
        ? {
              ...task,
              status:
                  task.status !== 'Completed'
                      ? 'Completed'
                      : task.previousStatus,
              previousStatus:
                  task.status !== 'Completed'
                      ? task.status
                      : task.previousStatus,
          }
        : task;

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        getTasks: (state, action: PayloadAction<{ data: Task[] }>) => {
            state.loading = false;
            state.data = action.payload.data;
        },
        addTask: (state, action: PayloadAction<{ data: Task }>) => {
            state.loading = false;
            state.data.push(action.payload.data);
        },
        completeTask: (state, action: PayloadAction<{ id: string }>) => {
            state.loading = false;
            state.data = state.data.map((task) =>
                updateTask(task, action.payload.id)
            );
        },
        deleteCompleted: (state) => {
            state.loading = false;
            state.data = state.data.filter(
                (task) => task.status !== 'Completed'
            );
        },
        clearAllTasks: (state) => {
            state.loading = false;
            state.data = [];
        },
    },
});

export const {
    getTasks,
    addTask,
    completeTask,
    deleteCompleted,
    clearAllTasks,
} = taskSlice.actions;

export function addNewTask(data: Task) {
    return (dispatch: AppDispatch) => {
        const existingTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        existingTodos.push(data);
        localStorage.setItem('todos', JSON.stringify(existingTodos));

        dispatch(addTask({ data }));
    };
}

export function endTask(id: string) {
    return (dispatch: AppDispatch) => {
        const existingTodos: Task[] = JSON.parse(
            localStorage.getItem('todos') || '[]'
        );
        const updatedTodos = existingTodos.map((task) => updateTask(task, id));
        localStorage.setItem('todos', JSON.stringify(updatedTodos));

        dispatch(completeTask({ id }));
    };
}

export function clearCompletedTasks() {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const state = getState();
        const updatedTasks = state.task.data.filter(
            (task) => task.status !== 'Completed'
        );
        localStorage.setItem('todos', JSON.stringify(updatedTasks));
        dispatch(deleteCompleted());
    };
}

export function deleteAllTasks() {
    return (dispatch: AppDispatch) => {
        localStorage.removeItem('todos');
        dispatch(clearAllTasks());
    };
}

export const taskValue = (state: RootState) => state.task.data;
export const taskLength = (state: RootState) => state.task.data.length;
export const completedTaskLength = (state: RootState) =>
    state.task.data.filter((task) => task.status === 'Completed').length;

export default taskSlice.reducer;
