import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Navigate, useNavigate } from 'react-router-dom';



export default function BasicTextFields() {
  const Navigate = useNavigate()

  const navigater = () => {

      Navigate("/Dashboard")

  }
  return (

    <Grid container spacing={4} justifyContent = "center" ms = {6}>
        <Box width="100%"  marginTop = {14}>
            <h1>Login Page</h1>
        </Box>
      <Stack spacing={1} justifyContent= "center" marginTop={2} sx={{border: "1px solid", width:"90vh"}}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Login" variant="outlined" />
    
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Password" variant="outlined" />
    
    </Box>
    <Box>
    <Button onClick={navigater} variant="contained" color="success">
        Login
      </Button>
      </Box>

    </Stack>
    </Grid>
  );
}
