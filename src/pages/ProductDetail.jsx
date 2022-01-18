import React, { useContext, useEffect } from "react";
import { CardContent, Container, Grid, Typography } from "@mui/material";

import { useParams } from "react-router-dom";
import { ClientContext } from "../context/ClientProvider";
import AllProducts from "../components/AllProducts";

const ProductDetail = () => {
  const params = useParams();
  const { getProductDetail, detail } = useContext(ClientContext);
  useEffect(() => {
    getProductDetail(params.id);
  }, []);
  if (!detail) {
    return <h2>Loading...</h2>;
  }
  return (
    <Container>
      <h2>Product Info</h2>
      <div className="product-detail">
        <Grid container>
          <Grid item xs={6} sm={8} md={8}>
            <div>
              <img src={detail.image} alt={detail.name} />
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <div>
              <CardContent>
                <Typography variant="h3" component="div">
                  {detail.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <span>Type: </span>
                  {detail.type}
                </Typography>
                <Typography variant="h5">
                  <span>Brand: </span>
                  {detail.brand}
                </Typography>
                <Typography variant="h5">
                  <span>Size: </span>
                  {detail.size}
                </Typography>
                <Typography variant="h5">
                  <span>Color: </span>
                  {detail.color}
                </Typography>
                <Typography variant="h5">
                  <span>Price: </span>
                  {detail.price}
                </Typography>
              </CardContent>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <AllProducts />
      </div>
    </Container>
  );
};

export default ProductDetail;
