import MyInfo from './MyInfo';
import MyPhoto from './MyPhoto';
import { Container } from '@mui/material';

const MyProfile = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', columnGap: 6 }}>
      <MyPhoto />
      <MyInfo />
    </Container>
  );
};
export default MyProfile;
