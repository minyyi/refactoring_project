import { Box, Container } from '@mui/material';
import CommonButton from '../common/CommonButton';

const MyPhoto = () => {
  return (
    <Box>
      <Box sx={{ borderColor: 'gray' }}>
        <img
          src="/public/noProfile.png"
          style={{ width: 300, alignItems: 'center', paddingTop: 40 }}
        />
      </Box>
      <CommonButton>사진변경</CommonButton>
    </Box>
  );
};
export default MyPhoto;
