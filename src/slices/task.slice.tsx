import { Dispatch } from "react";
import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Task {
  id: string;
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
  data: [],
};

export function addNewTask(data: Task) {
  return (dispatch: Dispatch<AnyAction>) => {
    const existingTodos = JSON.parse(localStorage.getItem("todos")!) || [];
    existingTodos.push(data);
    localStorage.setItem("todos", JSON.stringify(existingTodos));

    dispatch(addTask({ data: data }));
  };
}

export function endTask(id: string) {
  return (dispatch: Dispatch<AnyAction>) => {
    const existingTodos = JSON.parse(localStorage.getItem("todos")!) || [];
    const updatedTodos = existingTodos.map((task: Task) => {
      if (task.id === id) {
        return { ...task, status: "Completed" };
      }
      return task;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    dispatch(completeTask({ id: id }));
  };
}
export function clearCompletedTasks() {
  return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    const state = getState();
    const updatedTasks = state.task.data.filter(
      (task) => task.status !== "Completed"
    );

    localStorage.setItem("todos", JSON.stringify(updatedTasks));
    dispatch(deleteCompleted());
  };
}

export function deleteAllTasks() {
  return (dispatch: Dispatch<AnyAction>) => {
    localStorage.removeItem("todos");
    dispatch(clearAllTasks());
  };
}

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    getTasks: (state, { payload: { data } }) => {
      return {
        ...state,
        loading: false,
        data: data,
      };
    },
    addTask: (state, { payload: { data } }) => ({
      ...state,
      loading: false,
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
    deleteCompleted: (state) => ({
      ...state,
      loading: false,
      data: state.data.filter((task) => task.status !== "Completed"),
    }),
    clearAllTasks: (state) => ({
      ...state,
      loading: false,
      data: [],
    }),
  },
});

export const {
  getTasks,
  addTask,
  completeTask,
  deleteCompleted,
  clearAllTasks,
} = taskSlice.actions;

export const taskValue = (state: RootState) => state.task.data;
export const taskLength = (state: RootState) => state.task.data.length;
export const completedTaskLength = (state: RootState) =>
  state.task.data.filter((task) => task.status === "Completed").length;

export default taskSlice.reducer;
