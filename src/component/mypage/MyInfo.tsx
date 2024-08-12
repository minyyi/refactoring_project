import { Box, Typography, CircularProgress } from '@mui/material';
import CommonInput from '../common/CommonInput';
import { useRecoilState } from 'recoil';
import { userid } from '@/lib/recoil/authAtom';
import { useMutation } from 'react-query';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { useState } from 'react';

const MyInfo = () => {
  const [newName, setNewName] = useState('');
  const [getUserInfo, setGetUserInfo] = useRecoilState<any>(userid);

  const updateUserName = async ({ userid, newName }: any) => {
    if (!userid || typeof userid !== 'string') {
      throw new Error('Invalid userid');
    }
    const userRef = doc(db, 'users', userid);
    await updateDoc(userRef, { name: newName });
    // console.log(result);
  };
  console.log(getUserInfo);
  const updateUserNameMutation = useMutation(updateUserName, {
    onSuccess: () => {
      // queryClient.invalidateQueries('users');

      setGetUserInfo((prev: any) => {
        return { ...prev, name: newName };
      });
      console.log('Name updated successfully');
    },
    onError: (error) => {
      console.error('Error updating name:', error);
    },
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      updateUserNameMutation.mutate({ userid: getUserInfo?.id, newName });
    }
  };

  const data = {
    point: 5000,
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 2,
        justifyContent: 'center',
      }}
    >
      <Box>
        <Typography>아이디</Typography>
        <CommonInput
          disabled
          defaultValue={getUserInfo?.email}
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
      <Box>
        <Typography>닉네임</Typography>
        <CommonInput
          required
          defaultValue={getUserInfo?.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewName(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />
        {updateUserNameMutation.isLoading && <CircularProgress size={20} />}
        {updateUserNameMutation.isError && (
          <Typography color="error">수정 실패</Typography>
        )}
        {updateUserNameMutation.isSuccess && (
          <Typography color="success.main">수정 성공!</Typography>
        )}
      </Box>
      <Box>
        <Typography>잔여 포인트</Typography>
        <CommonInput
          disabled
          defaultValue={data?.point}
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
    </Box>
  );
};

export default MyInfo;
