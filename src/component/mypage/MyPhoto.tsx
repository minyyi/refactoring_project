import { Box, Container, styled } from '@mui/material';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
const MyPhoto = () => {
  return (
    <Box>
      <Box sx={{ borderColor: 'gray' }}>
        <img
          src="/public/noProfile.png"
          style={{ width: 300, alignItems: 'center', paddingTop: 40 }}
        />
      </Box>
      <CommonButton
        component="label"
        // role={undefined}
        // variant="contained"
        // tabIndex={-1}
      >
        사진 변경
        <VisuallyHiddenInput type="file" />
      </CommonButton>
    </Box>
  );
};
export default MyPhoto;
