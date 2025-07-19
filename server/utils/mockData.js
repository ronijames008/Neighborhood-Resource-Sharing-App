// Mock data (replace with actual data handling if integrating a DB)
const items = [
    // ... your mock item data from the PDF
    {
        "id": "itm001",
        "name": "Cordless Drill",
        "description": "18V cordless drill, lightly used.",
        "category": "Tools",
        "owner": "Alice Johnson",
        "condition": "Good",
        "available": true,
        "image": "https://example.com/images/drill.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm002",
        "name": "Camping Tent",
        "description": "4-person waterproof tent, easy setup.",
        "category": "Outdoors",
        "owner": "Brian Lee",
        "condition": "Excellent",
        "available": true,
        "image": "https://example.com/images/tent.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm003",
        "name": "Crock Pot",
        "description": "Large 6-quart slow cooker, works great.",
        "category": "Kitchen",
        "owner": "Samantha Green",
        "condition": "Very Good",
        "available": false,
        "image": "https://example.com/images/crockpot.jpg",
        "borrowedBy": "Prachi Patel"
    },
    {
        "id": "itm004",
        "name": "Yoga Mat",
        "description": "Non-slip yoga mat, 6mm thick, blue color.",
        "category": "Fitness",
        "owner": "Ravi Mehra",
        "condition": "Good",
        "available": true,
        "image": "https://example.com/images/yogamat.j", // Typo in original PDF, assuming .jpg
        "borrowedBy": null
    },
    {
        "id": "itm005",
        "name": "Ladder",
        "description": "6-foot aluminum step ladder, sturdy.",
        "category": "Tools",
        "owner": "Dana Wang",
        "condition": "Good",
        "available": true,
        "image": "https://example.com/images/ladder.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm006",
        "name": "Board Game: Settlers of Catan",
        "description": "Complete set, all pieces included.",
        "category": "Games",
        "owner": "Luis García",
        "condition": "Like New",
        "available": true,
        "image": "https://example.com/images/catan.jpg",
        "borrowedBy": null
    }
];

const mapItems = [
    // ... your mock map item data from the PDF
    {
        "itemId": "itm001",
        "lat": 28.4595,
        "lng": 77.0266,
        "address": "Block A, Sector 45",
        "name": "Cordless Drill",
        "category": "Tools"
    },
    {
        "itemId": "itm002",
        "lat": 28.4652,
        "lng": 77.0565,
        "address": "Block B, Sector 50",
        "name": "Camping Tent",
        "category": "Outdoors"
    }
];

const users = {
    "usr123": {
        "userId": "usr123",
        "name": "Alice Johnson",
        "trustScore": 9.5,
        "lendingCount": 7,
        "borrowingCount": 2,
        "positiveFeedback": 97
    }
};


module.exports = {
    items,
    mapItems,
    users
};