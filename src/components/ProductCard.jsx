import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ClientContext } from '../context/ClientProvider';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import cart from '../images/cart.png'
import inCart from '../images/in-cart.png'
import info from '../images/info.png'


export default function ProductCard({item}) {
    const { addAndDeleteProductInCart, checkProductInCart } =  React.useContext( ClientContext)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="product"
        className="product-ard-image"
      />
      <CardContent>
        <Typography 
        gutterBottom 
        variant="h5" 
        component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Цена: <strong>{item.price} $</strong>
        </Typography>
      </CardContent>
      <CardActions>
        {checkProductInCart(item.id) ? (
          <Button
            color="error"
            onClick={() => addAndDeleteProductInCart(item)}
            size="small"
          >
            <img src={inCart} alt="" />
          </Button>
        ) : (
          <Button onClick={() => addAndDeleteProductInCart(item)} size="small">
           <img src={cart} alt="" />
          </Button>
        )}
        <Link to={`/product/${item.id}`}>
        <Button size="extrasmall"> <img src={info} alt="" /></Button>
        </ Link>
      </CardActions>
    </Card>
  );
}
