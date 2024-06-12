import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { pathCase } from './config';
// import { useColorModeContext } from '@/provider/darkmode/DarkmodeProvider';

export const authHook = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  //   const context = useColorModeContext();
  const id = localStorage.getItem('userid');
  //   const mode = localStorage.getItem('mode');
  useEffect(() => {
    // console.log('훅');

    if (pathCase({ pathname })) {
      return;
    }
    if (!id) {
      navigate('/');
      //   context.setMode();
    }
    return () => {
      // console.log('unmount');
    };
  }, [pathname]);
  //   console.log(location);
  return <></>;
};
