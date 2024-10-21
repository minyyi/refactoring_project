import { Box, Typography, Container } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import InstagramIcon from '@mui/icons-material/Instagram';
import { useLocation, useNavigate } from 'react-router-dom';
import { pathCase } from '@/utils/config';
import { lazy, Suspense } from 'react';

const GitHubIcon = lazy(() => import('@mui/icons-material/GitHub'));
const YouTubeIcon = lazy(() => import('@mui/icons-material/YouTube'));
const InstagramIcon = lazy(() => import('@mui/icons-material/Instagram'));

const Footer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const clickLogo = () => {
    navigate('/home');
  };

  if (pathCase({ pathname })) return null;

  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? '#fff' : '#121212',
          boxShadow:
            '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        }}
      >
        <Container
          sx={{
            minHeight: 80,
            py: 2,
            display: 'flex',
            flexDirection: 'column',
            rowGap: 1,
          }}
        >
          {/* 로고, 시간 */}
          <Box onClick={clickLogo} sx={{ display: 'flex', cursor: 'pointer' }}>
            <Typography>OfficeFinder</Typography>
          </Box>
          {/* 전화번호 */}

          <Typography sx={{ fontSize: 20 }}>1234-1234</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { sm: 'row', xs: 'column' },
              columnGap: 1,
              rowGap: 1,
            }}
          >
            <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
              10:00 ~ 17:00 (점심시간 12:00 ~ 13:00)
            </Typography>
            <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
              토/일/공휴일 휴무
            </Typography>
          </Box>

          {/* 계좌/주소 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { sm: 'row', xs: 'column' },
              columnGap: 1,
              rowGap: 1,
            }}
          >
            <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
              계좌정보:하나은행 309-9101-***
            </Typography>
            <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
              주소: 서울시 서초구 방배천로
            </Typography>
          </Box>
          {/* 개인정보처리/이용약관/가맹점 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { sm: 'row', xs: 'column' },
              columnGap: 1,
              rowGap: 1,
              textDecoration: 'none',
            }}
          >
            <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
              개인정보처리방침
            </Typography>
            <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
              이용약관
            </Typography>
            <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
              가맹점 고지사항
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              fontSize: 'large',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontSize: { md: 14, xs: 12 } }}>
              Copyright 2023. OfficeFinder. All right reserved
            </Typography>
          </Box>
          {/* sns링크 */}
          <Box
            sx={{
              display: 'flex',
              columnGap: 2,
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <GitHubIcon fontSize="medium" />
              <YouTubeIcon fontSize="medium" />
              <InstagramIcon fontSize="medium" />
            </Suspense>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
