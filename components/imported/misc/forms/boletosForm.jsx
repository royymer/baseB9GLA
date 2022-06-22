import * as React from "react";


import { TextField, touchRippleClasses } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid, Paper } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import MultipleFormContext from "../../multipleFormContext";
import { useContext } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";

  const BoletosForm = (props) => {
  const [mostrar, setMostrar] = useState(true);
  const [datosInForm, setDatosInForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [userTicket, setUserTicket] = useState(true)
  const [userSession, setUserSession] = useState({})

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [document, setDocument] = useState("");
  const [email, setEmail] = useState("");
  const [isEdit, setIsEdit] = useState(true)




  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      if(data.firstName!==""&&data.lastName!==""&&data.document!==""&&data.email!==""&&data.phone!==""){
        setIsEdit(false)
        props.addUser({
          id:props.id,
          ...data
        })
        setOpen(false)
      }
        
  };

  
  return (
    <>
      {mostrar && (
        <Box sx={{ maxWidth: "300px", minWidth: '246px' }}>
          <List>
            <ListItem>
              <ListItemButton onClick={() => setOpen(!open)}>
                <ListItemIcon>{">"}</ListItemIcon>
                <ListItemText primary={`Información personal ${props.persona}`} style={{ minWidth: '260px' }} />
              </ListItemButton>
            </ListItem>
          </List>
          <Collapse in={open}>
            <List>
              <Paper>
                <form onSubmit={handleSubmit(onSubmit)}>



                  {/* NOMBRE */}

                  <Typography>Nombre</Typography>
                    <TextField
                      sx={{ marginBottom: "20px", '&::placeholder': { textAlign: 'center', justifyContent: 'center' } }}
                      name="firstName"

                      label="Ingrese su nombre"
                      variant="outlined"
                      value={firstName}
                      onChange={(e)=>setFirstName(e.target.value)}
                      inputProps={{
                        ...register("firstName", { required: true }),
                      }}
                      disabled={!isEdit}
                      error={errors.firstName}
                      helperText={
                        errors.firstName && "El campo nombre es requerido"
                      }
                    />
                  <Typography>Apellido</Typography>
                    <TextField
                      sx={{ marginBottom: "20px", '&::placeholder': { textAlign: 'center', justifyContent: 'center' } }}
                      name="lastName"

                      label="Ingrese su apellido"
                      variant="outlined"
                      value={lastName}
                      onChange={(e)=>setLastName(e.target.value)}
                      inputProps={{
                        ...register("lastName", { required: true }),
                      }}
                      disabled={!isEdit}
                      error={errors.lastName}
                      helperText={
                        errors.lastName && "El campo apellido es requerido"
                      }
                    />
                  <Typography sx={{ marginBottom: "10px" }}>
                    Correo electrónico
                  </Typography>
                    <TextField
                      sx={{ marginBottom: "20px" }}
                      name="email"
                      variant="outlined"
                      label="Ingrese su correo electrónico"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "campo necesitado",
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "El formato no es correcto",
                        },
                      })}
                      value={email}
                      disabled={!isEdit}
                      onChange={(e)=>setEmail(e.target.value)}
                      error={errors.email}
                      helperText={errors.email && `${errors.email.message}`}
                    />

                  {/* Telefono */}

                  <Typography sx={{ marginBottom: "10px" }}>
                    Teléfono
                  </Typography>
                    <TextField
                      sx={{ marginBottom: "20px" }}
                      name="phone"
                      variant="outlined"
                      
                      label="Ingrese su numero de teléfono"
                      {...register("phone", { required: true })}
                      value={phone}
                      onChange={(e)=>setPhone(e.target.value)}
                      disabled={!isEdit}
                      error={errors.phone}
                      helperText={
                        errors.phone && "El campo teléfono es requerido"
                      } />

                  <Typography sx={{ marginBottom: "10px" }}>
                    Cédula de identidad
                  </Typography>
                    <TextField
                      sx={{ marginBottom: "20px" }}
                      name="document"
                      variant="outlined"
                      label="Ingrese su cedula"
                      type="tel"
                      
                      {...register("document", {
                        required: {
                          value: true,
                          message: "campo necesitado",
                        },

                        pattern: {
                          value: /^(0|[1-9]\d*)(\.\d+)?$/,
                          message: "Solo utilizar numeros",
                        },
                        // pattern: {
                        //   value: /[^a-zA-Z0-9]/g,
                        //   message: "No introducir simbolos",
                        // },
                      })}
                      value={document}
                      disabled={!isEdit}
                      onChange={(e)=>setDocument(e.target.value)}
                      error={errors.document}
                      helperText={
                        errors.document && `${errors.document.message}`
                      }
                    />
                  {isEdit&&
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "#FECC1D", marginBottom: "30px", marginLeft: '71px' }}
                  >
                    Guardar
                  </Button>}
                  
                </form>
                {!isEdit&&<Button
                    onClick={()=>{setIsEdit(true); props.deleteUser(props.id)}}
                    variant="contained"
                    sx={{ backgroundColor: "#FECC1D", marginBottom: "30px", marginLeft: '71px' }}
                  >
                    Modificar
                  </Button>}
              </Paper>
            </List>
          </Collapse>
        </Box>
      )}
    </>
  );
};

export default BoletosForm;
