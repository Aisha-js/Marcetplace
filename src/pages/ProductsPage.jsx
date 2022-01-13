import { Container } from "@mui/material";
import React from "react";
import AllProducts from "../components/AllProducts";
import FilterProducts from "../components/FilterProduct";

const ProductsPage = () => {
  return (
    <div>
      <Container>
        <FilterProducts />
        <AllProducts />
      </Container>
    </div>
  );
};

export default ProductsPage;
