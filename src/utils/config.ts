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

export const selectLegion = [
  { legion: '서울특별시', city: ['강남구', '강동구'] },
  { legion: '부산광역시' },
  { legion: '대구광역시' },
  { legion: '인천광역시' },
  { legion: '광주광역시' },
  { legion: '대전광역시' },
  { legion: '울산광역시' },
  { legion: '세종특별자치시' },
  { legion: '경기도' },
  { legion: '강원특별자치도' },
  { legion: '충청북도' },
  { legion: '충청남도' },
];

export const selectCity = [
  { seoulCity: '강남구' },
  { seoulCity: '강동구' },
  { seoulCity: '강북구' },
  { seoulCity: '강서구' },
  { seoulCity: '관악구' },
  { seoulCity: '광진구' },
  { seoulCity: '구로구' },
  { seoulCity: '금천구' },
  { seoulCity: '노원구' },
  { seoulCity: '도봉구' },
  { seoulCity: '동대문구' },
  { seoulCity: '동작구' },
  { seoulCity: '마포구' },
  { seoulCity: '서대문구' },
  { seoulCity: '서초구' },
  { seoulCity: '성동구' },
  { seoulCity: '성북구' },
  { seoulCity: '송파구' },
  { seoulCity: '양천구' },
  { seoulCity: '영등포구' },
  { seoulCity: '용산구' },
  { seoulCity: '은평구' },
  { seoulCity: '종로구' },
  { seoulCity: '중구' },
  { seoulCity: '중랑구' },
];
