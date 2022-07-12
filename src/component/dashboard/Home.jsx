import React from "react";
import Tweet from "./Tweet";
import { Grid} from "@mui/material";
export default function Home(){

    return (
<Grid container spacing={1} >
  <Grid item xs={12} md={12} lg={6} >
    <Tweet/>
  </Grid>
  <Grid item xs={12} md={12} lg={6} >
    <Tweet/>
  </Grid>
  <Grid item xs={12} md={12} lg={6} >
    <Tweet/>
  </Grid>
  <Grid item xs={12} md={12} lg={6} >
    <Tweet/>
  </Grid>
</Grid>
    
    );
}