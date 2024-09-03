import React from "react";
import Grid from '@mui/material/Grid';
import ProductCard from "../components/productCard";
import productList from "../utils/productList";

import { Stack } from "@mui/material";
import Banner from "../components/banner";


const CategoryPage = () => {

    return (
        <>
        <Banner/>
            <br/>

            <Stack direction='row' alignItems="center" justifyContent="center">
                <h1>Products of the Category</h1>
            </Stack>

            <br/>
            <br/>

            <Grid 
            
                container 
                spacing={3} 
                justifyContent="center" 
                alignItems="center"
                style={{
                    paddingLeft: "3%"
                }}
            >
                {productList.map(product => {
                    return (
                        <Grid item xs={6} md={4} >
                            <ProductCard
                                productImage={product.image}
                                productName={product.name}
                                productDescription={product.description}
                                price={product.price}
                               
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default CategoryPage