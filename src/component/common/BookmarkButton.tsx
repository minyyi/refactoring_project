import { ToggleButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRecoilState, useRecoilValue } from 'recoil';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { userid } from '@/lib/recoil/authAtom';

const BookmarkButton = ({ clickHeart, cardData, onHeart }: any) => {
  let [userId, setUserId] = useRecoilState<any>(userid);
  // console.log(userId);
  // let userInfo = useRecoilValue<any>(userid);
  // const [bookmarkRef, setBookmarkRef] = useState<any>(null);
  const bookmarks = userId.bookmarks || [];

  if (!userId.id || !Array.isArray(userId.bookmarks)) {
    //!userInfo ||
    // console.error('User info or bookmarks are undefined or not an array');
    // userId = { ...userId, bookmarks: [] };
    return null;
  }

  // const heartOn =
  //   Array.isArray(onHeart) && onHeart.length > 0
  //     ? onHeart.some((data: any) => data && data._id === cardData?._id)
  //     : false;
  // useEffect(() => {
  //   if (userInfo && userInfo.id) {
  //     setBookmarkRef(doc(db, 'users', userInfo.id));
  //   }
  // }, [userInfo]);
  const heartOn = onHeart.some(
    (data: any) => data && data._id === cardData?._id
  );
  const bookmarkRef = doc(db, 'users', userId.id);

  // const bookmark = async () => {
  //   try {
  //     const newBookmarks = heartOn
  //       ? userInfo.bookmarks.filter((id: any) => id !== cardData?._id)
  //       : [...userInfo.bookmarks, cardData?._id];

  //     await updateDoc(bookmarkRef, { bookmarks: newBookmarks });

  //     setUserId({
  //       ...userInfo,
  //       bookmarks: newBookmarks,
  //     });
  //   } catch (error) {
  //     console.error('Error updating document: ', error);
  //   }
  // };

  const bookmark = async () => {
    try {
      const newBookmarks = heartOn
        ? bookmarks.filter((id: any) => id !== cardData?._id)
        : [...bookmarks, cardData?._id];

      await updateDoc(bookmarkRef, { bookmarks: newBookmarks });
      setUserId((prevState: any) => ({
        ...prevState,
        bookmarks: newBookmarks,
      }));
      // setUserId({
      //   ...userId,
      //   bookmarks: newBookmarks,
      // });
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
        // zIndex: 333,
        ':hover': {
          //   backgroundColor: '#ffffff',
        },
        ':selected': {
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
