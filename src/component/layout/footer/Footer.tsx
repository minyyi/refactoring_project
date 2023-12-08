import { Box, Typography, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub"; // import styled from "@emotion/styled";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "black" }}>
        <Container
          sx={{
            minHeight: 80,
            py: 2,
            color: "white",
            display: "flex",
            flexDirection: "column",
            rowGap: 1,
          }}
        >
          {/* 로고, 시간 */}
          <Box sx={{ display: "flex" }}>
            <Typography>OfficeFinder</Typography>
          </Box>
          {/* 전화번호 */}

          <Typography>1234-1234</Typography>
          <Box sx={{ display: "flex", columnGap: 1 }}>
            <Typography>10:00 ~ 17:00 (점심시간 12:00 ~ 13:00)</Typography>
            <Typography>토/일/공휴일 휴무</Typography>
          </Box>

          {/* 계좌/주소 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 2,
            }}
          >
            {/* fo */}
            <Typography>계좌정보:하나은행 309-9101-***</Typography>
            <Typography>주소: 서울시 서초구 방배천로</Typography>
          </Box>
          {/* 개인정보처리/이용약관/가맹점 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 2,
            }}
          >
            <a>개인정보처리방침</a>
            <a>이용약관</a>
            <a>가맹점 고지사항</a>
          </Box>
          {/* 카피라이트 */}
          <Box
            sx={{
              display: "flex",
              fontSize: "large",
              alignItems: "center",
            }}
          >
            <Typography>
              Copyright 2023. OfficeFinder. All right reserved
            </Typography>
          </Box>
          {/* sns링크 */}
          <Box
            sx={{
              display: "flex",
              columnGap: 2,
              fontSize: "large",
            }}
          >
            <GitHubIcon fontSize="large" />
            <YouTubeIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
