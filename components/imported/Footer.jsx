import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/system";
import styles from "../../styles/style.module.css";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const textstyles1 = {
  color: "#fff",
  marginBottom: "15px",
  fontSize: "1.125rem",
};

const textstyles2 = {
  color: "#FECC1D",
  fontSize: "1.25rem",

  marginBottom: "35px",
  fontWeight: "bold",
};

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid container style={{ backgroundColor: "#0D1626", padding: "50px" }}>
      <Grid item xs={12} md={3}>
        <img
          src="../assets/logo1.png"
          alt=""
          style={{ marginBottom: "35px", fontWeight: "bold" }}
        />
        {matches ? (
          <Typography sx={{ ...textstyles1 }}>
            © 2021 back9ticket. Todos los derechos reservados.
          </Typography>
        ) : null}
      </Grid>

      <Grid item xs={12} md={3}>
        <Typography sx={{ ...textstyles2 }}>Back9 Ticket</Typography>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              color: "#FECC1D",
              fontSize: "12px",
              margin: "8px 10px 10px 0",
            }}
          />
          <Typography sx={{ ...textstyles1 }}> Sobre nosotros</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              color: "#FECC1D",
              fontSize: "12px",
              margin: "8px 10px 10px 0",
            }}
          />
          <Typography sx={{ ...textstyles1 }}> Boletos</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              color: "#FECC1D",
              fontSize: "12px",
              margin: "8px 10px 10px 0",
            }}
          />
          <Typography sx={{ ...textstyles1 }}> Tiendas</Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={3}>
        <Typography sx={{ ...textstyles2 }}> Términos y políticas</Typography>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              color: "#FECC1D",
              fontSize: "12px",
              margin: "8px 10px 10px 0",
            }}
          />
          <Typography sx={{ ...textstyles1 }}>
            {" "}
            Términos y condiciones
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              color: "#FECC1D",
              fontSize: "12px",
              margin: "8px 10px 10px 0",
            }}
          />
          <Typography sx={{ ...textstyles1 }}>
            {" "}
            Políticas de privacidad
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={3}>
        <Typography sx={{ ...textstyles2 }}> Únete a nosotros</Typography>
        <Box
          sx={{
            display: "flex",

            ...textstyles1,
          }}
        >
          <FacebookOutlinedIcon sx={{ marginRight: "22px" }} />
          <TwitterIcon sx={{ marginRight: "22px" }} />
          <InstagramIcon sx={{ marginRight: "22px" }} />
          <LinkedInIcon sx={{ marginRight: "22px" }} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        {matches ? null : (
          <Typography sx={{ ...textstyles1 }}>
            © 2021 back9ticket. Todos los derechos reservados.
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
