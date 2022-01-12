import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ClientContext } from '../context/ClientProvider';

export default function ProductCard({item}) {
    const {  } =  React.useContext( ClientContext)
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
