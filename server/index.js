const express = require('express')
const app = express()
const port = 8082

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
//-----------------------------------------------------------
// 1. Home / Catalog Page (/)
router.get('/api/items', (req, res) => {
    // Implement search and filter logic here if needed
    res.json(items);
});

// 2. Item Details Page (/items/:id)
router.get('/api/items/:id', (req, res) => {
    const itemId = req.params.id;
    const item = items.find(i => i.id === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// 3. Add New Item Page (/add-item)
router.post('/api/items', (req, res) => {
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
router.post('/api/items/:id/request', (req, res) => {
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

// 5. Map View Page (/map) (Bonus)
router.get('/api/map-items', (req, res) => {
    // This is a mock API for map data
    res.json(mapItems);
});

// 6. User Profile Page (/profile) (Bonus)
router.get('/api/trust-score/:userId', (req, res) => {
    // This is a mock API for user trust score
    const userId = req.params.userId;
    const user = users[userId];
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// 7. 404 Not Found Page (*) - This is typically handled by Express middleware for unhandled routes
// For an API, you might just send a 404 response for any unhandled API route.
// This example shows a catch-all for /api routes not explicitly defined.
router.use('/api/*', (req, res) => {
    res.status(404).json({ message: 'API endpoint not found' });
});


module.exports = router;