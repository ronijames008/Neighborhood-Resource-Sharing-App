// Mock data (replace with actual data handling if integrating a DB)
const items = [
    {
        "id": "itm001",
        "name": "Yoga Mat",
        "description": "Non-slip yoga mat, 6mm thick, blue color.",
        "category": "Fitness",
        "owner": "Joseph Norris",
        "condition": "Good",
        "available": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5lCIk5S_uwFW5fRZZgx_1Im4ppcogNjnzQ&s",
        "borrowedBy": "Amanda Bryant"
    },
    {
        "id": "itm002",
        "name": "Camping Tent",
        "description": "4-person waterproof tent, easy setup.",
        "category": "Outdoors",
        "owner": "Daniel Yates",
        "condition": "Excellent",
        "available": false,
        "image": "https://m.media-amazon.com/images/I/81pSTzxLxlL.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm003",
        "name": "Board Game: Settlers of Catan",
        "description": "Complete set, all pieces included.",
        "category": "Games",
        "owner": "Juan Smith",
        "condition": "Like New",
        "available": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6-SgQIKHCeZD5xa45lB931DHn7XRMmIoqw&s",
        "borrowedBy": "Nancy Deleon"
    },
    {
        "id": "itm004",
        "name": "Camping Tent",
        "description": "4-person waterproof tent, easy setup.",
        "category": "Outdoors",
        "owner": "Kyle Wright",
        "condition": "Excellent",
        "available": true,
        "image": "https://m.media-amazon.com/images/I/81pSTzxLxlL.jpg",
        "borrowedBy": "Nancy Wheeler"
    },
    {
        "id": "itm005",
        "name": "Camping Tent",
        "description": "4-person waterproof tent, easy setup.",
        "category": "Outdoors",
        "owner": "Matthew Mosley",
        "condition": "Excellent",
        "available": true,
        "image": "https://m.media-amazon.com/images/I/81pSTzxLxlL.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm006",
        "name": "Cordless Drill",
        "description": "18V cordless drill, lightly used.",
        "category": "Tools",
        "owner": "Riley Thomas",
        "condition": "Good",
        "available": false,
        "image": "https://m.media-amazon.com/images/I/610UVWS9bIL._UF1000,1000_QL80_.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm007",
        "name": "Yoga Mat",
        "description": "Non-slip yoga mat, 6mm thick, blue color.",
        "category": "Fitness",
        "owner": "Steven Hall",
        "condition": "Good",
        "available": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5lCIk5S_uwFW5fRZZgx_1Im4ppcogNjnzQ&s",
        "borrowedBy": null
    },
    {
        "id": "itm008",
        "name": "Board Game: Settlers of Catan",
        "description": "Complete set, all pieces included.",
        "category": "Games",
        "owner": "Lorraine Owen",
        "condition": "Like New",
        "available": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6-SgQIKHCeZD5xa45lB931DHn7XRMmIoqw&s",
        "borrowedBy": "Alexander Waters"
    },
    {
        "id": "itm009",
        "name": "Ladder",
        "description": "6-foot aluminum step ladder, sturdy.",
        "category": "Tools",
        "owner": "Raymond Holt",
        "condition": "Good",
        "available": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzHuB4YksdCihXMGmWbdwklKvQ88b6TWuCHSqcog1V0wqZKBi4V996rS2v-Zt1gaihGM&usqp=CAU",
        "borrowedBy": "Jared Mcdonald"
    },
    {
        "id": "itm010",
        "name": "Cordless Drill",
        "description": "18V cordless drill, lightly used.",
        "category": "Tools",
        "owner": "Michele Sullivan",
        "condition": "Good",
        "available": true,
        "image": "https://m.media-amazon.com/images/I/610UVWS9bIL._UF1000,1000_QL80_.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm011",
        "name": "Yoga Mat",
        "description": "Non-slip yoga mat, 6mm thick, blue color.",
        "category": "Fitness",
        "owner": "Shaun Morris",
        "condition": "Good",
        "available": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5lCIk5S_uwFW5fRZZgx_1Im4ppcogNjnzQ&s",
        "borrowedBy": null
    },
    {
        "id": "itm012",
        "name": "Camping Tent",
        "description": "4-person waterproof tent, easy setup.",
        "category": "Outdoors",
        "owner": "Jeremiah Smith",
        "condition": "Excellent",
        "available": false,
        "image": "https://m.media-amazon.com/images/I/81pSTzxLxlL.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm013",
        "name": "Cordless Drill",
        "description": "18V cordless drill, lightly used.",
        "category": "Tools",
        "owner": "Antonio Bell",
        "condition": "Good",
        "available": true,
        "image": "https://m.media-amazon.com/images/I/610UVWS9bIL._UF1000,1000_QL80_.jpg",
        "borrowedBy": "Randall Johnson"
    },
    {
        "id": "itm014",
        "name": "Board Game: Settlers of Catan",
        "description": "Complete set, all pieces included.",
        "category": "Games",
        "owner": "Robert Clements",
        "condition": "Like New",
        "available": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6-SgQIKHCeZD5xa45lB931DHn7XRMmIoqw&s",
        "borrowedBy": null
    },
    {
        "id": "itm015",
        "name": "Yoga Mat",
        "description": "Non-slip yoga mat, 6mm thick, blue color.",
        "category": "Fitness",
        "owner": "Samantha Burns",
        "condition": "Good",
        "available": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5lCIk5S_uwFW5fRZZgx_1Im4ppcogNjnzQ&s",
        "borrowedBy": null
    },
    {
        "id": "itm016",
        "name": "Yoga Mat",
        "description": "Non-slip yoga mat, 6mm thick, blue color.",
        "category": "Fitness",
        "owner": "Sheryl Evans",
        "condition": "Good",
        "available": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5lCIk5S_uwFW5fRZZgx_1Im4ppcogNjnzQ&s",
        "borrowedBy": null
    },
    {
        "id": "itm017",
        "name": "Cordless Drill",
        "description": "18V cordless drill, lightly used.",
        "category": "Tools",
        "owner": "Miss Maria Webb",
        "condition": "Good",
        "available": false,
        "image": "https://m.media-amazon.com/images/I/610UVWS9bIL._UF1000,1000_QL80_.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm018",
        "name": "Board Game: Settlers of Catan",
        "description": "Complete set, all pieces included.",
        "category": "Games",
        "owner": "Michael Pearson",
        "condition": "Like New",
        "available": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6-SgQIKHCeZD5xa45lB931DHn7XRMmIoqw&s",
        "borrowedBy": "Nathan Phillips"
    },
    {
        "id": "itm019",
        "name": "Crock Pot",
        "description": "Large 6-quart slow cooker, works great.",
        "category": "Kitchen",
        "owner": "Jill Simmons",
        "condition": "Very Good",
        "available": false,
        "image": "https://example.com/images/crockpot.jpg",
        "borrowedBy": "Robert Hill"
    },
    {
        "id": "itm020",
        "name": "Ladder",
        "description": "6-foot aluminum step ladder, sturdy.",
        "category": "Tools",
        "owner": "Curtis Carpenter",
        "condition": "Good",
        "available": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzHuB4YksdCihXMGmWbdwklKvQ88b6TWuCHSqcog1V0wqZKBi4V996rS2v-Zt1gaihGM&usqp=CAU",
        "borrowedBy": null
    },
    {
        "id": "itm021",
        "name": "Cordless Drill",
        "description": "18V cordless drill, lightly used.",
        "category": "Tools",
        "owner": "Jesus Stevenson",
        "condition": "Good",
        "available": true,
        "image": "https://m.media-amazon.com/images/I/610UVWS9bIL._UF1000,1000_QL80_.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm022",
        "name": "Ladder",
        "description": "6-foot aluminum step ladder, sturdy.",
        "category": "Tools",
        "owner": "Michele Kirk",
        "condition": "Good",
        "available": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzHuB4YksdCihXMGmWbdwklKvQ88b6TWuCHSqcog1V0wqZKBi4V996rS2v-Zt1gaihGM&usqp=CAU",
        "borrowedBy": "Amy Whitney"
    },
    {
        "id": "itm023",
        "name": "Crock Pot",
        "description": "Large 6-quart slow cooker, works great.",
        "category": "Kitchen",
        "owner": "Kevin Oneal",
        "condition": "Very Good",
        "available": false,
        "image": "https://example.com/images/crockpot.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm024",
        "name": "Cordless Drill",
        "description": "18V cordless drill, lightly used.",
        "category": "Tools",
        "owner": "Andrew Campbell",
        "condition": "Good",
        "available": true,
        "image": "https://m.media-amazon.com/images/I/610UVWS9bIL._UF1000,1000_QL80_.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm025",
        "name": "Ladder",
        "description": "6-foot aluminum step ladder, sturdy.",
        "category": "Tools",
        "owner": "Lisa Greene",
        "condition": "Good",
        "available": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzHuB4YksdCihXMGmWbdwklKvQ88b6TWuCHSqcog1V0wqZKBi4V996rS2v-Zt1gaihGM&usqp=CAU",
        "borrowedBy": null
    },
    {
        "id": "itm026",
        "name": "Cordless Drill",
        "description": "18V cordless drill, lightly used.",
        "category": "Tools",
        "owner": "Jeffrey Booth",
        "condition": "Good",
        "available": false,
        "image": "https://m.media-amazon.com/images/I/610UVWS9bIL._UF1000,1000_QL80_.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm027",
        "name": "Camping Tent",
        "description": "4-person waterproof tent, easy setup.",
        "category": "Outdoors",
        "owner": "Sean Zavala",
        "condition": "Excellent",
        "available": true,
        "image": "https://m.media-amazon.com/images/I/81pSTzxLxlL.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm028",
        "name": "Camping Tent",
        "description": "4-person waterproof tent, easy setup.",
        "category": "Outdoors",
        "owner": "Kristina Cole",
        "condition": "Excellent",
        "available": false,
        "image": "https://m.media-amazon.com/images/I/81pSTzxLxlL.jpg",
        "borrowedBy": "William Matthews"
    },
    {
        "id": "itm029",
        "name": "Crock Pot",
        "description": "Large 6-quart slow cooker, works great.",
        "category": "Kitchen",
        "owner": "David Alvarez",
        "condition": "Very Good",
        "available": true,
        "image": "https://example.com/images/crockpot.jpg",
        "borrowedBy": "Jose Thompson"
    },
    {
        "id": "itm030",
        "name": "Ladder",
        "description": "6-foot aluminum step ladder, sturdy.",
        "category": "Tools",
        "owner": "Joseph Randall",
        "condition": "Good",
        "available": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzHuB4YksdCihXMGmWbdwklKvQ88b6TWuCHSqcog1V0wqZKBi4V996rS2v-Zt1gaihGM&usqp=CAU",
        "borrowedBy": null
    },
    {
        "id": "itm031",
        "name": "Camping Tent",
        "description": "4-person waterproof tent, easy setup.",
        "category": "Outdoors",
        "owner": "Phillip Hall",
        "condition": "Excellent",
        "available": true,
        "image": "https://m.media-amazon.com/images/I/81pSTzxLxlL.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm032",
        "name": "Board Game: Settlers of Catan",
        "description": "Complete set, all pieces included.",
        "category": "Games",
        "owner": "Danny Davis",
        "condition": "Like New",
        "available": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6-SgQIKHCeZD5xa45lB931DHn7XRMmIoqw&s",
        "borrowedBy": "Ashley Jenkins"
    },
    {
        "id": "itm033",
        "name": "Camping Tent",
        "description": "4-person waterproof tent, easy setup.",
        "category": "Outdoors",
        "owner": "John Ball",
        "condition": "Excellent",
        "available": true,
        "image": "https://m.media-amazon.com/images/I/81pSTzxLxlL.jpg",
        "borrowedBy": "Richard Newman"
    },
    {
        "id": "itm034",
        "name": "Board Game: Settlers of Catan",
        "description": "Complete set, all pieces included.",
        "category": "Games",
        "owner": "Laura Marshall",
        "condition": "Like New",
        "available": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6-SgQIKHCeZD5xa45lB931DHn7XRMmIoqw&s",
        "borrowedBy": null
    },
    {
        "id": "itm035",
        "name": "Cordless Drill",
        "description": "18V cordless drill, lightly used.",
        "category": "Tools",
        "owner": "James Adams",
        "condition": "Good",
        "available": true,
        "image": "https://m.media-amazon.com/images/I/610UVWS9bIL._UF1000,1000_QL80_.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm036",
        "name": "Cordless Drill",
        "description": "18V cordless drill, lightly used.",
        "category": "Tools",
        "owner": "Michael Sims",
        "condition": "Good",
        "available": true,
        "image": "https://m.media-amazon.com/images/I/610UVWS9bIL._UF1000,1000_QL80_.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm037",
        "name": "Cordless Drill",
        "description": "18V cordless drill, lightly used.",
        "category": "Tools",
        "owner": "April Wise",
        "condition": "Good",
        "available": false,
        "image": "https://m.media-amazon.com/images/I/610UVWS9bIL._UF1000,1000_QL80_.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm038",
        "name": "Cordless Drill",
        "description": "18V cordless drill, lightly used.",
        "category": "Tools",
        "owner": "Robert Pena",
        "condition": "Good",
        "available": false,
        "image": "https://m.media-amazon.com/images/I/610UVWS9bIL._UF1000,1000_QL80_.jpg",
        "borrowedBy": "Ryan Morris"
    },
    {
        "id": "itm039",
        "name": "Cordless Drill",
        "description": "18V cordless drill, lightly used.",
        "category": "Tools",
        "owner": "Erica Smith",
        "condition": "Good",
        "available": true,
        "image": "https://m.media-amazon.com/images/I/610UVWS9bIL._UF1000,1000_QL80_.jpg",
        "borrowedBy": "Ryan Williams"
    },
    {
        "id": "itm040",
        "name": "Camping Tent",
        "description": "4-person waterproof tent, easy setup.",
        "category": "Outdoors",
        "owner": "Anthony Morrison",
        "condition": "Excellent",
        "available": false,
        "image": "https://m.media-amazon.com/images/I/81pSTzxLxlL.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm041",
        "name": "Crock Pot",
        "description": "Large 6-quart slow cooker, works great.",
        "category": "Kitchen",
        "owner": "Paul Miller",
        "condition": "Very Good",
        "available": false,
        "image": "https://example.com/images/crockpot.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm042",
        "name": "Camping Tent",
        "description": "4-person waterproof tent, easy setup.",
        "category": "Outdoors",
        "owner": "John Washington",
        "condition": "Excellent",
        "available": true,
        "image": "https://m.media-amazon.com/images/I/81pSTzxLxlL.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm043",
        "name": "Camping Tent",
        "description": "4-person waterproof tent, easy setup.",
        "category": "Outdoors",
        "owner": "Kimberly Castro",
        "condition": "Excellent",
        "available": true,
        "image": "https://m.media-amazon.com/images/I/81pSTzxLxlL.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm044",
        "name": "Ladder",
        "description": "6-foot aluminum step ladder, sturdy.",
        "category": "Tools",
        "owner": "Heather Price MD",
        "condition": "Good",
        "available": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzHuB4YksdCihXMGmWbdwklKvQ88b6TWuCHSqcog1V0wqZKBi4V996rS2v-Zt1gaihGM&usqp=CAU",
        "borrowedBy": null
    },
    {
        "id": "itm045",
        "name": "Ladder",
        "description": "6-foot aluminum step ladder, sturdy.",
        "category": "Tools",
        "owner": "Stephen Schwartz",
        "condition": "Good",
        "available": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzHuB4YksdCihXMGmWbdwklKvQ88b6TWuCHSqcog1V0wqZKBi4V996rS2v-Zt1gaihGM&usqp=CAU",
        "borrowedBy": "Christopher James"
    },
    {
        "id": "itm046",
        "name": "Cordless Drill",
        "description": "18V cordless drill, lightly used.",
        "category": "Tools",
        "owner": "Justin Norris",
        "condition": "Good",
        "available": true,
        "image": "https://m.media-amazon.com/images/I/610UVWS9bIL._UF1000,1000_QL80_.jpg",
        "borrowedBy": "Alison Walker"
    },
    {
        "id": "itm047",
        "name": "Camping Tent",
        "description": "4-person waterproof tent, easy setup.",
        "category": "Outdoors",
        "owner": "Erica Taylor",
        "condition": "Excellent",
        "available": false,
        "image": "https://m.media-amazon.com/images/I/81pSTzxLxlL.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm048",
        "name": "Board Game: Settlers of Catan",
        "description": "Complete set, all pieces included.",
        "category": "Games",
        "owner": "Douglas Nelson",
        "condition": "Like New",
        "available": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6-SgQIKHCeZD5xa45lB931DHn7XRMmIoqw&s",
        "borrowedBy": "Emily Johnson"
    },
    {
        "id": "itm049",
        "name": "Camping Tent",
        "description": "4-person waterproof tent, easy setup.",
        "category": "Outdoors",
        "owner": "Timothy Callahan",
        "condition": "Excellent",
        "available": false,
        "image": "https://m.media-amazon.com/images/I/81pSTzxLxlL.jpg",
        "borrowedBy": null
    },
    {
        "id": "itm050",
        "name": "Board Game: Settlers of Catan",
        "description": "Complete set, all pieces included.",
        "category": "Games",
        "owner": "Nathaniel Martinez",
        "condition": "Like New",
        "available": true,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6-SgQIKHCeZD5xa45lB931DHn7XRMmIoqw&s",
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