import { useState } from 'react';
import { ToggleButton, IconButton, styled, Rating } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const BookmakrButton = () => {
  const [selected, setSelected] = useState(false);
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
      sx={{
        position: 'absolute',
        top: '5px',
        left: '5px',
        border: 0,
        width: 10,
        height: 10,
        backgroundColor: '#ffffff',
        ':hover': {
          backgroundColor: '#ffffff',
        },
        ':seleced': {
          backgroundColor: '#ffffff',
        },
      }}
    >
      {selected === true ? (
        <FavoriteIcon sx={{ color: 'secondary.main' }} />
      ) : (
        <FavoriteBorderIcon />
      )}
    </ToggleButton>
  );
};
export default BookmakrButton;
