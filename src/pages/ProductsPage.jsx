import { Container } from "@mui/material";
import React from "react";
import AllProducts from "../components/AllProducts";
import FilterProducts from "../components/FilterProduct";
import ProductsPagination from "../components/ProductsPagination";

const ProductsPage = () => {
  return (
    <div>
      <Container>
        <FilterProducts />
        <AllProducts />
        <ProductsPagination />
      </Container>
    </div>
  );
};

export default ProductsPage;
