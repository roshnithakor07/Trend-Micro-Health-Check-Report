import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/counter'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})