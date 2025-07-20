# Neighborhood Resource Sharing App

A fullstack web application that enables neighbors to share, borrow, and lend household items within their community. The app features a catalog of items, item details, and the ability to add new items.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Known Issues & Limitations](#known-issues--limitations)
- [License](#license)

---

## Tech Stack

**Frontend:**

- React 19
- Redux Toolkit
- React Router DOM
- Ant Design (UI)
- Axios
- Vite (build tool)

**Backend:**

- Node.js
- Express 5
- CORS
- Nodemon (dev)
- Mock data (no database)

---

## Features

- **Item Catalog:** Browse all available items, filter by category, search by name, and check availability.
- **Item Details:** View detailed information about each item, including owner, condition, and availability.
- **Add New Item:** Add a new item to the catalog with name, description, category, condition, and image URL.
- **404 Page:** Custom not found page for invalid routes.

**Bonus (Partially Implemented):**

- **Map View:** Placeholder for viewing items on a map.
- **My Requests:** Placeholder for tracking borrow requests.
- **User Profile & Trust Score:** Placeholder for user trust score and profile info.

---

## Setup Instructions

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)

### 1. Clone the Repository

```bash
git clone <repo-url>
cd Neighborhood-Resource-Sharing-App
```

### 2. Install Dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd ../server
npm install
```

### 3. Run the App

#### Start the Server

```bash
cd server
npm run dev
# Server runs on http://localhost:8082
```

#### Start the Client

```bash
cd ../client
npm run dev
# Client runs on http://localhost:5173
```

---

## API Documentation

### Base URL

```
http://localhost:8082/api
```

### Endpoints

#### **Items**

- `GET /items/` — Get all items (with optional search/filter logic)
- `GET /items/:id` — Get details for a specific item by ID
- `POST /items/` — Add a new item (fields: name, description, category, condition, image)
- `POST /items/:id/request` — Request to borrow an item (mocked, updates availability)

#### **Map Items**

- `GET /map-items/map-items` — Get all items with map location data

#### **Trust Score**

- `GET /trust-score/trust-score/:userId` — Get trust score and stats for a user (mocked)

#### **Sample Data Structures**

- **Item:**
  ```json
  {
    "id": "itm001",
    "name": "Yoga Mat",
    "description": "Non-slip yoga mat, 6mm thick, blue color.",
    "category": "Fitness",
    "owner": "Joseph Norris",
    "condition": "Good",
    "available": false,
    "image": "https://example.com/images/yogamat.jpg",
    "borrowedBy": "Amanda Bryant"
  }
  ```
- **Map Item:**
  ```json
  {
    "itemId": "itm001",
    "lat": 28.4595,
    "lng": 77.0266,
    "address": "Block A, Sector 45",
    "name": "Cordless Drill",
    "category": "Tools"
  }
  ```
- **User (Trust Score):**
  ```json
  {
    "userId": "usr123",
    "name": "Alice Johnson",
    "trustScore": 9.5,
    "lendingCount": 7,
    "borrowingCount": 2,
    "positiveFeedback": 97
  }
  ```

---

## Known Issues & Limitations

- **No persistent database:** All data is mock/in-memory and resets on server restart.
- **Bonus features (Map View, My Requests, User Profile) are placeholders:** UI exists, but functionality is not implemented.
- **No authentication:** All users are treated the same; no login or registration.
- **Borrow/request logic is mocked:** No real user tracking or request approval flow.
- **Image URLs must be provided manually when adding items.**
- **CORS:** The server is configured for a specific deployed frontend; update the CORS origin for local development if needed.

---

## License

MIT
