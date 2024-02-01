import { Container, Paper } from '@mui/material';

const Pagination = () => {
  return (
    <>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper sx={{ padding: 2, borderRadius: 5 }}>페이지네이션</Paper>
      </Container>
    </>
  );
};
export default Pagination;
