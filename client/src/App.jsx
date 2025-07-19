import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            {
              /* Your Home/Catalog Component */
            }
          }
        />
        <Route
          path="/items/:id"
          element={
            {
              /* Your Item Details Component */
            }
          }
        />
        <Route
          path="/add-item"
          element={
            {
              /* Your Add New Item Component */
            }
          }
        />
        <Route
          path="/my-requests"
          element={
            {
              /* Your My Requests Component (Bonus) */
            }
          }
        />
        <Route
          path="/map"
          element={
            {
              /* Your Map View Component (Bonus) */
            }
          }
        />
        <Route
          path="/profile"
          element={
            {
              /* Your User Profile Component (Bonus) */
            }
          }
        />
        <Route
          path="*"
          element={
            {
              /* Your 404 Not Found Component */
            }
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
