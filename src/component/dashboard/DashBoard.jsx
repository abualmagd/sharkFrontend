
import React from 'react';
import SideBar from './SideBar';
import {Grid}   from "@mui/material";
import Home from './Home';

export default function DashBoard() {

    return (


        <Grid container spacing={3} sx={{position:"relative"}}>
            <Grid item xs={2} >
                <SideBar/>
            </Grid>
            <Grid item xs={10}  md={7}>
                <Home/>
            </Grid>
            <Grid item xs={0} sm={0} md={4} lg={3} >
                <p  >this right</p>
            </Grid>
        </Grid>
    );

}

