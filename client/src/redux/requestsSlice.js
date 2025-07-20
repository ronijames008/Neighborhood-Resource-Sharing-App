import { createSlice } from '@reduxjs/toolkit';

const requestsSlice = createSlice({
    name: 'requests',
    initialState: {
        requests: [],
        loading: false,
        error: null,
    },
    reducers: {
        // Add reducers for updating/cancelling requests if needed
    },
    // Add extraReducers for async thunks when implemented
});

export default requestsSlice.reducer; 