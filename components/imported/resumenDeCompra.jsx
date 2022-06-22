import { Typography, Container, Grid, Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const ResumenDeCompra = ({ matchid, makeReservation }) => {
  const [bookingFees, setBookingFees] = useState("15$");
  const [total, setTotal] = useState("0$");
  return (
    <>
      <Container>
        <Typography
          sx={{
            fontSize: "1.5rem",
            color: "#2E2E2E",
            fontWeight: "700",
            marginTop: "100px",
          }}
        >
          Resumen de compra
        </Typography>
        <Grid container>
          <Grid item xs={12}>
            <Grid item xs={12} sx={{ textAlign: "end", fontSize: "1.125rem" }}>
              <Typography sx={{ padding: "25px" }}>
                Booking fees {bookingFees}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ backgroundColor: "#F8F7FF", textAlign: "end" }}
            >
              <Typography sx={{ padding: "25px" }}>Total {total}</Typography>
            </Grid>
          </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                onClick={makeReservation}
                sx={{
                  backgroundColor: "#FECC1D",
                  fontSize: "1.125rem",
                  marginTop: "50px",
                  marginBottom:'20px'
                }}
              >
                Comprar
              </Button>
            </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ResumenDeCompra;
