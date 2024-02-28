import { atom } from 'recoil';
const list = Array.from({ length: 10 }, (_, i) => {
  return {
    id: i,
    image: '/img1.avif',
    officeName: '선릉 더 공간A',
    grade: '⭐️4.91(21)',
    address: '서울시 강남구 테헤란로70번길 14-10',
    price: '월 500,000',
  };
});
export const homeData = atom({
  key: 'homeData',
  default: list,
});
