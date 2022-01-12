import { Button, Container, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AdminContext } from '../context/AdminProvider';

const AddProduct = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        brand:"",
        type:"",
        size:"", 
        color:"",
        price:"",
        image:"",
    });

    const { addProduct } = useContext(AdminContext)

    function handleInput(event) {
        let object = {
            ...newProduct,
            [event.target.name]:event.target.value
        };
        setNewProduct(object)
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
            brand:"",
            type:"",
            size:"", 
            color:"",
            price:"",
            image:"",
        })
    }

    return (
        <div className="add-product">
            <Container>
            <h2>AddProduct</h2>
            <form onSubmit={handleSubmit}>
                <TextField 
                    onChange={handleInput}
                    fullWidth
                    name="name"
                    label="Name"
                    variant='standard'
                    value={newProduct.name}
                />
                <TextField 
                    onChange={handleInput}
                    fullWidth
                    name="brand"
                    label="Brand"
                    variant='standard'
                    value={newProduct.brand}
                />
                <TextField 
                    onChange={handleInput}
                    fullWidth
                    name="type"
                    label="Type"
                    variant='standard'
                    value={newProduct.type}
                />
                <TextField 
                    onChange={handleInput}
                    fullWidth
                    name="size"
                    label="Size"
                    variant='standard'
                    value={newProduct.size}
                />
                <TextField 
                    onChange={handleInput}
                    fullWidth
                    name="color"
                    label="Color"
                    variant='standard'
                    value={newProduct.color}
                />
                <TextField 
                    onChange={handleInput}
                    fullWidth
                    name="price"
                    label="Price"
                    variant='standard'
                    value={newProduct.price}
                />
                <TextField 
                    onChange={handleInput}
                    fullWidth
                    name="image"
                    label="Image"
                    variant='standard'
                    value={newProduct.image}
                />
                <Button type="submit" variant='contained'>
                    Add
                </Button>
            </form>
            </Container>
        </div>
    );
};

export default AddProduct;