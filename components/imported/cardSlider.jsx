import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import Divider from "@mui/material/Divider";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { format } from "date-fns";
const locale = require("date-fns/locale");

const CardSlider = (props) => {
  const theme = useTheme();
  
  const data = props.data;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const slider = React.useRef(null);
  return (
    <Box
      sx={{
        margin: "0 auto",
        position: "relative",
        width: "90%",
        "& .slick-slide": {
          margin: "0 20px",
        },
        "& .slick-list": {
          margin: "-20px",
        },
        "& .slick-track": {
          display: "flex",
          transform: {
            md: "translate3d(-1139px, 0px, 0px)",
          },
        },
      }}
    >
      
        <>
          <Box
            onClick={() => slider?.current?.slickPrev()}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              zIndex: "3",
              top: "45%",
              left: "-5%",
              width: "30px",
              height: "41px",
              border: "1px solid #FECC1D",
              borderRadius: "10px",
              backgroundColor: "#F8F7FF",
            }}
          >
            <ArrowBackIosIcon sx={{ fontSize: "15px" }} />
          </Box>
          <Box
            sx={{
              width: "30px",
              height: "41px",
              backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #FECC1D",
              borderRadius: "10px",
              backgroundColor: "#F8F7FF",
              position: "absolute",
              top: "45%",
              left: "102%",
              zIndex: "3",
            }}
            onClick={() => slider?.current?.slickNext()}
          >
            <ArrowForwardIosIcon sx={{ fontSize: "15px" }} />
          </Box>
        </>
      ) 
      <Slider arrows={false} ref={slider} {...settings}>
        {data.map((item) => {
          const Day = format(new Date(item.start.date), "EEEE", {
            locale: locale.es,
          });
          const DayMayus = Day.charAt(0).toUpperCase() + Day.slice(1);
          console.log(DayMayus);

          const mes = format(new Date(item.start.date), "LLLL", {
            locale: locale.es,
          });
          const dayNumero = format(new Date(item.start.date), "dd", {
            locale: locale.es,
          });

          const horaNumero = format(new Date(item.start.date), "h", {
            locale: locale.es,
          });

          const horaAMPM = format(new Date(item.start.date), "aaa", {
            locale: locale.es,
          });

          const minutes = format(new Date(item.start.date), "mm", {
            locale: locale.es,
          });
          return (
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ fontSize: "0.813rem", color: "#727272" }}>
                    {DayMayus}, {dayNumero} de {mes}
                  </Typography>

                  <Typography sx={{ fontSize: "0.813rem", color: "#727272" }}>
                    {horaNumero}:{minutes} {horaAMPM}
                  </Typography>
                </Box>
                <img
                  src={item.banner}
                  style={{ width: "100%", marginBottom: "20px" }}
                />
                <Divider />
                <Link href={`/boletos/${item._id}`}>
                  <a>
                    <Button
                      sx={{ color: "#22BDFF" }}
                      startIcon={<ConfirmationNumberIcon />}
                    >
                      {" "}
                      Comprar boletos
                    </Button>
                  </a>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </Slider>
    </Box>
  );
};

export default CardSlider;
