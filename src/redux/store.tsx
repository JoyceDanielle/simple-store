import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slice/userSlice';
import productReducer from './slice/productSlice';
import modalReducer from './slice/modalSlice';
import navigationReducer from './slice/navigationSlice';

export default configureStore({
    reducer : {
        user: userReducer,
        product: productReducer,
        modal: modalReducer,
        navigation: navigationReducer
    }
})