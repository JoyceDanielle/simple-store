import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'modal',
    initialState: {
        visible: false
    },
    reducers: {
        isVisible(state, payload){
            return {...state, visible: !state.visible}
        }
    }
})

export const { isVisible } = slice.actions;

export const selectModal = state => state.modal;

export default slice.reducer;