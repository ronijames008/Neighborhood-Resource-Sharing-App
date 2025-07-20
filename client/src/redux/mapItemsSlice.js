import { createSlice } from '@reduxjs/toolkit';

const mapItemsSlice = createSlice({
    name: 'mapItems',
    initialState: {
        mapItems: [],
        loading: false,
        error: null,
    },
    reducers: {
        // Add reducers for map item interactions if needed
    },
    // Add extraReducers for async thunks when implemented
});

export default mapItemsSlice.reducer; 