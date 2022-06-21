import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import { Container, Typography, Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
import SeatMap  from "../SeatMap/SeatMap";

const SeatMapMain = () => {
  const [leyenda, setLeyenda] = useState("true");
  const handleChangeLeyenda = (event) => {
    setLeyenda(event.target.value);
  };
  return (
    <>
      <Container sx={{ backgroundColor: "#F8F7FF", marginTop: "100px" }}>
        <Typography
          sx={{ color: "#2E2E2E", fontWeight: "600", fontSize: "1.5rem" }}
        >
          Selecciona tu zona
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              alignSelf: "flex-end",
              marginBottom: "100px",
              "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                {
                  width: "150px",
                },
            }}
          >
          </Box>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SeatMap />
          </Container>
          <Box>
            <Box
              sx={{
                width: "49px",
                height: "48px",
                backgroundColor: "#FFFFFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "15px",
                marginBottom: "15px",
              }}
            >
              <ZoomInIcon sx={{ color: "#22BDFF" }} />
            </Box>
            <Box
              sx={{
                width: "49px",
                height: "48px",
                backgroundColor: "#FFFFFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "15px",
                marginBottom: "15px",
              }}
            >
              <ZoomOutIcon sx={{ color: "#22BDFF" }} />
            </Box>
            <Box
              sx={{
                width: "49px",
                height: "48px",
                backgroundColor: "#FFFFFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "15px",
                marginBottom: "15px",
              }}
            >
              <SettingsBackupRestoreIcon sx={{ color: "#22BDFF" }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SeatMapMain;
