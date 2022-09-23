import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'user',
    initialState: {
        user: '',
        name: ''
    },
    reducers: {
        register(state, {payload}){
            return {...state, user: payload.user, name: payload.name}
        },
        authenticate(state, { payload }) {
            return { ...state, name: payload.name, id: payload.id, user: payload.user}
        }
    }
})

export const { register, authenticate } = slice.actions

export const selectUser = state => state.user 

export default slice.reducer