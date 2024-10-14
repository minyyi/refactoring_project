import { Box, Divider, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Profile from '../../web/Profile';
import { userid } from '@/lib/recoil/authAtom';
import { useRecoilValue } from 'recoil';

const SidebarHeader = ({
  toggleDrawer,
}: {
  toggleDrawer: (event: any, path?: string) => void;
}) => {
  const userInfo = useRecoilValue<any>(userid);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: 1,
          minWidth: 10,
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <Profile />
          <Typography noWrap>{userInfo.name}</Typography>
        </Box>
        <IconButton
          onClick={(event) => toggleDrawer(event)}
          sx={{
            width: 'fit-content',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
    </>
  );
};

export default SidebarHeader;
