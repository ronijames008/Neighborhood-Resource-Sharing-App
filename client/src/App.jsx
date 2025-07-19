import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddNewItem from "./pages/AddNewItem";
import NotFound404 from "./pages/404NotFound";
import ItemDetails from "./pages/ItemDetails";
import MyRequests from "./pages/MyRequests";
import MapView from "./pages/MapView";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Your Home/Catalog Component */}
        <Route path="/" element={<Home />} />
        {/* Your Item Details Component */}
        <Route path="/items/:id" element={<ItemDetails />} />
        {/* Your Add New Item Component */}
        <Route path="/add-item" element={<AddNewItem />} />
        {/* Your My Requests Component (Bonus) */}
        <Route path="/my-requests" element={<MyRequests />} />
        {/* Your Map View Component (Bonus) */}
        <Route path="/map" element={<MapView />} />
        {/* Your User Profile Component (Bonus) */}
        <Route path="/profile" element={<UserProfile />} />
        {/* Your 404 Not Found Component */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
