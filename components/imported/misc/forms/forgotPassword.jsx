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

import CloseIcon from "@mui/icons-material/Close";

const ForgotPassword = (props) => {
  const { isOpen, onClose } = props;
  const onSubmit = (data) => {
    console.log(data);
  };
  
  const [isDialogInicioOpen, setisDialogInicioOpen] = useState(false)
  const [isDialogRegistroOpen, setIsDialogRegistroOpen] = useState(false)
  const [isRegisterConfirmOpen, setIsRegisterConfirmOpen] = useState(false)
  const [isPasswordConfirmOpen, setIsPasswordConfirmOpen] = useState(false)

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Grid container>
        <Grid item xs={12} sx={{ textAlign: "end", marginRight: "10px" }}>
          <CloseIcon onClick={() => setIsPasswordConfirmOpen(false)} />
        </Grid>
        <Grid item xs={12}>
          <DialogTitle sx={{ textAlign: "center" }}>
            Ingresa tu correo para restaurar tu contrasena
          </DialogTitle>
        </Grid>

        <DialogContent>
          <DialogContentText>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container flexDirection="column">
                <Typography>Correo electronico</Typography>
                <Typography sx={{ marginBottom: "10px" }}>Codigo</Typography>
                <TextField
                  sx={{ marginBottom: "20px" }}
                  name="code"
                  variant="outlined"
                  label="Ingrese su correo electronico"
                  {...register("code", { required: true })}
                  error={errors.code}
                  helperText={errors.code && <p>El campo es requerido</p>}
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "#FECC1D", marginBottom: "30px" }}
                >
                  Enviar{" "}
                </Button>
              </Grid>
            </form>
          </DialogContentText>
        </DialogContent>
      </Grid>
    </Dialog>
  );
};

export default ForgotPassword;
