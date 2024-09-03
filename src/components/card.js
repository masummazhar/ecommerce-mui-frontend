import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const BasicCard = ({country,capital,imgSrc}) => {
    return (
        <Card style={{ maxWidth: 350 }}>
            <CardHeader
                title={country}
                subheader={capital}
                // style={{backgroundColor:'red'}}
            />
            <CardMedia
                component="img"
                height="194"
                image={imgSrc}
                alt={country}
            />
            <CardContent>
                Flag of {country}
            </CardContent>
        </Card>
    )
}

export default BasicCard