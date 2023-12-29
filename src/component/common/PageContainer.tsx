import { ReactNode } from 'react';
import { Box } from '@mui/material';

const PageContainer = ({ children, sx }: { children: ReactNode; sx?: any }) => {
  return <Box sx={{ py: 2, px: { xl: 0, xs: 1 }, ...sx }}>{children}</Box>;
}; //...sx 프롭스로 받은 속성 객체를 풀어서 넣어줌 (공통 스타일을 덮을 수 있도록 열어놔야함.)
export default PageContainer;
