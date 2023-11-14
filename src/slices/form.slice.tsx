import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/store";

interface formState {
  buttonStatus: boolean;
  errorInput: boolean;
}

const initialState: formState = {
  buttonStatus: true,
  errorInput: false,
};

export const formState = createSlice({
  name: "editFromState",
  initialState,
  reducers: {
    updateAddTaskButton: (state, action) => {
      state.buttonStatus = action.payload;
    },
    updateErrorInput: (state, action) => {
      state.errorInput = action.payload;
    },
  },
});

export const { updateAddTaskButton, updateErrorInput } = formState.actions;

export const formStatus = (state: RootState) => state.editFromState;

export default formState.reducer;
