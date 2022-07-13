import { ListItem, ListItemAvatar, Avatar, ListItemText, CardMedia, CardContent, Card, Typography, CardActions, Button, CardHeader } from "@mui/material";
import {Product} from "../../app/models/product";


interface Props {
    product: Product;
}
export default function ProductCard({product}: Props) {
	return (
        <Card>
            <CardHeader
                avatar={
                <Avatar sx={{bgcolor:'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTyopgraphyProps={{
                    sx: {fontweight: 'bold',color: 'primary.main'}
                }}
           />
            <CardMedia
               
               sx={{height:140, backgroundSize: "contain"}}
                image={product.pictureUrl}
                title ={product.name}
              
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5" component="div">
                    ${(product.price/100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
             {product.brand}/ {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
)
}