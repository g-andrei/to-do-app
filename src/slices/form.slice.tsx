import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/store';

interface formState {
    buttonStatus: boolean;
    errorInput: boolean;
    isAddEventModalOpend: boolean;
}

const initialState: formState = {
    buttonStatus: true,
    errorInput: false,
    isAddEventModalOpend: false,
};

export const formState = createSlice({
    name: 'editFromState',
    initialState,
    reducers: {
        updateAddTaskButton: (state, action) => {
            state.buttonStatus = action.payload;
        },
        updateErrorInput: (state, action) => {
            state.errorInput = action.payload;
        },
        openAddEventModal: (state, action) => {
            state.isAddEventModalOpend = action.payload;
        },
    },
});

export const { updateAddTaskButton, updateErrorInput, openAddEventModal } =
    formState.actions;

export const formStatus = (state: RootState) => state.editFromState;

export default formState.reducer;
