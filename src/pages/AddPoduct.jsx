import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminProvider";
import MenuItem from '@mui/material/MenuItem';
import { size, type } from "../helpers/const";
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
  justify-content: center;
  padding: 20px;
`;


const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    type: "",
    size: "",
    color: "",
    price: "",
    image: "",
  });

  const { addProduct } = useContext(AdminContext);


  function handleInput(event) {
    let object = {
      ...newProduct,
      [event.target.name]: event.target.value,
    };
    setNewProduct(object);
  }

  function handleSubmit(event) {
    event.preventDefault();
    for (let key in newProduct) {
      if (!newProduct[key].trim()) {
        alert("Fields required!");
        return;
      }
    }
    addProduct(newProduct);
    setNewProduct({
      name: "",
      brand: "",
      type: "",
      size: "",
      color: "",
      price: "",
      image: "",
    });
  }

  return (
    <div className="add-product">
      <Container>
        <Wrapper>
        <Title>ADD PRODUCT </Title>
        <Top>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleInput}
            fullWidth
            name="name"
            label="Name"
            variant="standard"
            value={newProduct.name}
          />
          <TextField
            onChange={handleInput}
            fullWidth
            name="brand"
            label="Brand"
            variant="standard"
            value={newProduct.brand}
          />
           <TextField
            id="Native select"
            fullWidth
            select
            variant="standard"
            label="Type"
            name='type'
            value={newProduct.type}
            onChange={handleInput}
          >
            {type.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          
          <TextField
            id="Native select"
            fullWidth
            select
            variant="standard"
            label="Size"
            name='size'
            value={newProduct.size}
            onChange={handleInput}
          >
            {size.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            onChange={handleInput}
            fullWidth
            name="color"
            label="Color"
            variant="standard"
            value={newProduct.color}
          />
          <TextField
            onChange={handleInput}
            fullWidth
            type="number"
            name="price"
            label="$"
            variant="standard"
            value={newProduct.price}
          />
          <TextField
            onChange={handleInput}
            fullWidth
            name="image"
            label="Image"
            variant="standard"
            value={newProduct.image}
          />
          <Button type="submit" variant="contained">
            Add
          </Button>
        </form>
        </Top>
        </Wrapper>
      </Container>
        
      
    </div>
  );
};

export default AddProduct;
