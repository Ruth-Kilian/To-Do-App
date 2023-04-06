import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todoSlice'

// create a store using configureStore and pass the todoSlice.reducer to the reducer property of the configuration object

export default configureStore({
    reducer: {
        todo: todoReducer,
    },
});