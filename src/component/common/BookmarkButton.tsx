import { ToggleButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRecoilState, useRecoilValue } from 'recoil';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { userid } from '@/lib/recoil/authAtom';

const BookmarkButton = ({ clickHeart, cardData, onHeart }: any) => {
  const [userId, setUserId] = useRecoilState(userid);
  console.log(userId);
  const userInfo = useRecoilValue<any>(userid);
  // const [bookmarkRef, setBookmarkRef] = useState<any>(null);

  // userInfo와 userInfo.bookmarks가 정의되었는지 확인합니다.
  if (!userInfo || !Array.isArray(userInfo.bookmarks)) {
    console.error('User info or bookmarks are undefined or not an array');
    return null;
  }
  // onHeart 배열이 정의되었는지, 그리고 빈 배열이 아닌지 확인합니다.
  // const heartOn =
  //   onHeart && Array.isArray(onHeart)
  //     ? onHeart.find((data: any) => data && data._id === cardData?._id)
  //     : false;
  const heartOn =
    Array.isArray(onHeart) && onHeart.length > 0
      ? onHeart.some((data: any) => data && data._id === cardData?._id)
      : false;
  // useEffect(() => {
  //   if (userInfo && userInfo.id) {
  //     setBookmarkRef(doc(db, 'users', userInfo.id));
  //   }
  // }, [userInfo]);

  const bookmarkRef = doc(db, 'users', userInfo.id);

  // const bookmark = async () => {
  //   try {
  //     let newBookmarks: string[];
  //     if (heartOn) {
  //       newBookmarks = userInfo.bookmarks.filter(
  //         (id: any) => id !== cardData?._id
  //       );
  //     } else {
  //       newBookmarks = [...userInfo.bookmarks, cardData?._id];
  //     }

  //     await updateDoc(bookmarkRef, { bookmarks: newBookmarks });

  //     setUserId({
  //       ...userInfo,
  //       bookmarks: [...userInfo.bookmarks, cardData?._id],
  //     });
  //   } catch (error) {
  //     console.error('Error updating document: ', error);
  //   }
  // };

  const bookmark = async () => {
    try {
      if (heartOn) {
        await updateDoc(bookmarkRef, {
          bookmarks: userInfo.bookmarks.filter(
            (id: any) => id !== cardData?._id
          ),
        });
        setUserId({
          ...userInfo,
          bookmarks: userInfo.bookmarks.filter(
            (id: any) => id !== cardData?._id
          ),
        });
      } else {
        await updateDoc(bookmarkRef, {
          bookmarks: [...userInfo.bookmarks, cardData?._id],
        });
        setUserId({
          ...userInfo,
          bookmarks: [...userInfo.bookmarks, cardData?._id],
        });
      }
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
        zIndex: 333,
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
