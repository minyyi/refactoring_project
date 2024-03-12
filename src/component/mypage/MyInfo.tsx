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

        <CommonInput
          disabled
          defaultValue={data?.id}
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
      <Box>
        <Typography>닉네임</Typography>
        <CommonInput required defaultValue={data?.nickname} />
      </Box>
      <Box>
        <Typography>잔여 포인트</Typography>
        <CommonInput
          disabled
          defaultValue={data?.point}
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
    </Box>
  );
};
export default MyInfo;
