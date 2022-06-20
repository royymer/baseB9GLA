import * as React from "react";
import { useForm } from "react-hook-form";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormHelperText from "@mui/material/FormHelperText";
import FormContext from "../formContext";
import { useContext } from "react";
import ForgotPassword from "./forgotPassword";

import { TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

//servicios
import { userService } from "../../../../src/services";
//routers
import { useRouter } from "next/router";

import CloseIcon from "@mui/icons-material/Close";

const InicioForm = (props) => {
  
  const [isDialogInicioOpen, setisDialogInicioOpen] = useState(false)
  const [isDialogRegistroOpen, setIsDialogRegistroOpen] = useState(false)
  const [isRegisterConfirmOpen, setIsRegisterConfirmOpen] = useState(false)
  const [isPasswordConfirmOpen, setIsPasswordConfirmOpen] = useState(false)

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  ///DATOS
  const { isOpen, onClose } = props;
  const onSubmit = async (data) => {
    let { status, response } = await userService.login(data);
    if (status === 200) {
      console.log("Ingresar")
    }
    console.log(data);

  };

  return (
    <>
      <ForgotPassword
        isOpen={isPasswordConfirmOpen}
        onClose={() => setIsPasswordConfirmOpen(false)}
      />

      <Dialog open={isOpen} onClose={onClose}>
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: "end", marginRight: "10px" }}>
            <CloseIcon onClick={() => setIsDialogInicioOpen(false)} />
          </Grid>
          <Grid item xs={12}>
            <DialogTitle sx={{ textAlign: "center" }}>
              Iniciar sesión
            </DialogTitle>
          </Grid>

          <DialogContent>
            <DialogContentText>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container flexDirection="column">
                  <Typography sx={{ marginBottom: "10px" }}>
                    Correo electrónico
                  </Typography>
                  <TextField
                    sx={{ marginBottom: "20px" }}
                    name="name"
                    variant="outlined"
                    label="Ingrese su correo electronico"
                    {...register("email", { required: true })}
                    error={errors.correo}
                    helperText={
                      errors.correo && <p>El campo correo es requerido</p>
                    }
                  />

                  <Typography sx={{ marginBottom: "10px" }}>
                    Contraseña
                  </Typography>
                  {/* <TextField
                    sx={{ marginBottom: "50px" }}
                    name="Contrasena"
                    placeholder="Ingrese su contrasena"
                    variant="outlined"
                    {...register("Contrasena", { required: true })}
                    error={errors.Contrasena}
                    helperText={
                      errors.Contrasena && <p>El campo nombre es requerido</p>
                    }
                  /> */}

                  <TextField
                    sx={{ marginBottom: "10px" }}
                    name="password"
                    variant="outlined"
                    label="Ingrese su contraseña"
                    {...register("password", { required: true })}
                    error={errors.password}
                    helperText={
                      errors.password && <p>El campo contraseña es requerido</p>
                    }
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      marginRight: "10px",
                      color: "#2AD263",
                      marginBottom: "20px",

                      // textAlign: matchesmd ? "end" : "start",
                    }}
                    onClick={() => setIsPasswordConfirmOpen(true)}
                  >
                    <ErrorOutlineIcon />
                    <Typography>Olvide mi contraseña</Typography>
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "#FECC1D", marginBottom: "30px" }}
                  >
                    Iniciar sesión{" "}
                  </Button>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "1.5rem",
                      marginBottom: "20px",
                      color: "rgb(0,0,0)",
                    }}
                  >
                    {" "}
                    Aun no tienes cuenta?{" "}
                    <span style={{ fontSize: "1.5rem", color: "#FECC1D" }}>
                      <Button
                        sx={{ fontSize: "1.2rem", color: "#FECC1D" }}
                        onClick={() => {
                          setIsDialogRegistroOpen(true);
                          setIsDialogInicioOpen(false);
                        }}
                      >
                        Registrarme
                      </Button>
                    </span>
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem" }}>
                    {" "}
                    © 2021 back9Tickets . Todos los derechos reservados.
                  </Typography>
                </Grid>
              </form>
            </DialogContentText>
          </DialogContent>
        </Grid>
      </Dialog>
    </>
  );
};

export default InicioForm;
