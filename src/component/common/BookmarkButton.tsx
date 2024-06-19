import { ToggleButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRecoilState, useRecoilValue } from 'recoil';
// import { favorite } from '@/lib/recoil/favoritAtom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { userid } from '@/lib/recoil/authAtom';

const BookmarkButton = ({ clickHeart, cardData, onHeart }: any) => {
  // const heart = useRecoilValue(favorite);
  const [userId, setUserId] = useRecoilState(userid);
  const heartOn = onHeart?.find((data: any) => data?._id === cardData?._id);
  const userInfo = useRecoilValue<any>(userid);

  const bookmarkRef = doc(db, 'users', userInfo?.id);

  const bookmark = async () => {
    // Set the "capital" field of the city 'DC'
    if (heartOn) {
      await updateDoc(bookmarkRef, {
        bookmarks: userInfo?.bookmarks?.filter(
          (id: any) => id !== cardData?._id
        ),
      });
      // setUserId();
    } else {
      await updateDoc(bookmarkRef, {
        bookmarks: [...userInfo?.bookmarks, cardData?._id],
      });
    }
  };
  console.log(userInfo);
  return (
    <ToggleButton
      value="check"
      selected={Boolean(heartOn)}
      onClick={(e: any) => {
        e.stopPropagation();
        clickHeart(cardData);
        bookmark();
      }}
      sx={{
        position: 'absolute',
        top: '5px',
        right: '5px',
        border: 0,
        width: 10,
        height: 10,
        zIndex: 333,
        // backgroundColor: '#ffffff',
        ':hover': {
          //   backgroundColor: '#ffffff',
        },
        ':seleced': {
          backgroundColor: '#ffffff',
        },
      }}
    >
      {Boolean(heartOn) ? (
        <FavoriteIcon sx={{ color: 'secondary.main' }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: 'primary.main' }} />
      )}
    </ToggleButton>
  );
};
export default BookmarkButton;
