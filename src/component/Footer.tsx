import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import styled from "@emotion/styled";

export const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "primary.light" }}>
        <Container
          sx={{ textAlign: "center", minHeight: 80, p: 4, color: "white" }}
        >
          <p>푸터임</p>
          <Box
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              textAlign: "center",
            }}
          >
            <p>로고</p>
            <p>전화번호</p>
          </Box>
          <p>카피라이트</p>
        </Container>
      </Box>
    </>
  );
};
