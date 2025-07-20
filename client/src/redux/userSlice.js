import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        trustScore: null,
        loading: false,
        error: null,
    },
    reducers: {
        // Add reducers for editing user info if needed
    },
    // Add extraReducers for async thunks when implemented
});

export default userSlice.reducer; 