import { Box, Typography, FormControl, MenuItem } from '@mui/material';
import CommonInputLabel from '../common/CommonInputLabel';
import CommonSelect from '../common/CommonSelect';
import { month, people } from '@/utils/config';

const SelectforReservation = ({ handleDate, bookData }: any) => {
  return (
    <Box
      sx={{
        //   flexGrow: 1,
        width: 350,
        //   width: { md: '50%', sm: '100%' },

        display: 'flex',
        flexDirection: 'column',
        //   alignItems: 'center',
      }}
    >
      <Typography sx={{ mb: 1 }}>이용 기간을 선택해주세요.</Typography>
      <FormControl
        sx={{
          display: 'flex',
          width: '100%',
          // { md: 200, sm: 100, xs: '100%' },
          mb: 5,
        }}
        // bookData={bookData?.endDate}
      >
        <CommonInputLabel>1~11개월까지 선택 가능</CommonInputLabel>
        <CommonSelect
          label={'1~11개월까지 선택 가능'}
          onChange={handleDate}
          name={'endDate'}
          value={bookData?.endDate}
        >
          {month.map((month: any, idx: any) => (
            <MenuItem
              key={idx}
              value={month?.value}
              // bookData={bookData?.endDate}
            >
              {month?.term}
            </MenuItem>
          ))}
        </CommonSelect>
      </FormControl>
      <Typography sx={{ mb: 1 }}>사용할 인원을 선택해주세요.</Typography>
      <FormControl
        sx={{
          display: 'flex',
          width: '100%',
          // { md: 200, sm: 100, xs: '100%' },
          mb: 5,
        }}
      >
        <CommonInputLabel>1~10명까지 선택 가능</CommonInputLabel>
        <CommonSelect
          label={'1~10명까지 선택 가능'}
          onChange={handleDate}
          value={bookData?.people}
          name={'people'}
        >
          {people.map((people: any, idx: any) => (
            <MenuItem key={idx} value={people?.number}>
              {people?.number}
            </MenuItem>
          ))}
        </CommonSelect>
      </FormControl>
    </Box>
  );
};
export default SelectforReservation;
