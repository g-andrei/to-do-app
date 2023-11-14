import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Task {
  id: number;
  task: string;
  status: string;
}

interface taskState {
  loading: boolean;
  error: boolean;
  data: Task[];
}

const initialState: taskState = {
  loading: false,
  error: false,
  data: [
    {
      id: 1,
      task: "Memorize the fifty states and their capitals ",
      status: "Urgent",
    },
    { id: 2, task: "Test something", status: "Completed" },
    { id: 3, task: "Test ", status: "Urgent" },
    {
      id: 4,
      task: "Memorize the fifty states and their capitals",
      status: "Important",
    },
    {
      id: 5,
      task: "Memorize the fifty states and their capitals",
      status: "Later",
    },
    {
      id: 6,
      task: "Memorize the fifty states and their capitals",
      status: "To Study",
    },
    {
      id: 7,
      task: "Memorize the fifty states and their capitals",
      status: "Urgent",
    },
    {
      id: 8,
      task: "Memorize the fifty states and their capitals",
      status: "Later",
    },
    {
      id: 9,
      task: "Memorize the fifty states and their capitals ",
      status: "Urgent",
    },
    { id: 10, task: "Test something", status: "Completed" },
    { id: 11, task: "Test ", status: "Urgent" },
    {
      id: 12,
      task: "Memorize the fifty states and their capitals",
      status: "Important",
    },
    {
      id: 13,
      task: "Memorize the fifty states and their capitals",
      status: "Later",
    },
    {
      id: 14,
      task: "Memorize the fifty states and their capitals",
      status: "To Study",
    },
    {
      id: 15,
      task: "Memorize the fifty states and their capitals",
      status: "Urgent",
    },
    {
      id: 16,
      task: "Memorize the fifty states and their capitals",
      status: "Later",
    },
  ],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, { payload: { data } }) => ({
      ...state,
      loading: true,
      data: [...state.data, data],
    }),
    completeTask: (state, { payload: { id } }) => ({
      ...state,
      loading: false,
      data: [
        ...state.data.map((task) => {
          if (task.id === id) {
            return { ...task, status: "Completed" };
          }
          return task;
        }),
      ],
    }),
    clearTasks: (state) => ({
      ...state,
      loading: false,
      data: [],
    }),
  },
});

export const { addTask, completeTask, clearTasks } = taskSlice.actions;

export const taskValue = (state: RootState) => state.task.data;
export const taskLength = (state: RootState) => state.task.data.length;

export default taskSlice.reducer;
