import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ClientContext } from "../context/ClientProvider";
import ProductCard from "./ProductCard";
import styled from "styled-components";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;


const AllProducts = () => {
  const { getProducts, products } = useContext(ClientContext);
  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <Wrapper>
      <Title>ALL PRODUCTS</Title> 
      <Top>
      <Grid container spacing={4}>
        {products.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <ProductCard item={item} />
          </Grid>
        ))}
      </Grid>
      </Top>
      </Wrapper>
    </Container>
    
  );
};

export default AllProducts;
