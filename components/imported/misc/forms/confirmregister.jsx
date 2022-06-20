import * as React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import FormContext from "../formContext";
import { useContext } from "react";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const ConfirmRegister = (props) => {
  
  const [isDialogInicioOpen, setisDialogInicioOpen] = useState(false)
  const [isDialogRegistroOpen, setIsDialogRegistroOpen] = useState(false)
  const [isRegisterConfirmOpen, setIsRegisterConfirmOpen] = useState(false)
  const [isPasswordConfirmOpen, setIsPasswordConfirmOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isOpen, onClose } = props;
  ///DATOS
  const onSubmit = (data) => {
    console.log(data);
  };
  ///DATOS

  const [code, setCode] = useState("");

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Grid container>
        <Grid item xs={12} sx={{ textAlign: "end", marginRight: "10px" }}>
          <CloseIcon onClick={() => setIsRegisterConfirmOpen(false)} />
        </Grid>
        <Grid item xs={12}>
          <DialogTitle sx={{ textAlign: "center" }}>
            Confirme su correo electrónico
          </DialogTitle>
        </Grid>

        <DialogContent>
          <DialogContentText>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container flexDirection="column">
                <Typography>
                  Lo enviamos a hello@correo.com para confirmar que te
                  pertenece. Si no lo encuentras revisa tu carpeta de correo no
                  deseado.
                </Typography>
                <Typography sx={{ marginBottom: "10px" }}>Codigo</Typography>
                <TextField
                  sx={{ marginBottom: "20px" }}
                  name="code"
                  variant="outlined"
                  label="Ingrese codigo para verificar"
                  {...register("code", { required: true })}
                  error={errors.code}
                  helperText={
                    errors.code && <p>El campo código es requerido</p>
                  }
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "#FECC1D", marginBottom: "30px" }}
                  onClick={() => setIsRegisterConfirmOpen(false)}
                >
                  Continuar{" "}
                </Button>
              </Grid>
            </form>
          </DialogContentText>
        </DialogContent>
      </Grid>
    </Dialog>
  );
};

export default ConfirmRegister;
