import React,  { useState, useEffect } from 'react'
import { Typography, Box, TextField } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import BoletosForm from '../imported/misc/forms/boletosForm';





function TicketPicker({onclickT , setAditionalsUsers}) {

  const [boletos, setBoletos] = useState(1);
  const [validUsers, setValidUser] = useState([])
  const [ticketforms, setTicketforms] = useState([])
  let numeroDePersonas = 0;
  const [aditionalsUser, setAditionalsUser] = useState([])

  
  useEffect(()=>{
    for (let i = 0; i < boletos; i++) {
      ticketforms.push({
        id: i
      });
    }
  },[])
  const handleChanges = (event) => {
    
    setTicketforms([])
    setBoletos(event.target.value);
    const ticketformsAux = []
    for (let i = 0; i < event.target.value; i++) {
      ticketformsAux.push({
        id: i
      });
    }
    setTicketforms(ticketformsAux)
    onclickT(event.target.value);
  };



   useEffect(() => {
    // Perform localStorage action
     let item = JSON.parse(localStorage.getItem('user'))

  }, []) 
  const addUser=(data)=>{
    const auxUsers = [...aditionalsUser];
    auxUsers.push(data)
    setAditionalsUser([...auxUsers])
    if(auxUsers.length===ticketforms.length){
      setAditionalsUsers(auxUsers)
    }
  }
  const deleteUser=(id)=>{
    let auxArra =  aditionalsUser.filter(user=>user.id!==id)
    setAditionalsUser(auxArra)
    console.log(auxArra)
  }
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

            {ticketforms.length&&ticketforms.map((ticket, index) => {
            return (
                <BoletosForm key={index} id={ticket.id} deleteUser={deleteUser} addUser={(data)=>addUser(data)} persona={numeroDePersonas} arr={ticketforms}  />
            );
          })}
    
    </>

  )
}

export default TicketPicker