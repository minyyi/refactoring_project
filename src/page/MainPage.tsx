import { Box, Button, Container, Input } from "@mui/material";
import { useTheme } from '@mui/material/styles'
import { blue, red } from '@mui/material/colors'

const MainPage = () => {
  return (
    <>
     <Container>
      <Box sx={{
        minWidth: '100%',
        border: 3,
      }}>
       첫페이지에서 보이는 내용
      </Box>
     </Container>
    </>
  );
};

export default MainPage;
