import { Box, Container, Typography } from '@mui/material';
import CommonInput from '../common/CommonInput';

const MyInfo = () => {
  const data = {
    id: 'idididid',
    nickname: '닉네임',
    point: 5000,
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 2,
        justifyContent: 'center',
      }}
    >
      <Box>
        <Typography>아이디</Typography>
        <Typography>{data?.id}</Typography>
      </Box>
      <Box>
        <Typography>닉네임</Typography>
        <CommonInput>{data?.nickname}</CommonInput>
      </Box>
      <Box>
        <Typography>잔여 포인트</Typography>
        <CommonInput>{data?.point}</CommonInput>
      </Box>
    </Box>
  );
};
export default MyInfo;
