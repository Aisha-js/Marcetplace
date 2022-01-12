import React, { useContext, useEffect } from "react";
import { Button, Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";

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
      <h2>Product DETAIL</h2>
      <div className="product-detail">
        <Grid container>
          <Grid item xs={12} sm={8} md={8}>
            <div>
              <img src={detail.image} alt={detail.name} />
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div>
              <h2>{detail.name}</h2>
              <ul>
                <li>
                  <span>Brand: </span>
                  <strong>{detail.brand}</strong>
                </li>
                <li>
                  <span>Size: </span>
                  <strong>{detail.size}</strong>
                </li>
                <li>
                  <span>Color: </span>
                  <strong>{detail.color}</strong>
                </li>
              </ul>
              <h3>Price: {detail.price} som</h3>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ProductDetail;
