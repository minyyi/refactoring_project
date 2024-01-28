import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';
import PageContainer from '@/component/common/PageContainer';
import Title from '@/component/common/Title';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AuthForm } from '@/component/auth/AuthForm';

const Authpage = ({ title }: any) => {
  const navigate = useNavigate();
  const [process, setProcess] = useState('');
  console.log(process);
  const clickSignup = () => {
    navigate('/signup');
  };
  const handleSetProcess = (key: string) => {
    setProcess(() => {
      return key;
    });
  };

  return (
    <PageContainer
      sx={{
        display: 'flex',
        flexGrow: 1,
        columnGap: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={3}
        square={false}
        sx={{
          py: 2,
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        {process ? (
          <AuthForm
            title={title}
            clickBack={handleSetProcess}
            process={process}
          />
        ) : (
          <>
            <Title>{title}</Title>
            <Box
              sx={{
                mb: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                columnGap: 3,
                rowGap: 3,
                flexDirection: { sm: 'row', xs: 'column' },
              }}
            >
              <Box
                onClick={() => handleSetProcess('agency')}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: { sm: '250px', xs: '100%' },
                  minHeight: 300,
                  border: 1,
                  borderRadius: 10,
                  // backgroundImage: 'url(free-icon-rent-2590468.png)',
                  // backgroundSize: 'contain',
                  // backgroundPosition: 'center',
                  // backgroundRepeat: 'no-repeat',
                  cursor: 'pointer',
                }}
              >
                <Typography
                  sx={{
                    position: 'absolute',
                    top: '17%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  임대인
                  <ArrowForwardIosIcon
                    sx={{ fontSize: 12, textAlign: 'center' }}
                  />
                </Typography>
                <img
                  src="/public/free-icon-rent-2590468.png"
                  style={{ width: 150, alignItems: 'center', paddingTop: 40 }}
                />
              </Box>
              <Box
                onClick={() => handleSetProcess('customer')}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: { sm: '250px', xs: '100%' },
                  minHeight: 300,
                  border: 1,
                  borderRadius: 10,
                  // backgroundImage: 'url(urban-20230109104922091058.jpg)',
                  // backgroundSize: 'contain',
                  // backgroundPosition: 'center',
                  // backgroundRepeat: 'no-repeat',
                  cursor: 'pointer',
                }}
              >
                <Typography
                  sx={{
                    position: 'absolute',
                    top: '17%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  일반회원
                  <ArrowForwardIosIcon
                    sx={{ fontSize: 12, textAlign: 'center' }}
                  />
                </Typography>
                <img
                  src="/public/free-icon-building-4257899.png"
                  style={{ width: 150, alignItems: 'center', paddingTop: 40 }}
                />
              </Box>
            </Box>
            {/* {title === '로그인' && ( */}
            <Box
              sx={{
                display: 'flex',
                visibility: title === '회원가입' ? 'hidden' : 'visible',
                justifyContent: 'center',
                mt: 2,
              }}
            >
              <Typography sx={{ fontSize: 14, mr: 1 }}>
                아직 회원이 아니신가요?
              </Typography>
              <Box
                onClick={clickSignup}
                sx={{ fontSize: 14, color: 'inherit', cursor: 'pointer' }}
              >
                회원가입하러 가기
              </Box>
            </Box>
            {/* )} */}
          </>
        )}
        {/* {title === '회원가입' && process === 'agency' && ( */}

        {/* )} */}
        {/* {title === '로그인' && process === 'agency' && (
          <AuthCard
            title={'로그인'}
            clickBack={handleSetProcess}
            process="agency"
          />
        )} */}
        {/* {title === '회원가입' && process === 'customer' && (
          <AuthCard
            title={'회원가입'}
            clickBack={handleSetProcess}
            process="customer"
          />
        )}
        {title === '로그인' && process === 'customer' && (
          <AuthCard
            title={'로그인'}
            clickBack={handleSetProcess}
            process="customer"
          />
        )} */}
      </Paper>
    </PageContainer>
  );
};
export default Authpage;
