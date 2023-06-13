import { createSlice } from '@reduxjs/toolkit'


interface Data {
    serviceCategory: [];
}


const initialState: Data = {
    serviceCategory: [],
}


export const serviceCategorySlice = createSlice({
    name: 'ServiceCategory',
    initialState,
    reducers: {
        setserviceCategory: (state, action) => {
            state.serviceCategory =  action.payload
        },
    },
})

export const {setserviceCategory  } = serviceCategorySlice.actions

export const serviceCategoryReducer = serviceCategorySlice.reducer;