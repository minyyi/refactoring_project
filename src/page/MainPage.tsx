import { Box, Button, Container, Input } from "@mui/material";
import { useTheme } from '@mui/material/styles'
import { blue, red } from '@mui/material/colors'
import { inherits } from "util";

const MainPage = () => {
  const theme = useTheme()
  return (
    <>
     <Container>
      <Box sx={{
        minWidth: '100%',
        border: 3,
      }}>
        asdf
      </Box>
      <Box sx={{ border : 3, minWidth: '100%',}}>ddd
      </Box>
      <Input name="인풋" type="text" sx={{
        border: 2,
        borderStyle: 'dashed',
        borderColor: red[100],
      }}/>
      <Button sx={{
        border: 5,
        borderStyle: 'dotted',
        borderColor: "coral",
        color: 'inherit',
      }}>
        저장
      </Button>
      <Box sx={{ border : 3, borderColor: blue[400],minWidth: '100%',}}>111</Box>
      <Box sx={{ border : 3,  minWidth: '100%',}}>222</Box>
      <Box sx={{ border : 3, borderColor: blue[400],minWidth: '100%',}}>333</Box>
     </Container>
    </>
  );
};

export default MainPage;
