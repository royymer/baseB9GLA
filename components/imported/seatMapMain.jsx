import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import { Container, Typography, Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

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
            <TextField
              select
              label="LEYENDA"
              value={leyenda}
              onChange={handleChangeLeyenda}
              defaultValue="DASDDASD"
              sx={{ maxWidth: "150px", boxShadow: 3 }}
            >
              <MenuItem value="Leyenda1">Leyenda1</MenuItem>
              <MenuItem value="Leyenda2">Leyenda2</MenuItem>
              <MenuItem value="Leyenda3">Leyenda3</MenuItem>
              <MenuItem value="Leyenda4">Leyenda4</MenuItem>
              <MenuItem value="Leyenda5">Leyenda5</MenuItem>
              <MenuItem value="Leyenda6">Leyenda6</MenuItem>
              <MenuItem value="Leyenda7">Leyenda7</MenuItem>
              <MenuItem value="Leyenda8">Leyenda8</MenuItem>
              <MenuItem value="Leyenda9">Leyenda9</MenuItem>
            </TextField>
          </Box>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://png.pngitem.com/pimgs/s/49-498069_talk-about-random-wiki-shy-guy-mario-hd.png"
              style={{ marginBottom: "200px" }}
            />
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
