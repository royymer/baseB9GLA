import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

const LayoutBanner = () => {
  const theme = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slider = React.useRef(null);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ objectFit: "cover", position: "relative" }}>
        <Box
          sx={{
            width: "42px",
            height: "42px",
            // border: "1px solid #FECC1D",
            borderRadius: "10px",
            backgroundColor: "rgba(248, 247, 255,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            position: "absolute",
            zIndex: "2",
            top: "70%",
            left: {
              xs: "75%",
              sm: "80%",
              md: "80%",
              lg: "85%",
            },
          }}
          onClick={() => slider?.current?.slickPrev()}
        >
          <ArrowBackIosIcon sx={{ fontSize: "15px" }} />
        </Box>
        <Box
          sx={{
            width: "42px",
            height: "42px",
            // border: "1px solid #FECC1D",
            borderRadius: "10px",
            backgroundColor: "rgba(248, 247, 255,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "70%",
            left: "90%",
            zIndex: "2",
          }}
          onClick={() => slider?.current?.slickNext()}
        >
          <ArrowForwardIosIcon
            sx={{
              fontSize: "15px",
            }}
          />
        </Box>

        <Slider arrows={false} ref={slider} {...settings}>
          <div>
            <img
              src="../assets/BannerGladiadores.jpg"
              style={{ height: "40vh", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="../assets/mainimage.png"
              style={{ height: "40vh", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="../assets/WorkGladiadores.jpg"
              style={{ height: "40vh", width: "100%", objectFit: "cover" }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LayoutBanner;
