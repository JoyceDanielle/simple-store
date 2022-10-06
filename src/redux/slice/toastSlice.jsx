import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'toast',
    initialState: {
        visible: false,
        type: '',
        title: '',
        animation: 'slideIn'
    },
    reducers: {
        notificate(state, {payload}){
            return {...state, visible: payload.visible, type: payload.type, title: payload.title, animation: payload.animation}
        },
    }
})

export const { notificate } = slice.actions

export const selectToast = state => state.toast 

export default slice.reducer