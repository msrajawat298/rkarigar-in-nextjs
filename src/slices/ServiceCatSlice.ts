import { createSlice } from '@reduxjs/toolkit'


interface Data {
    serviceCategoryData: [];
}


const initialState: Data = {
    serviceCategoryData: [],
}


export const serviceCategorySlice = createSlice({
    name: 'ServiceCategory',
    initialState,
    reducers: {
        setserviceCategory: (state, action) => {
            state.serviceCategoryData =  action.payload
        },
    },
})

export const {setserviceCategory  } = serviceCategorySlice.actions

export const serviceCategoryReducer = serviceCategorySlice.reducer;