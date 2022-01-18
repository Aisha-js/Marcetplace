import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AdminProvider from "./context/AdminProvider";
import AuthProvider from "./context/AuthProvider";
import ClientProvider from "./context/ClientProvider";
import AddPoduct from "./pages/AddPoduct";
import AdminPannel from "./pages/AdminPannel";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import ProductsPage from "./pages/ProductsPage";
import CartPageSecond from "./pages/CartPageSecond"
import CreditCardPage from "./pages/creditCard/CreditCardPage";
import OrderForm from "./pages/OrderForm";

const MyRoutes = () => {
  return (
    <AuthProvider>
      <AdminProvider>
        <ClientProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/add" element={<AddPoduct />} />
              <Route path="/admin" element={<AdminPannel />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/products/" element={<ProductsPage />} />
              <Route path="/cart/" element={<CartPageSecond />} />
              <Route path="/creditcard/" element={<CreditCardPage/>} />
              <Route path="/orderform/" element={<OrderForm/>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ClientProvider>
      </AdminProvider>
    </AuthProvider>
  );
};

export default MyRoutes;
