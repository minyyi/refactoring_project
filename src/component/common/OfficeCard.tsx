import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userid } from '@/lib/recoil/authAtom';
// import { useRecoilState } from 'recoil';
// import { cardList } from '@/lib/recoil/homeDataAtom';

const OfficeCard = ({ clickCard = () => {}, cardData, sx, ...others }: any) => {
  const navigate = useNavigate();
  const [id, setId] = useRecoilState(userid);

  console.log(cardData);
  console.log(id);
  return (
    <>
      <Box
        key={cardData?.id}
        onClick={() => clickCard(cardData)}
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
            src={cardData?.image}
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
            <Typography>{cardData?.officeName}</Typography>
            <Typography>{cardData?.grade}</Typography>
          </Box>
          <Typography>{cardData?.address}</Typography>
          {id ? <Typography>{cardData?.price}</Typography> : null}
        </Box>
      </Box>
    </>
  );
};

export default OfficeCard;
