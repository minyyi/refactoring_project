import CommonButton from '@/component/common/Button';
import CommonInput from '@/component/common/Input';
import { Box, InputAdornment } from '@mui/material';
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
          //   mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          width: 300,
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
      </Box>
      <CommonButton onClick={clickLogin} variant={'contained'}>
        로그인
      </CommonButton>
    </PageContainer>
  );
};
export default LoginPage;
