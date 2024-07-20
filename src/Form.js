import React, { useState } from "react"; 
import Box from '@mui/material/Box'
import { Button, Input, TextField, Typography } from "@mui/material";

const ariaLabel = { 'aria-label': 'description' };
const Form = ()=>{
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleClinkEvent = ()=>{
        let fname = document.getElementById();
    }

    const validateForm = ()=>{
        if(firstname.length == 0){

        }
    }
    return(
        <>
        <Box
        component="form"
        sx={{
            margin:30,
            border : 3,
            borderColor :'primary.main',
            width : 1/2,
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
      <Input placeholder="First name"  color="primary"></Input>
      <Input placeholder="Last name" color="primary"></Input>
      <Box
      component="form"
      sx={{
          border : 3,
          borderColor :'primary.main',
          width : 1/2,
          '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
        <Typography
        component="div"
        variant="body1"
        style={{
          height: 100,
          width: '100%',
          position: 'relative',
        }}
        >
        <Input placeholder="Enter password" label="Password" type="password" 
      autoComplete="current-password"/>
      <Input placeholder="Enter email" label="Email" type="email" autoComplete="current-email"></Input>
        </Typography>
      </Box>
      <Button color="secondary">Submit</Button>
    </Box>
        </>
    )
};
export default Form;