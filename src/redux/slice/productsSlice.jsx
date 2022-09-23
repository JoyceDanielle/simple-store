import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        products(state, {payload}){
            return {...state, payload}
        },
    }
})

export const { products } = slice.actions

export const selectProducts = state => state.products 

export default slice.reducer