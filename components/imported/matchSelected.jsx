import { formLabelClasses, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useMediaQuery, Box, Container, Button } from "@mui/material";

import { Dialog, DialogContent } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
/* import { LeftComponentFilterLite } from "../../src/components";
 */import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { format } from "date-fns";
import { useRouter } from "next/router";


const locale = require("date-fns/locale");

const MatchSelected = (props) => {
  console.log(props.event.start.date);
  const router = useRouter();

  const Day = format(new Date(props.event.start.date), "EEEE", {
    locale: locale.es,
  });
  const DayMayus = Day.charAt(0).toUpperCase() + Day.slice(1);
  // console.log(DayMayus);

  const mes = format(new Date(props.event.start.date), "LLLL", {
    locale: locale.es,
  });
  const dayNumero = format(new Date(props.event.start.date), "dd", {
    locale: locale.es,
  });

  const horaNumero = format(new Date(props.event.start.date), "h", {
    locale: locale.es,
  });

  const horaAMPM = format(new Date(props.event.start.date), "aaa", {
    locale: locale.es,
  });

  const minutes = format(new Date(props.event.start.date), "mm", {
    locale: locale.es,
  });
  // console.log(
  //   format(new Date(props.event.start.date), "dd", {
  //     locale: locale.es,
  //   })
  // );
  console.log(
    format(new Date(props.event.start.date), "LLLL", {
      locale: locale.es,
    })
  );

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesmd = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);

  // const handleChange = (event) => {
  //   setOpen(event.target.value);
  // };

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
         {/*  <LeftComponentFilterLite /> */}
        </DialogContent>
      </Dialog>
      {matches ? (
        <Grid container sx={{ marginTop: "10px" }}>
          <Grid item xs={matchesmd ? 3 : 12}>
            <img src={props.event.banner} style={{ maxWidth: "150px" }} />
          </Grid>
          <Grid item xs={matchesmd ? 5 : 12}>
            <Typography
              sx={{
                marginBottom: "10px",
                fontSize: "1.125rem",
                fontWeight: "700",
              }}
            >
              Jornada 1
            </Typography>
            <Typography
              sx={{
                marginBottom: "10px",
                fontSize: "1.5rem",
                fontWeight: "800",
              }}
            >
              {props.event.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <CalendarMonthIcon sx={{ color: "#22BDFF" }} />
                <Typography sx={{ marginLeft: "10px" }}>
                  {dayNumero} de {mes}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <AccessTimeIcon sx={{ color: "#22BDFF" }} />
                <Typography sx={{ marginLeft: "10px" }}>
                  {horaNumero}:{minutes} {horaAMPM}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <LocationOnIcon sx={{ color: "#22BDFF" }} />
                <Typography sx={{ marginLeft: "10px" }}>
                  {props.event.address.name}
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* <Grid item xs={12}>
                        <Typography>""</Typography>
                      </Grid> */}
          <Grid
            item
            xs={matchesmd ? 4 : 12}
            // sx={{
            //   textAlign: matchesmd ? "end" : "start",
            // }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: matchesmd ? "end" : "start",
                marginRight: "10px",
              }}
              onClick={() => router.back()}
            >
              <Box
                sx={{
                  width: "44px",
                  height: "36px",
                  border: "1px solid #FECC1D",
                  display: "flex",
                  borderRadius: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                  marginRight: "20px",
                  boxShadow: 2,
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </Box>
              <Typography
                sx={{
                  fontSize: "1.125rem",
                  fontWeight: "700",
                  marginTop: "5px",
                }}
              >
                Volver
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: matchesmd ? "end" : "start",
                marginRight: "10px",
                color: "#2AD263",
                marginTop: "20px",

                // textAlign: matchesmd ? "end" : "start",
              }}
            >
              <ErrorOutlineIcon />
              <Typography>Fecha y hora confirmada</Typography>
            </Box>
          </Grid>
        </Grid>
      ) : (
        ///MOBILE
        <Container sx={{ maxWidth: "400px", margin: "10px" }}>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: "15px",
                }}
              >
                <Typography>Volver</Typography>
                <Button
                  variant="outlined"
                  sx={{ minWidth: "200px" }}
                  onClick={() => setOpen(true)}
                >
                  Filtros
                  <KeyboardArrowDownIcon />
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: matchesmd ? "end" : "start" }}>
              <img src={props.event.banner} style={{ maxWidth: "250px" }} />
            </Grid>
            <Grid item xs={12}>
              <Typography>Jornada 1</Typography>
              <Typography>{props.event.title}</Typography>

              <Typography>Fecha y hora confirmada</Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: matchesmd ? "end" : "start" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Typography>Fecha</Typography>
                <Typography>Hora</Typography>
                <Typography>Lugar</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default MatchSelected;
