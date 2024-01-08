import { useLocation } from 'react-router-dom';

export const MobileMenuItemArray = [
  { title: 'Profile', path: '/profile' },
  { title: 'Bookmark', path: '/bookmark' },
  { title: 'Reservation', path: '/reservation' },
];

// if (location.pathname === '/' || location.pathname === '/login') return null;

export const pathCase = () => {
  const location = useLocation();
  switch (location.pathname) {
    case '/':
      return null;
    case '/login':
      return null;
    case '/signup':
      return null;
    default:
  }
  return;
};
