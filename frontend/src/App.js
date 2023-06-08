import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AddRestaurant from "./pages/addRestaurant";

function App() {
  return (
    <BrowserRouter>
      <Routes path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="/addRestaurant" element={<AddRestaurant />} />
        <Route
          path="/updateRestaurant/:restaurantID"
          element={<AddRestaurant />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
