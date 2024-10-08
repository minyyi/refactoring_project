import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';
import PageContainer from '@/component/common/PageContainer';
import CommonTitle from '@/component/common/CommonTitle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AuthForm } from '@/component/auth/AuthForm';
// import { useRecoilState } from 'recoil';
// import { userType } from '@/lib/recoil/authAtom';

const Authpage = ({ title }: any) => {
  const navigate = useNavigate();
  const [role, setRole] = useState('');
  // const [role, setrole] = useRecoilState(userType);
  // console.log(role);
  const clickSignup = () => {
    navigate('/signup');
  };
  const handleSetRole = (key: string) => {
    setRole(() => {
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
        {role ? (
          <AuthForm role={role} title={title} clickBack={handleSetRole} />
        ) : (
          <>
            <CommonTitle sx={{ margin: 'auto' }}>{title}</CommonTitle>
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
                onClick={() => handleSetRole('agency')}
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
                  src="/free-icon-rent-2590468.png"
                  style={{ width: 150, alignItems: 'center', paddingTop: 40 }}
                />
              </Box>
              <Box
                onClick={() => handleSetRole('customer')}
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
                  src="/free-icon-building-4257899.png"
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
      </Paper>
    </PageContainer>
  );
};
export default Authpage;
