import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'navigation',
    initialState: {
        nav1: true,
        nav2: false, 
        nav3: false
    },
    reducers: {
        isActiveNav1(state, {payload}){
            return {...state, nav1: payload}
        },
        isActiveNav2(state, {payload}){
            return {...state, nav2: payload}
        },
        isActiveNav3(state, {payload}){
            return {...state, nav3: payload}
        }
    }
})

export const { isActiveNav1, isActiveNav2, isActiveNav3 } = slice.actions;

export const selectNavigation = state => state.navigation;

export default slice.reducer;