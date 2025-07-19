const router = require('express').Router();
const { items } = require('../utils/mockData'); // Mock data for items

// 1. Home / Catalog Page (/)
router.get('/', (req, res) => {
    // Implement search and filter logic here if needed
    res.json(items);
});

// 2. Item Details Page (/items/:id)
router.get('/:id', (req, res) => {
    const itemId = req.params.id;
    const item = items.find(i => i.id === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// 3. Add New Item Page (/add-item)
router.post('/', (req, res) => {
    // In a real app, you would save the item to a database
    const newItem = req.body; // Assuming item data is sent in the request body
    // Basic validation
    if (!newItem.name || !newItem.description || !newItem.category || !newItem.condition || !newItem.image) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
    // Mock success/failure
    const success = Math.random() > 0.5;
    if (success) {
        // Assign a mock ID for the new item
        newItem.id = `itm${(items.length + 1).toString().padStart(3, '0')}`;
        newItem.available = true; // New items are available by default
        newItem.borrowedBy = null;
        items.push(newItem); // Add to mock data
        res.json({ success: true, item: newItem, message: 'Item added successfully!' });
    } else {
        res.status(500).json({ success: false, message: 'Failed to add item. Please try again.' });
    }
});

// 4. My Requests Page (/my-requests) (Bonus)
router.post('/:id/request', (req, res) => {
    // This is a mocked endpoint for borrowing requests
    const itemId = req.params.id;
    const item = items.find(i => i.id === itemId);

    if (!item) {
        return res.status(404).json({ success: false, message: 'Item not found.' });
    }
    if (!item.available) {
        return res.status(400).json({ success: false, message: 'Item is currently unavailable.' });
    }

    // Mock the request process
    item.available = false;
    item.borrowedBy = req.body.userId || "mockUser"; // Assign a mock borrower
    res.json({ success: true, status: 'requested', message: 'Borrow request submitted!' });
});

module.exports = router;