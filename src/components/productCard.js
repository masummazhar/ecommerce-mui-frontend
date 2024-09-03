import * as React from 'react';

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ProductCard = ({productName,productDescription,price,productImage }) => {
    return (
			<Card sx={{ minWidth: 250, maxWidth: 345 }}>
				<CardMedia
					sx={{ height: 140 }}
					image={productImage}
					title={productName}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{productName}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{productDescription}
					</Typography>

					<Typography variant="h6" color="text.secondary">
						Price:{price}$
					</Typography>
				</CardContent>

				<CardActions>
					<Button variant="contained" size="small" color="secondary">
						Cart
					</Button>
					<Button variant="contained" size="small" color="success">
						Pruchase
					</Button>

					<Button variant="contained" size="small" color="info">
						Details
					</Button>
				</CardActions>
			</Card>
		);
}

export default ProductCard