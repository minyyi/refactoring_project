import { Box, Typography } from '@mui/material';

const Noti = () => {
  const data = {
    title: '예약완료',
    createdAt: '2024.03.15',
    content: '예약이 완료되었습니다.',
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 1,
        mb: 2,
        borderBottom: 0.5,
        borderColor: 'info.main',
      }}
    >
      <Box sx={{ display: 'flex', columnGap: 6 }}>
        <Typography sx={{ fontWeight: '600', fontSize: 14 }}>
          {data?.title}
        </Typography>
        <Typography sx={{ fontSize: 12 }}>{data?.createdAt}</Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: 14 }}>{data?.content}</Typography>
      </Box>
    </Box>
  );
};
export default Noti;
