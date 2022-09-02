import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'product',
    initialState: {
        id: '',
        image: '',
        name: '',
        subtitle: '',
        price: ''
    },
    reducers: {
        productDetail(state, {payload}){
            return {...state, id: payload.id, image: payload.image, name: payload.name, subtitle: payload.subtitle, price: payload.price}
        },
       
    }
})

export const { productDetail } = slice.actions

export const selectProduct = state => state.product 

export default slice.reducer