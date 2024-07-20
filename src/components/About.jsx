import React from "react";
import { Box, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
const About = ()=>{
    return(
        <>
        <Box sx ={{border : "4px solid yellow"}}>
            <Typography>
                <h1 style = {{display : "flex", border : "4px solid blue", color: "white"}}>Hi I'm, 
                <span style= {{color : green}}>Nilesh Chauhan</span>
                </h1>
            </Typography>
            <p style ={{display : "flex", border : "4px solid cyan"}}>Paragrahp</p>
        </Box>
        </>
    );
}
export default About;