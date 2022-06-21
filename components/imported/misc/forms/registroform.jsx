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
import { TextField, touchRippleClasses } from "@mui/material";
import ConfirmRegister from "./confirmregister";
import ForgotPassword from "./forgotPassword";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { userService } from "../../../../src/services";

const RegisterForm = (props) => {
  const { onClose, isOpen } = props;


  const [isDialogInicioOpen, setIsDialogInicioOpen] = useState(false)
  const [isDialogRegistroOpen, setIsDialogRegistroOpen] = useState(false)
  const [isRegisterConfirmOpen, setIsRegisterConfirmOpen] = useState(false)
  const [isPasswordConfirmOpen, setIsPasswordConfirmOpen] = useState(false)


  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  ///start

  // const [valuesNew, setValuesNew] = React.useState({
  //   amount: "",
  //   password: "",
  //   weight: "",
  //   weightRange: "",
  //   showPassword: false,
  // });
  // const handleChangeNew = (prop) => (event) => {
  //   setValuesNew({ ...valuesNew, [prop]: event.target.value });
  // };

  // const handleClickShowPasswordNew = () => {
  //   setValuesNew({
  //     ...valuesNew,
  //     showPassword: !valuesNew.showPassword,
  //   });
  // };

  // const handleMouseDownPasswordNew = (event) => {
  //   event.preventDefault();
  // };

  // ///end
  const handleChange = (prop) => (event) => {
    // const { isOpen, onClose } = prop;
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const r = data;
    reset();
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [document, setDocument] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [password, setPassword] = useState("");

  const registrar = async () =>{
    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: password,
      document: document,
      pin: pin
    }
    let {status, response} = await userService.addUser(data);
    if(status === 200){
      alert("El usuario ha sido registrado");
    }else{
      console.log(response)
    }
  }

  return (
    <>
      {/* ///REGISTER DIALOG */}
      <ConfirmRegister
        isOpen={isRegisterConfirmOpen}
        onClose={() => setIsRegisterConfirmOpen(false)}
      />
      <ForgotPassword
        isOpen={isPasswordConfirmOpen}
        onClose={() => setIsPasswordConfirmOpen(false)}
      />

      <Dialog open={isOpen} onClose={onClose}>
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: "end", marginRight: "10px" }}>
            <CloseIcon onClick={() => setIsDialogRegistroOpen(false)} />
          </Grid>
          <Grid item xs={12}>
            <DialogTitle sx={{ textAlign: "center" }}>Registro</DialogTitle>
          </Grid>

          <DialogContent>
            <DialogContentText>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container flexDirection="column">
                  {/* <TextField
                    sx={{ marginBottom: "20px" }}
                    name="firstName"
                    placeholder="Ingrese su nombre y apellido"
                    variant="outlined"
                    inputProps={{
                      ...register("firstName", { required: true }),
                    }}
                    error={errors.firstName}
                    helperText={
                      errors.firstName && <p>El campo nombre es requerido</p>
                    }
                    value={nombreApellido}
                    onChange={(e) => setNombreApellido(e.target.value)}
                  /> */}
                  <Typography sx={{ marginBottom: "10px" }}>Nombre</Typography>
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Typography sx={{ marginBottom: "10px" }}>
                    Apellido
                  </Typography>
                  <TextField
                    sx={{ marginBottom: "20px" }}
                    name="lastName"
                    label="Ingrese  apellido"
                    variant="outlined"
                    inputProps={{
                      ...register("lastName", { required: true }),
                    }}
                    error={errors.lastName}
                    helperText={
                      errors.lastName && <p>El campo nombre es requerido</p>
                    }
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {/* ///CONTRA LARGA */}

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
                        },
                        minLength: {
                          value: 8,
                          message: "Contrasena muy corta",
                        },
                      })}
                      error={errors.password}
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
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
                  {/* <Typography sx={{ marginBottom: "10px" }}>
                    Confirmar contrasena
                  </Typography>
                  <FormControl sx={{ marginBottom: "20px" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirmar contrasena
                    </InputLabel>
                    <OutlinedInput
                      name="passwordNew"
                      label="Ingrese su contrasena"
                      variant="outlined"
                      {...register("passwordNew", { required: true })}
                      error={errors.passwordNew}
                      id="outlined-adornment-password"
                      type={valuesNew.showPassword ? "text" : "password"}
                      value={valuesNew.password}
                      onChange={handleChangeNew("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            sx={{ color: " #22BDFF" }}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordNew}
                            onMouseDown={handleMouseDownPasswordNew}
                            edge="end"
                          >
                            {valuesNew.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <FormHelperText>
                      {errors.passwordNew && (
                        <p style={{ color: "red" }}>
                          El campo nombre es requerido
                        </p>
                      )}
                    </FormHelperText>
                  </FormControl> */}
                  {/* <TextField
                    sx={{ marginBottom: "20px" }}
                    name="Contrasena"
                    variant="outlined"
                    label="Ingrese su contraseña"
                    {...register("Contrasena", { required: true })}
                    error={errors.Contrasena}
                    helperText={
                      errors.Contrasena && (
                        <p>El campo contraseña es requerido</p>
                      )
                    }
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  /> */}
                  <Typography sx={{ marginBottom: "10px" }}>
                    Documento
                  </Typography>
                  <TextField
                    sx={{ marginBottom: "20px" }}
                    name="document"
                    variant="outlined"
                    label="Ingrese su cedula"
                    {...register("document", {
                      required: {
                        value: true,
                        message: "Campo requerido",
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
                    value={document}
                    onChange={(e) => setDocument(e.target.value)}
                  />
                  <Typography sx={{ marginBottom: "10px" }}>Pin</Typography>
                  <TextField
                    sx={{ marginBottom: "20px" }}
                    name="pin"
                    label="Ingrese pin"
                    variant="outlined"
                    inputProps={{
                      ...register("pin", { required: true }),
                    }}
                    error={errors.firstName}
                    helperText={
                      errors.firstName && <p>El campo pin es requerido</p>
                    }
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                  />
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
                  {/* <Typography sx={{ marginBottom: "10px" }}>
                    Repetir contrasena
                  </Typography>
                  <FormControl sx={{ marginBottom: "20px" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      name="repetirContrasena"
                      placeholder="Repita su contrasena"
                      variant="outlined"
                      {...register("Contrasena", { required: true })}
                      error={errors.Contrasena}
                      helperText={
                        errors.Contrasena && <p>El campo nombre es requerido</p>
                      }
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
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
                      label="Password"
                    />
                  </FormControl> */}
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "#FECC1D", marginBottom: "30px" }}
                    onClick={() => registrar()}
                  >
                    Registrarse{" "}
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
                    Tienes cuenta?{" "}
                    <span
                      style={{ fontSize: "1.5rem", color: "#FECC1D" }}
                      onClick={() => setIsDialogRegistroOpen(false)}
                    >
                      <Button
                        sx={{ fontSize: "1.2rem", color: "#FECC1D" }}
                        onClick={() => {
                          setIsDialogInicioOpen(true);
                          setIsDialogRegistroOpen(false);
                        }}
                      >
                        Iniciar sesion
                      </Button>
                    </span>
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem" }}>
                    {" "}
                    © 2021 back9Tickets . Todos los derechos reservados.
                  </Typography>
                  {/* <Button
                    variant="contained"
                    sx={{ backgroundColor: "#FECC1D", marginBottom: "30px" }}
                    onClick={() => {
                      setIsRegisterConfirmOpen(true);
                    }}
                  >
                    button confirmregister
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#FECC1D", marginBottom: "30px" }}
                    onClick={() => {
                      setIsPasswordConfirmOpen(true);
                    }}
                  >
                    forgotPassword
                  </Button> */}
                </Grid>
              </form>
            </DialogContentText>
          </DialogContent>
        </Grid>
      </Dialog>
    </>
  );
};

export default RegisterForm;
