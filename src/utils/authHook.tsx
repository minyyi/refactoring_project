import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const authHook = () => {
  const navigate = useNavigate();
  //커스텀훅
  useEffect(() => {
    const id = localStorage.getItem('userid');
    if (!id) {
      navigate('/');
    }
    return () => {
      console.log('unmount');
    };
  }, []);

  return <></>;
};
