import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const OfficeCard = ({ list, sx, ...others }: any) => {
  const navigate = useNavigate();

  const clickCard = (id: any) => {
    navigate(`/reservation/${id}`);
  };
  console.log(list);
  return (
    <>
      <Box
        key={list?.id}
        onClick={() => clickCard(list?.id)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          rowGap: 1,

          width: { lg: 260, md: 270, sm: 260, xs: '100%' },
          height: 250,
          cursor: 'pointer',
          // backgroundColor: 'gray',
        }}
      >
        <Box sx={{ height: 160, overflow: 'hidden' }}>
          <img
            src={list?.image}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: 5,
            }}
          />
        </Box>

        <Box sx={{}}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>{list?.officeName}</Typography>
            <Typography>{list?.grade}</Typography>
          </Box>
          <Typography>{list?.address}</Typography>
          <Typography>{list?.price}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default OfficeCard;
