import React,  { useState, useEffect } from 'react'
import { Typography, Box, TextField } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import BoletosForm from '../imported/misc/forms/boletosForm';




<<<<<<< HEAD
function TicketPicker({onclickT}) {
=======
function TicketPicker({ user }) {
>>>>>>> 8957b333eba48cf1a180c680533d59701f579771

  const [boletos, setBoletos] = useState(1);

  let ticketforms = []
  let numeroDePersonas = 0;

  for (let i = 0; i < boletos; i++) {
    console.log(i);
    ticketforms.push(BoletosForm);
  }

  const handleChanges = (event) => {
    setBoletos(event.target.value);
    onclickT(event.target.value);
  };



   useEffect(() => {
    // Perform localStorage action
     let item = JSON.parse(localStorage.getItem('user'))
    console.log(item)

  }, []) 

  return (
    <>
    
        <Typography sx={{ margin: "10px 0", color: "#636363", fontWeight: 'bold', fontSize:'18px' }}>
            Número de Boletos
        </Typography>

        <Box sx={{ width: "250px" }}>
            <TextField
              label="Seleccionar cantidad"
              select
              value={boletos}
              onChange={handleChanges}
              fullWidth
              defaultvalue="select"
              >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
            </TextField>
            </Box>

            {ticketforms.map(() => {
            numeroDePersonas += 1;
            return (
              <>
                <BoletosForm persona={numeroDePersonas} arr={ticketforms}  />
              </>
            );
          })}
    
    </>

  )
}

export default TicketPicker