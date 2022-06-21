import * as React from "react";
import { useForm } from "react-hook-form";

import FormContext from "./misc/formContext";
import { useContext } from "react";


import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { RegisterForm, InicioForm } from "./misc/forms";


import CloseIcon from "@mui/icons-material/Close";

const mainBoxStyles = {
  backgroundColor: "#0D1626",
};

const headerStyleTypo = {
  marginRight: "10px",
};
const buttonStyles = {
  margin: "10px",
};

const fontStyles = {
  color: "#fff",
  marginRight: "10px",
  "&:hover": {
    color: "#FECC1D",
  },
};

const imageIcon = {
  height: "100%",
};

const MenuIconNew = () => {
  return <img src="../assets/fixedIcon.svg" />;
};

export default function Header() {
  
  const [isDialogInicioOpen, setIsDialogInicioOpen] = useState(false)
  const [isDialogRegistroOpen, setIsDialogRegistroOpen] = useState(false)
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* ///REGISTER DIALOG */}
      <RegisterForm
        isOpen={isDialogRegistroOpen}
        onClose={() => setIsDialogRegistroOpen(false)}
      />
      <InicioForm
        isOpen={isDialogInicioOpen}
        onClose={() => setIsDialogRegistroOpen(false)}
      />

      <AppBar
        position="static"
        sx={{
          backgroundColor: "#0D1626",
          padding: "20px 0px",
        }}
      >
        <Toolbar>
          <Link href={'/home'} >
          <Box sx={{ flexGrow: 1 }}>
            <img src="/assets/logo1.png" style={{cursor:'pointer'}} />
          </Box>
          </Link>
          {matches ? (
            <>
             

              <Box sx={{ ...buttonStyles }}>
                <Button
                  color="inherit"
                  variant="outlined"
                  sx={{ color: "#FECC1D", marginRight: "10px" }}
                  onClick={() => setIsDialogRegistroOpen(true)}
                >
                  Registrarme
                </Button>
                <Button
                  variant="contained"
                  style={{ marginRight: "10px", backgroundColor: "#FECC1D" }}
                  onClick={() => setIsDialogInicioOpen(true)}
                >
                  Iniciar sesión
                </Button>
              </Box>
            </>
          ) : (
            <>
              {/* //////////////MOBILE/////////////// */}

              <div>
                <Drawer
                  sx={{
                    "& .css-1nvnyqx-MuiPaper-root-MuiDrawer-paper": {
                      top: { xs: "90px" },
                      backgroundColor: "rgb(13, 22, 38,0.8)",
                    },
                    "& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
                      backgroundColor: "transparent",
                    },
                  }}
                  anchor="top"
                  open={isDrawerOpen}
                  onClose={() => setIsDrawerOpen(false)}
                >
                  <Box sx={{ mainBoxStyles }}>
                    

                    
                    
                    <Button
                      style={{
                        margin: "10px",
                        color: "#FECC1D",
                        borderColor: "#FECC1D",
                      }}
                      variant="outlined"
                      onClick={() => {
                        setIsDrawerOpen(false);
                        setIsDialogRegistroOpen(true);
                      }}
                    >
                      Registrarme
                    </Button>
                    <Button
                      color="inherit"
                      variant="contained"
                      style={{ margin: "10px", backgroundColor: "#FECC1D" }}
                    >
                      Iniciar sesión
                    </Button>
                  </Box>
                </Drawer>
              </div>
              {isDrawerOpen ? (
                <CloseIcon
                  onClick={() => {
                    setIsDrawerOpen(false);
                  }}
                />
              ) : (
                <div
                  onClick={() => {
                    setIsDrawerOpen(true);
                  }}
                >
                  <MenuIconNew />
                </div>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
