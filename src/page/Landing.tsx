import { Box, Typography, useMediaQuery } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import CommonButton from '@/component/common/CommonButton';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const LandingPage = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  console.log(matches);
  const text = [
    {
      icon: <SearchIcon sx={{ color: 'white' }} />,
      mobileTitle: `공유 오피스를 다양한 옵션으로 검색하고`,
      webTitle: `공유 오피스를 다양한 옵션으로 검색하고`,
    },
    {
      icon: <CommentIcon sx={{ color: 'white' }} />,
      mobileTitle: `채팅으로 바로 문의하고`,
      webTitle: `채팅으로 바로 문의하고`,
    },
    {
      icon: <ReceiptLongIcon sx={{ color: 'white' }} />,
      mobileTitle: `간편하게 예약하세요.`,
      webTitle: `간편하게 예약하세요.`,
    },
  ];

  const clicktoLogin = () => {
    navigate('/login');
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          backgroundImage: 'url(basicImage.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            width: '100%',
            backgroundColor: 'black',
            opacity: 0.6,
            alignItems: 'center',
            justifyContent: 'center',

            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              rowGap: 3,
              px: 2,
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant={matches ? 'h5' : 'h4'}
              sx={{ color: 'white', fontWeight: 700, whiteSpace: 'pre-line' }}
            >
              {matches
                ? `로그인해서 모든 서비스를 \n 시작해보세요.`
                : '로그인해서 모든 서비스를 시작해보세요.'}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: 2,
              }}
            >
              {text.map((text) => {
                return (
                  <Box
                    sx={{
                      display: 'flex',
                      columnGap: { sm: 2, xs: 0.5 },
                      alignItems: 'center',
                    }}
                  >
                    {text.icon}
                    <Typography
                      sx={{
                        fontWeight: 600,
                        whiteSpace: 'pre-line',
                        fontSize: { sm: 18, xs: 16 },
                        color: 'white',
                      }}
                    >
                      {text.mobileTitle}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CommonButton
                onClick={clicktoLogin}
                sx={{ width: 130, height: 50, fontSize: 16 }}
              >
                바로 시작하기
              </CommonButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LandingPage;
