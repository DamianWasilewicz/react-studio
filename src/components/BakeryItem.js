// TODO: create a component that displays a single bakery item
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function BakeryItem(props) {
    
    return(
        
        <Card sx={{ maxWidth: 400, maxHeight: 450, border: 2}}>
        <CardMedia
        component="img"
        height="200"
        image={props.item.image}
        alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        {props.item.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
        {props.item.description}
        </Typography>
        </CardContent>
        <Button sx={{size : "large", width: 300,  height:80}} onClick={() => {props.onClick(props.item)}}>Add To Cart</Button>
        </Card>
        );
    }
    
    export default BakeryItem;