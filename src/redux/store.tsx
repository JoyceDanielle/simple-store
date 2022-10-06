import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slice/userSlice';
import productsReducer from './slice/productsSlice'
import productReducer from './slice/productSlice';
import modalReducer from './slice/modalSlice';
import navigationReducer from './slice/navigationSlice';
import toastReducer from './slice/toastSlice';

export default configureStore({
    reducer : {
        user: userReducer,
        products: productsReducer,
        product: productReducer,
        modal: modalReducer,
        navigation: navigationReducer,
        toast: toastReducer
    }
})