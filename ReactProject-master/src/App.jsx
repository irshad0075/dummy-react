import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Page404 from "./pages/Page404";
import NavigationBar from "./Components/NavigationBar";
import FooterSection from "./Components/FooterSection";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductsPage";

export default function App() {
  const [user, setUser] = useState(true);
  return (
    <>
      <NavigationBar />

      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/products/:productID" element={<Products />} />
          <Route
            path="/products/category/:categoryName"
            element={<CategoryPage />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="*" element={<Navigate to="/LoginPage" replace={true} />} />
        </Routes>
      )}

      <FooterSection />
    </>
  );
}
