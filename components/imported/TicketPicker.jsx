import React,  { useState } from 'react'
import { Typography, Box, TextField } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import BoletosForm from '../imported/misc/forms/boletosForm';




function TicketPicker() {

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
    
        <Typography sx={{ margin: "10px 0", color: "#636363" }}>
            Entradas
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
                <BoletosForm persona={numeroDePersonas} arr={ticketforms} />
              </>
            );
          })}
    
    </>

  )
}

export default TicketPicker