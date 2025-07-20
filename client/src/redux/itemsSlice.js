import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllItems, getItemDetailsById, submitItem } from '../apiCalls/items';

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

// Async thunk for adding a new item
export const addItem = createAsyncThunk('items/addItem', async (itemData, { rejectWithValue }) => {
    try {
        const data = await submitItem(itemData);
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: error.message });
    }
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
        addItemLoading: false,
        addItemSuccess: null,
        addItemError: null,
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
            })
            // Add item cases
            .addCase(addItem.pending, (state) => {
                state.addItemLoading = true;
                state.addItemSuccess = null;
                state.addItemError = null;
            })
            .addCase(addItem.fulfilled, (state, action) => {
                state.addItemLoading = false;
                state.addItemSuccess = action.payload.message || 'Item added successfully!';
                state.addItemError = null;
                // Optionally, add the new item to the items list if success
                if (action.payload.success && action.payload.item) {
                    state.items.push(action.payload.item);
                }
            })
            .addCase(addItem.rejected, (state, action) => {
                state.addItemLoading = false;
                state.addItemSuccess = null;
                state.addItemError = action.payload?.message || 'Failed to add item.';
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