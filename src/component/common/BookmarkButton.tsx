import { ToggleButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRecoilState } from 'recoil';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { userid } from '@/lib/recoil/authAtom';

const BookmarkButton = ({ clickHeart, cardData, onHeart }: any) => {
  const [userId, setUserId] = useRecoilState<any>(userid);

  if (
    !userId ||
    typeof userId !== 'object' ||
    !userId.id ||
    !Array.isArray(userId.bookmarks)
  ) {
    // console.error('Invalid userId:', userId);
    return null;
  }

  const bookmarks = userId.bookmarks || [];
  const bookmarkRef = doc(db, 'users', userId.id);

  const heartOn =
    Array.isArray(onHeart) && onHeart.length > 0 && cardData?._id
      ? onHeart.some((data: any) => data && data._id === cardData._id)
      : false;

  const bookmark = async () => {
    if (!cardData?._id) {
      console.error('Invalid cardData:', cardData);
      return;
    }
    try {
      const newBookmarks = heartOn
        ? bookmarks.filter((id: any) => id !== cardData?._id)
        : [...bookmarks, cardData?._id];

      await updateDoc(bookmarkRef, { bookmarks: newBookmarks });
      setUserId((prevState: any) => ({
        ...prevState,
        bookmarks: newBookmarks,
      }));
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

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
