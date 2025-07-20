const express = require('express')
const app = express()
const port = process.env.PORT
const itemRoutes = require('./routes/itemRoutes'); // Import item routes
const mapItemRoutes = require('./routes/mapItemRoutes'); // Import map item routes
const trustScoreRoutes = require('./routes/trustScoreRoutes'); // Import trust score routes
const cors = require('cors');

app.use(cors({
    origin: 'https://neighborhood-resource-sharing-app.onrender.com',
    credentials: true,
}));

app.use(express.json()); // Middleware to parse JSON bodies
app.use("/api/items", itemRoutes); // Item routes
app.use("/api/map-items", mapItemRoutes); // Map items Routes
app.use("/api/trust-score", trustScoreRoutes); // Trust score Routes

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
