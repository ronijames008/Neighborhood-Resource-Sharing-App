import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllItems, getItemDetailsById } from '../apiCalls/items';

// Async thunk for fetching items
export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
    const data = await getAllItems();
    return data;
});

// Async thunk for fetching a single item's details
export const fetchItemDetails = createAsyncThunk('items/fetchItemDetails', async (id) => {
    const data = await getItemDetailsById(id);
    return data;
});

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        loading: false,
        error: null,
        search: '',
        category: 'All Categories',
        availability: 'Available',
        itemDetails: null,
        itemDetailsLoading: false,
        itemDetailsError: null,
    },
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
        },
        setCategory(state, action) {
            state.category = action.payload;
        },
        setAvailability(state, action) {
            state.availability = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Item details cases
            .addCase(fetchItemDetails.pending, (state) => {
                state.itemDetailsLoading = true;
                state.itemDetailsError = null;
                state.itemDetails = null;
            })
            .addCase(fetchItemDetails.fulfilled, (state, action) => {
                state.itemDetailsLoading = false;
                state.itemDetails = action.payload;
            })
            .addCase(fetchItemDetails.rejected, (state, action) => {
                state.itemDetailsLoading = false;
                state.itemDetailsError = action.error.message;
            });
    },
});

export const { setSearch, setCategory, setAvailability } = itemsSlice.actions;

// Selector for filtered/searched items
export const selectFilteredItems = (state) => {
    let items = state.items.items;
    const { search, category, availability } = state.items;
    if (search) {
        items = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category && category !== 'All Categories') {
        items = items.filter(item => item.category === category);
    }
    if (availability && availability !== 'All') {
        items = items.filter(item => (availability === 'Available' ? item.available : !item.available));
    }
    return items;
};

export default itemsSlice.reducer; 