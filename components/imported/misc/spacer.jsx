import React,  { useState } from 'react'
import { Typography, Box, TextField } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import BoletosForm from './forms/boletosForm';




function Spacer() {

  const [boletos, setBoletos] = useState("");

  let ticketforms = []
  let numeroDePersonas = 0;

  for (let i = 0; i < boletos; i++) {
    console.log(i);
    ticketforms.push(BoletosForm);
  }

  const handleChanges = (event) => {
    setBoletos(event.target.value);
  };

  return (
    <>
    
        
        <Box sx={{ width: "250px" }}>
            
            </Box>

            
    </>

  )
}

export default Spacer