import { useState } from "react";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import GridViewIcon from "@mui/icons-material/GridView";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "next/link";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Paper } from "@mui/material";
import { Divider } from "@mui/material";
import { format } from "date-fns";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
const locale = require("date-fns/locale");

const DataDisplay = (props) => {
  const theme = useTheme();
  const matchesmd = useMediaQuery(theme.breakpoints.up("md"));

  const [gridbackgroundColorButton, setgridBackgroundColorButton] =
    useState(false);
  const [rowbackgroundColorButton, setrowBackgroundColorButton] =
    useState(false);
  const [cargarMas, setCargarMas] = useState(3);
  const [partidos, setPartidos] = useState("");

  const [datadisplaySize, setdatadisplaySize] = useState(false);

  // const testingclick = () => {
  //   alert("it worked");
  // };

  // const handleClickViewButtons = () => {
  //   setBackgroundColorButton("blue");
  // };

  const handleChange = (event) => {
    setPartidos(event.target.value);
  };

  const juegos = props.data.slice(0, cargarMas);
  // console.log(getDate);

  return (
    <Container sx={{ marginTop: "50px" }}>
      <Typography variant="h5" sx={{ marginBottom: "50px", fontWeight: 700 }}>
        {" "}
        Todos los partidos
      </Typography>

      <Box
        sx={{
          margin: "20px 0",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "300px", height: "48px", marginBottom: "50px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Seleccione sus partidos
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={partidos}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {matchesmd ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <SplitscreenIcon
              sx={{
                margin: "20px",
                backgroundColor: rowbackgroundColorButton
                  ? "#22BDFF"
                  : "#EEEEEE",
                fontSize: "30px",
                padding: "5px",
                borderRadius: "5px",
                color: rowbackgroundColorButton ? "white" : "black",
              }}
              onClick={() => {
                setrowBackgroundColorButton(!rowbackgroundColorButton);
                setgridBackgroundColorButton(
                  rowbackgroundColorButton &&
                    setgridBackgroundColorButton(false)
                );
                setdatadisplaySize(!datadisplaySize);
              }}
            />

            <GridViewIcon
              sx={{
                margin: "20px",
                backgroundColor: gridbackgroundColorButton
                  ? "#22BDFF"
                  : "#EEEEEE",
                fontSize: "30px",
                padding: "5px",
                borderRadius: "5px",
                color: gridbackgroundColorButton ? "white" : "black",
              }}
              onClick={() => {
                setgridBackgroundColorButton(!gridbackgroundColorButton);
                setrowBackgroundColorButton(
                  gridbackgroundColorButton &&
                    setrowBackgroundColorButton(false)
                );

                setdatadisplaySize(!datadisplaySize);
              }}
            />
          </Box>
        ) : null}
      </Box>
      <Divider
        sx={{
          marginBottom: {
            xs: "50px",
            md: "50px",
          },
        }}
      />
      <Grid container spacing={1}>
        {juegos.map((juego) => {
          const Day = format(new Date(juego.start.date), "EEEE", {
            locale: locale.es,
          });
          const DayMayus = Day.charAt(0).toUpperCase() + Day.slice(1);

          const mes = format(new Date(juego.start.date), "LLLL", {
            locale: locale.es,
          });
          const dayNumero = format(new Date(juego.start.date), "dd", {
            locale: locale.es,
          });

          const horaNumero = format(new Date(juego.start.date), "h", {
            locale: locale.es,
          });

          const horaAMPM = format(new Date(juego.start.date), "aaa", {
            locale: locale.es,
          });

          const minutes = format(new Date(juego.start.date), "mm", {
            locale: locale.es,
          });
          // console.log(getDate(parseISO(juego.start.date)));
          // console.log(getHours(parseISO(juego.start.date)));
          // console.log(getMonth(parseISO(juego.start.date)));
          return (
            <Grid item xs={matchesmd ? (datadisplaySize ? 6 : 12) : 12}>
              <Paper elevation={1}>
                <Grid container sx={{ marginBottom: "75px", padding: "20px" }}>
                  <Grid
                    item
                    xs={matchesmd ? (datadisplaySize ? 12 : 3) : 12}
                    sx={{
                      marginBottom: "30px",
                      textAlign: matchesmd
                        ? datadisplaySize
                          ? "center"
                          : "start"
                        : "center",
                    }}
                  >
                    {/* <Typography>{juego._id}</Typography> */}
                    <Typography sx={{ fontSize: "1.5rem", fontWeight: "800" }}>
                      {dayNumero} {mes}
                    </Typography>
                    <Typography>
                      {DayMayus}, {horaNumero}:{minutes}
                      {horaAMPM}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: matchesmd ? "start" : "center",
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
                  <Grid
                    item
                    xs={matchesmd ? (datadisplaySize ? 12 : 3) : 12}
                    sx={{
                      marginBottom: "30px",
                      textAlign: matchesmd
                        ? datadisplaySize
                          ? "center"
                          : "start"
                        : "center",
                    }}
                  >
                    <Typography>Jornada 1</Typography>
                    <Typography
                      sx={{ fontSize: "1.125rem", fontWeight: "800" }}
                    >
                      {juego.title}
                    </Typography>
                    <Typography>{juego.address.name}</Typography>
                    <Typography>quedan pocas entradas</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={matchesmd ? (datadisplaySize ? 12 : 3) : 12}
                    sx={{
                      marginBottom: "30px",
                      textAlign: matchesmd
                        ? datadisplaySize
                          ? "center"
                          : "end"
                        : "center",
                    }}
                  >
                    <img src={juego.banner} style={{ maxWidth: "250px" }} />
                  </Grid>
                  <Grid
                    item
                    xs={matchesmd ? (datadisplaySize ? 12 : 3) : 12}
                    sx={{ marginBottom: "30px" }}
                  >
                    <Link href={`/boletos/${juego._id}`}>
                      <Box
                        sx={{
                          textAlign: matchesmd
                            ? datadisplaySize
                              ? "center"
                              : "end"
                            : "center",
                        }}
                      >
                        <a>
                          <Button
                            variant="contained"
                            disableRipple
                            size="small"
                            sx={{
                              backgroundColor: "#FECC1D",
                              "&& .hover": {
                                backgroundColor: "none",
                              },
                            }}
                          >
                            {" "}
                            Comprar boletos{" "}
                          </Button>
                        </a>
                      </Box>
                    </Link>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      >
        <Button
          variant="outlined"
          disableRipple
          sx={{
            color: "#0D1626",
            borderColor: "#0D1626",
            "&:hover": {
              background: "none",
            },
            boxShadow: 3,
          }}
          onClick={() => setCargarMas(cargarMas + 3)}
        >
          {" "}
          Cargar mas
        </Button>
      </div>
    </Container>
  );
};

export default DataDisplay;
