import CommonButton from '@/component/common/Button';
import CommonInput from '@/component/common/Input';
import { Box, InputAdornment, Link, Typography } from '@mui/material';
import PageContainer from '@/component/common/PageContainer';
import { VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const clickLogin = () => {
    navigate('/home');
  };

  return (
    <PageContainer>
      <Box
        sx={{
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: 300,
          minHeight: 500,
        }}
      >
        <CommonInput id={'outlined-input'} type={'text'} label="Id" />
        <CommonInput
          id="outlined-password-input"
          label="Password"
          type="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOff />
              </InputAdornment>
            ),
          }}
        />
        <CommonButton onClick={clickLogin}>로그인</CommonButton>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ fontSize: 12, mr: 1 }}>
            아직 회원이 아니신가요?
          </Typography>
          <Link href={'#'} sx={{ fontSize: 12, color: 'inherit' }}>
            회원가입하러 가기
          </Link>
        </Box>
      </Box>
    </PageContainer>
  );
};
export default LoginPage;
