import { atom } from 'recoil';

export const myOffice = [
  {
    id: '0',
    image: '/img1.avif',
    officeName: '선릉 더 공간A',
    grade: '⭐️4.91(21)',
    address: {
      legion: '서울시',
      city: '강남구',
      town: '테헤란로70번길 14-10',
    },
    price: '월 500,000',
    option: [
      { name: '에어컨', key: 'haveAirCondition' },
      { name: '카페', key: 'haveCafe' },
      { name: '복사기', key: 'havePrinter' },
      { name: '인터넷', key: 'haveWifi' },
    ],
  },
  {
    id: '1',
    image: '/img2.avif',
    officeName: '서초 더 공간A',
    grade: '⭐️4.1(51)',
    address: {
      legion: '서울시',
      city: '서초구',
      town: '방배천로2길 5 성지빌딩 4~7층',
    },

    price: '월 500,000',
    option: [
      { name: '주차', key: 'haveParkArea' },
      { name: '공용 라운지', key: 'havePublicLounge' },
      { name: '공용 주방', key: 'havePublicKitchen' },
      { name: '개인 락커', key: 'havePrivateLocker' },
      { name: '인터넷', key: 'haveWifi' },
    ],
  },
];

export const myOfficeData = atom({
  key: 'myOfficeData',
  default: [],
});
