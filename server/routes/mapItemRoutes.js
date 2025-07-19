const router = require('express').Router();
const { mapItems } = require('../utils/mockData'); // Mock data for map items

// 5. Map View Page (/map) (Bonus)
router.get('/map-items', (req, res) => {
    // This is a mock API for map data
    res.json(mapItems);
});

module.exports = router;
