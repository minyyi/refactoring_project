import { Box, IconButton, Typography } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import CommonButton from '@/component/common/Button';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
const LandingPage = () => {
  const navigate = useNavigate();

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
          // opacity: 0.7,
          backgroundPosition: 'center',
          justifyContent: 'center',
          alignItems: 'center',

          // backgroundColor: 'yellow',
          // minWidth: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            width: '100%',
            backgroundColor: 'black',
            opacity: 0.7,
            alignItems: 'center',
            justifyContent: 'center',

            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              rowGap: 3,

              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
              로그인해서 모든 서비스를 시작해보세요.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: 2,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  columnGap: 2,
                  alignItems: 'center',
                }}
              >
                <SearchIcon sx={{ color: 'white' }} />
                <Typography
                  sx={{ fontWeight: 600, fontSize: 18, color: 'white' }}
                >
                  공유 오피스를 다양한 옵션으로 검색하고
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  columnGap: 2,
                  alignItems: 'center',
                }}
              >
                <CommentIcon sx={{ color: 'white' }} />
                <Typography
                  sx={{ fontWeight: 600, fontSize: 18, color: 'white' }}
                >
                  채팅으로 바로 문의하고
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  columnGap: 2,
                  alignItems: 'center',
                }}
              >
                <ReceiptLongIcon sx={{ color: 'white' }} />
                <Typography
                  sx={{ fontWeight: 600, fontSize: 18, color: 'white' }}
                >
                  간편하게 예약하세요.
                </Typography>
              </Box>
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
