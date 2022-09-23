import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'loader',
    initialState: {
        visible: false
    },
    reducers: {
        isVisible(state, {payload}){
            return {...state, visible: payload}
        }
    }
})

export const { isVisible } = slice.actions;

export const selectLoader = state => state.loader;

export default slice.reducer;