import * as React from "react";

import { TextField, touchRippleClasses } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
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

  const [multipleForm, setMultipleForm] = useState([])

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

  return (
    <>
      {mostrar && (
        <Box sx={{ maxWidth: "300px" }}>
          <List>
            <ListItem>
              <ListItemButton onClick={() => setOpen(!open)}>
                <ListItemIcon>{">"}</ListItemIcon>
                <ListItemText primary={`Formulario numero: ${props.persona}`} />
              </ListItemButton>
            </ListItem>
          </List>
          <Collapse in={open}>
            <List>
              <Paper>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Typography>Persona numero {props.persona} </Typography>
                  <Typography>Nombre</Typography>
                  <TextField
                    sx={{ marginBottom: "20px" }}
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
                    error={errors.email}
                    helperText={errors.email && <p>{errors.email.message}</p>}
                  />
                  <Typography sx={{ marginBottom: "10px" }}>
                    Teléfono
                  </Typography>
                  <TextField
                    sx={{ marginBottom: "20px" }}
                    name="phone"
                    variant="outlined"
                    label="Ingrese su numero de teléfono"
                    {...register("phone", { required: true })}
                    error={errors.phone}
                    helperText={
                      errors.phone && <p>El campo teléfono es requerido</p>
                    }
                  />
                  <Typography sx={{ marginBottom: "10px" }}>
                    Documento
                  </Typography>
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
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "#FECC1D", marginBottom: "30px" }}
                  >
                    Enviar datos de {props.persona}
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
