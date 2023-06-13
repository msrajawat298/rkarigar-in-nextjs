"use client"

import { serviceCategoryReducer } from '@/slices/ServiceCatSlice';
import { configureStore } from '@reduxjs/toolkit'




export const store = configureStore({
    reducer: {
        ServiceCategory: serviceCategoryReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;