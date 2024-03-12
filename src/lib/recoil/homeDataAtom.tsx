import { atom, selector } from 'recoil';
// const list = Array.from({ length: 10 }, (_, i) => {
//   return {
//     id: i,
//     image: '/img1.avif',
//     officeName: '선릉 더 공간A',
//     grade: '⭐️4.91(21)',
//     address: '서울시 강남구 테헤란로70번길 14-10',
//     price: '월 500,000',
//   };
// });

export const arrayTest = [
  {
    id: '0',
    image: '/img1.avif',
    officeName: '선릉 더 공간A',
    grade: '⭐️4.91(21)',
    address: '서울시 강남구 테헤란로70번길 14-10',
    price: '월 500,000',
  },
  {
    id: '1',
    image: '/img1.avif',
    officeName: '선릉 더 공간B',
    grade: '⭐️4.1(51)',
    address: '서울시 강남구 테헤란로70번길 14-10',
    price: '월 500,000',
  },
  {
    id: '2',
    image: '/img1.avif',
    officeName: '강남패스트파이브',
    grade: '⭐️4.91(91)',
    address: '서울시 강남구 테헤란로70번길 14-10',
    price: '월 300,000',
  },
];
export const cardData = atom({
  key: 'cardData',
  default: arrayTest,
});

// const cardListFilterState = atom({
//   key: 'cardListFilterState',
//   default: 'Show Clicked',
// });
// export const filteredCardState = selector({
//   key: 'filteredCardState',
//   get: ({ get }) => {
//     return get(cardListFilterState);
//   },
// });
