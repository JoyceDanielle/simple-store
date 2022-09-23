import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'product',
    initialState: {
        id: '',
        image: '',
        name: '',
        subtitle: '',
        price: '',
        isFavorite: false
    },
    reducers: {
        productDetail(state, {payload}){
            console.log('payload', payload)
            localStorage.setItem('product', payload.id);
            return {...state, id: payload.id, image: payload.image, name: payload.name, subtitle: payload.subtitle, price: payload.price, isFavorite: payload.isFavorite}
        },
       productFavorite(state, {payload}){
        return {...state, isFavorite: !state.isFavorite}
       }
    }
})

export const { productDetail, productFavorite } = slice.actions

export const selectProduct = state => state.product 

export default slice.reducer