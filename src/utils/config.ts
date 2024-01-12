import { useLocation } from 'react-router-dom';

export const MobileMenuItemArray = [
  { title: 'Profile', path: '/profile' },
  { title: 'Bookmark', path: '/bookmark' },
  { title: 'Reservation', path: '/reservation' },
];
const [a, ...rest] = MobileMenuItemArray;
console.log(a);
console.log(rest);
// if (location.pathname === '/' || location.pathname === '/login') return null;

export const pathCase = ({ pathname }: { pathname: any }) => {
  console.log(pathname);
  switch (pathname) {
    case '/':
    case '/login':
    case '/signup':
      return true;
    default:
      return false;
  }
};
