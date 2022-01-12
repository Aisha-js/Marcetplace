import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminProvider from "./context/AdminProvider";
import ClientProvider from "./context/ClientProvider";
import AddPoduct from "./pages/AddPoduct";
import AdminPannel from "./pages/AdminPannel";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";

const MyRoutes = () => {
  return (
    <AdminProvider>
      <ClientProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/add" element={<AddPoduct />} />
            <Route path="/admin" element={<AdminPannel />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </ClientProvider>
    </AdminProvider>
  );
};

export default MyRoutes;
