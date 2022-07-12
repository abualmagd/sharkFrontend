import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import React from "react";

export default function Tweet(){
    return(
        <div>
            <Card sx={{margin:"10px" }}>
                <CardHeader>
                user name and avatar
                </CardHeader>
                <CardContent>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Id voluptate tempora, eum ad dolorem sunt porro dolore, praesentium d
                    olorum vel ducimus similique! Earum consequuntur eveniet porro harum ut eaque aut?
                </Typography>
                </CardContent>
                <CardMedia 
                    className="tweet-image"
                     component="img"
                     height="194"
                     image="../assets/colory.jpg"
                     alt="Paella dish"
                >
                    
                </CardMedia>
                <CardActions>

                </CardActions>
            </Card>
        </div>
    );
}