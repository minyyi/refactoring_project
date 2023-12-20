import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const CarouselComponent = () => {
  const carouselImg = [
    {
      id: 1,
      src: "img1.avif",
    },
    {
      id: 2,
      src: "img2.avif",
    },
    {
      id: 3,
      src: "img3.avif",
    },
  ];

  return (
    <>
      <Carousel
        sx={
          {
            // display: { sm: "flex", md: "flex" },
            // justifyContent: "center",
            // flexWrap: "wrap",
          }
        }
      >
        {carouselImg.map((item) => (
          <Paper key={item.id}>
            <img src={item.src} alt="이미지" />
          </Paper>
        ))}
      </Carousel>
    </>
  );
};
export default CarouselComponent;
