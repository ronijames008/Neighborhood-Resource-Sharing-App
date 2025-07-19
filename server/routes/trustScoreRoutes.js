const router = require('express').Router();
const { users } = require('../utils/mockData'); // Mock data for users

// 6. User Profile Page (/profile) (Bonus)
router.get('/trust-score/:userId', (req, res) => {
    // This is a mock API for user trust score
    const userId = req.params.userId;
    const user = users[userId];
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;
