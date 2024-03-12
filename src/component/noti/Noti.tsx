import { Box, Typography } from '@mui/material';

const Noti = () => {
  const data = {
    title: '기간 만료 안내',
    createdAt: '2024.03.15',
    content: `
    이용중이신 오피스의 계약 만료일이 3일 남았습니다. 
    3일 후에는 이용이 불가하니 계약 연장을 원하시면 기간 내에 추가 예약을 해주시길 바랍니다. 
    계약 기간 후 더 이상 이용을 원하지 않으시면 다음 사람을 위해 마무리 정리를 깨끗하게 해주시기를 부탁드립니다.
    `,
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 4,
        padding: 3,
        borderBottom: 0.5,
        borderColor: 'success.main',
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
