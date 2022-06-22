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
  /*   const [ticketType, setTicketType] = useState(4)
   */

  const [multipleForm, setMultipleForm] = useState([])

  /* const handleChanges = (event) => {
    setBoletos(event.target.value);
  }; */

  React.useEffect(() => {
    console.log(multipleForm);

    console.log(multipleForm.length);
  }, [multipleForm]);



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const r = data;
    setMostrar(false);

    setMultipleForm([...multipleForm, r]);

    reset();
  };

  /*  useEffect(() => {
     // Perform localStorage action
      let user = localStorage.getItem('user')
     console.log(item)
     setUserSession(user)
     
   }, [])  */

  useEffect(() => {
    if (localStorage.getItem('user')) {
      
      const userData = JSON.parse(localStorage.getItem('user'))
      console.log(userData)
      setUserTicket(true)
      setUserSession(userData)
      if (props.persona > 1) {
        setUserTicket(false)
      }
      else {
        setUserTicket(false)

      }
    }

  }, [])

  useEffect(() => {
    
    console.log(open)
   
  }, [])
  



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

                  <Typography>Nombres Completos</Typography>

                  {userSession.id != undefined? (

                    <TextField
                      sx={{ marginBottom: "20px", '&::placeholder': { textAlign: 'center', justifyContent: 'center' } }}
                      name="firstName"
                      value={`${userSession.firstName}`}
                      label="Ingrese nombre"
                      variant="outlined"
                      inputProps={{
                        ...register("firstName", { required: true }),
                      }}
                      error={errors.firstName}
                      helperText={
                        errors.firstName && <p>El campo nombre es requerido</p>
                      }
                    />) :
                    <TextField
                      sx={{ marginBottom: "20px", '&::placeholder': { textAlign: 'center', justifyContent: 'center' } }}
                      name="firstName"

                      label="Ingrese nombre"
                      variant="outlined"
                      inputProps={{
                        ...register("firstName", { required: true }),
                      }}
                      error={errors.firstName}
                      helperText={
                        errors.firstName && <p>El campo nombre es requerido</p>
                      }
                    />

                  }

                  {/* EMAIL */}

                  <Typography sx={{ marginBottom: "10px" }}>
                    Correo electrónico
                  </Typography>
                  {userSession.id != undefined? <TextField
                    sx={{ marginBottom: "20px" }}
                    name="email"
                    value={`${userSession.email}`}
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
                    error={errors.email}
                    helperText={errors.email && <p>{errors.email.message}</p>}
                  /> :
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
                      error={errors.email}
                      helperText={errors.email && <p>{errors.email.message}</p>}
                    />
                  }

                  {/* Telefono */}

                  <Typography sx={{ marginBottom: "10px" }}>
                    Teléfono
                  </Typography>
                  {userSession.id != undefined? <TextField
                    sx={{ marginBottom: "20px" }}
                    name="phone"
                    value={`${userSession.phone}`}
                    variant="outlined"
                    label="Ingrese su numero de teléfono"
                    {...register("phone", { required: true })}
                    error={errors.phone}
                    helperText={
                      errors.phone && <p>El campo teléfono es requerido</p>
                    }
                  /> :
                    <TextField
                      sx={{ marginBottom: "20px" }}
                      name="phone"
                      variant="outlined"
                      label="Ingrese su numero de teléfono"
                      {...register("phone", { required: true })}
                      error={errors.phone}
                      helperText={
                        errors.phone && <p>El campo teléfono es requerido</p>
                      } />
                  }

                  {/* Cedula */}

                  <Typography sx={{ marginBottom: "10px" }}>
                    Cédula de identidad
                  </Typography>

                  {userSession.id != undefined? <TextField
                    sx={{ marginBottom: "20px" }}
                    name="document"
                    value={`${userSession.document}`}
                    variant="outlined"
                    label="Ingrese su cedula"
                    type="tel"
                    {...register("document", {
                      required: {
                        valueAsNumber: true,
                        message: "Campo requerido",
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
                    error={errors.document}
                    helperText={
                      errors.document && <p>{errors.document.message}</p>
                    }
                  /> :
                    <TextField
                      sx={{ marginBottom: "20px" }}
                      name="document"
                      variant="outlined"
                      label="Ingrese su cedula"
                      type="tel"
                      {...register("document", {
                        required: {
                          valueAsNumber: true,
                          message: "Campo requerido",
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
                      error={errors.document}
                      helperText={
                        errors.document && <p>{errors.document.message}</p>
                      }
                    />
                  }

                  {/* <Box sx={{ width: "250px" }}>
                    <TextField
                      label="Seleccionar cantidad"
                      select
                      value={ticketType}
                      onChange={handleChanges}
                      fullWidth
                      defaultvalue="select"
                    >
                      <MenuItem value={4}>Palco B y D 4$</MenuItem>
                      <MenuItem value={8}>Gradas A y B 8$</MenuItem>
                      <MenuItem value={40}>Zona Media Roja 40$</MenuItem>
                      <MenuItem value={80}>80$ VIP</MenuItem>

                    </TextField>
                  </Box> */}

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "#FECC1D", marginBottom: "30px", marginLeft: '71px' }}
                  >
                    Guardar
                  </Button>
                </form>
              </Paper>
            </List>
          </Collapse>
        </Box>
      )}
    </>
  );
};

export default BoletosForm;
