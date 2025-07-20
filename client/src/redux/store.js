import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import requestsReducer from './requestsSlice';
import mapItemsReducer from './mapItemsSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        items: itemsReducer,
        requests: requestsReducer,
        mapItems: mapItemsReducer,
        user: userReducer,
    },
});

export default store; 