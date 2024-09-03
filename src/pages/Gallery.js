import React from "react";
import { Grid } from "@mui/material";
import BasicCard from "../components/card";

const Gallery = () => {
    return(
        <Grid 
            container 
            spacing={3}
            alignItems="center"
            justifyContent="space-around"
            style={{padding: "3% 0% 0% 3%"}}
        >
            <Grid item xs={6} md={4} >
                <BasicCard
                    country={"Bangladesh"}
                    capital={"Dhaka"}
                    imgSrc={"https://t4.ftcdn.net/jpg/03/21/70/45/360_F_321704592_azoD811yWmGtGixdjW2koEM1i4ZSksyA.jpg"}
                />
            </Grid>

            <Grid item xs={6} md={4}>
                <BasicCard
                    country={"India"}
                    capital={"Delhi"}
                    imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnQXo7eUZqYL9_br-pTPTkbowPp_JvvFdqw&s"}
                />
            </Grid>

            <Grid item xs={6} md={4}>
                <BasicCard
                    country={"England"}
                    capital={"London"}
                    imgSrc={"https://cdn.britannica.com/44/344-050-94536674/Flag-England.jpg"}
                />
            </Grid>
        </Grid>
    )
}

export default Gallery