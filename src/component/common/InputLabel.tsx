import { InputLabel } from '@mui/material';
import { ReactNode } from 'react';

const CommonInputLabel = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <InputLabel color="secondary" id="demo-simple-select-label">
        {children}
      </InputLabel>
    </>
  );
};
export default CommonInputLabel;
