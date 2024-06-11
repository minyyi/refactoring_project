import { ToggleButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRecoilValue } from 'recoil';
import { favorite } from '@/lib/recoil/favoritAtom';

const BookmarkButton = ({ clickHeart, cardData }: any) => {
  const heart = useRecoilValue(favorite);
  const heartOn = heart?.find((data: any) => data?._id === cardData?._id);
  //   const StyledRating = styled(Rating)({
  //     '& .MuiRating-iconFilled': {
  //       color: '#ff6d75',
  //     },
  //     '& .MuiRating-iconHover': {
  //       color: '#ff3d47',
  //     },
  //   });
  // console.log(heart);
  // console.log(cardData);
  return (
    <ToggleButton
      value="check"
      selected={Boolean(heartOn)}
      onClick={(e: any) => {
        e.stopPropagation();
        clickHeart(cardData);
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
