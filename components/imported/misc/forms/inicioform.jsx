import * as React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";



import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormHelperText from "@mui/material/FormHelperText";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

import ForgotPassword from "./forgotPassword";
import Spinner from "../Spinner";



//servicios
import { userService } from "../../../../src/services";
//routers
import { useRouter } from "next/router";


const InicioForm = (props) => {

  const [isDialogInicioOpen, setIsDialogInicioOpen] = useState(false)
  const [isDialogRegistroOpen, setIsDialogRegistroOpen] = useState(false)
  const [isRegisterConfirmOpen, setIsRegisterConfirmOpen] = useState(false)
  const [isPasswordConfirmOpen, setIsPasswordConfirmOpen] = useState(false)

  //const [isLogged, setIsLogged] = useState(false)



  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false)
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");



  const activateButton = email != null && email.trim().length > 0;


  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  ///DATOS
  const { isOpen, onClose } = props;

  /* const onSubmit = ({ email, password }) => {
    console.log(data)
    const r = data;
    reset()
  }; */

  const onSubmit = async (data) => {

    if (data != undefined) {
      try {
        /* let data = {
          email: email,
          password: password
        } */

        let { status, response } = await userService.login(data);

        if (status === 200) {
          localStorage.setItem("token", response.token);
          localStorage.setItem("user", JSON.stringify(response.user))
          props.setIsLogged(true)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  const CloseInicioDialog = async () => {

    onSubmit();

    props.setIsDialogInicioOpen(false)

  }


  //validacion de usuario sunset

  useEffect(() => {
    async function validate() {
      if (props.token) {
        console.log(props.token)
        try {
          setIsLoading(true);
          const { status, response } = await userServices.validateAccount(props.token);
          setIsLoading(false);
          if (status === 400) {
            setError(true);
            setMessage(response.error.message);
          } else {
            setError(false);
            setMessage(response.message);
          }
          setIsOpen(true);
        } catch (e) {
          setIsLoading(false);
          console.log(e);
        }
      }
    }
    validate();
  }, [props.token]);


  return (
    <>
      <Spinner loading={loading} />
      <ForgotPassword
        isOpen={isPasswordConfirmOpen}
        onClose={() => setIsPasswordConfirmOpen(false)}
      />

      <Dialog open={isOpen} onClose={onClose}>
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: "end", marginRight: "10px" }}>
            {/* <CloseIcon onClick={() => setIsDialogInicioOpen(false)} /> */}
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
                    //name="email"
                    variant="outlined"
                    //value={email}
                    label="Ingrese su correo electronico"
                    {...register("email", {
                      required: { value: true, message: 'Correo invalido' },
                    })}

                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {errors.email && <span> {errors.email.message} </span>}

                  {/*  <Typography sx={{ marginBottom: "10px" }}>
                    Contraseña
                  </Typography> */}
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


                  <Typography sx={{ marginBottom: "10px" }}>
                    Contraseña
                  </Typography>
                  <FormControl sx={{ marginBottom: "20px" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Ingrese contrasena
                    </InputLabel>
                    <OutlinedInput
                      name="password"
                      label="Ingrese su contrasena"
                      variant="outlined"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Campo requerido",
                        }, minLength: { value: 6, message: 'Ingresa la contrasena' }

                      })}
                      error={errors.password}
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            sx={{ color: " #22BDFF" }}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <FormHelperText>
                      {errors.password && (
                        <p style={{ color: "red" }}>
                          {errors.password.message}
                        </p>
                      )}
                    </FormHelperText>
                  </FormControl>


                  {/*  <TextField
                    sx={{ marginBottom: "10px" }}
                    name="password"
                    variant="outlined"
                    label="Ingrese su contraseña"
                    {...register("password", { required: true })}
                    error={errors.password}
                    helperText={
                      errors.password && <p>El campo contraseña es requerido</p>
                    }
                    onChange={(e) => setPassword(e.target.value)}
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
 */}
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "#FECC1D", marginBottom: "30px" }}
                    onClick={() => { CloseInicioDialog() }}
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
