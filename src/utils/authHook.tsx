import { Co2Sharp } from '@mui/icons-material';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { pathCase } from './config';

export const authHook = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('훅');
    const id = localStorage.getItem('userid');
    if (pathCase({ pathname })) {
      return;
    }
    if (!id) {
      navigate('/');
    }
    return () => {
      console.log('unmount');
    };
  }, [pathname]);
  //   console.log(location);
  return <></>;
};
