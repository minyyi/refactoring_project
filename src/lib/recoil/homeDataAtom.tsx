import { atom } from 'recoil';

export const arrayTest = [
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
  {
    id: '2',
    image: '/img3.avif',
    officeName: '강남패스트파이브',
    grade: '⭐️4.91(91)',
    address: {
      legion: '서울시',
      city: '서초구',
      town: '서초대로 398 BNK 디지털타워4-7층',
    },

    price: '월 400,000',
    option: [
      { name: '에어컨', key: 'haveAirCondition' },
      { name: '카페', key: 'haveCafe' },
      { name: '복사기', key: 'havePrinter' },
      { name: '택배서비스', key: 'packageSendServiceAvailable' },
      { name: '도어락', key: 'haveDoorLock' },
      { name: '팩스', key: 'faxServiceAvailable' },
      { name: '난방기', key: 'haveHeater' },
      { name: '주차', key: 'haveParkArea' },
      { name: '공용 라운지', key: 'havePublicLounge' },
      { name: '공용 주방', key: 'havePublicKitchen' },
      { name: '개인 락커', key: 'havePrivateLocker' },
      { name: '프로젝터', key: 'haveTvProjector' },
      { name: '화이트보드', key: 'haveWhiteBoard' },
      { name: '인터넷', key: 'haveWifi' },
      { name: '샤워시설', key: 'haveShowerBooth' },
      { name: '창고', key: 'haveStorage' },
    ],
  },
  {
    id: '3',
    image: '/img1.avif',
    officeName: '작심스페이스 해운대신라스테이점',
    grade: '⭐️4.91(91)',
    address: {
      legion: '부산시',
      city: '해운대구',
      town: '우동 629-6 지하1층',
    },

    price: '월 300,000',
    option: [
      { name: '주차', key: 'haveParkArea' },
      { name: '공용 라운지', key: 'havePublicLounge' },
      { name: '개인 락커', key: 'havePrivateLocker' },
      { name: '인터넷', key: 'haveWifi' },
    ],
  },
  {
    id: '4',
    image: '/img3.avif',
    officeName: '아이데스크',
    grade: '⭐️4.91(91)',
    address: {
      legion: '제주',
      city: '제주시',
      town: '연북로 161 2층',
    },

    price: '월 350,000',
    option: [
      { name: '프로젝터', key: 'haveTvProjector' },
      { name: '화이트보드', key: 'haveWhiteBoard' },
      { name: '인터넷', key: 'haveWifi' },
      { name: '샤워시설', key: 'haveShowerBooth' },
      { name: '창고', key: 'haveStorage' },
      { name: '인터넷', key: 'haveWifi' },
    ],
  },
  {
    id: '5',
    image: '/img2.avif',
    officeName: '트라이그라운드',
    grade: '⭐️4.31(284)',
    address: {
      legion: '서울시',
      city: '관악구',
      town: '남부순환로 1921-1 2층',
    },

    price: '월 400,000',
    option: [
      { name: '에어컨', key: 'haveAirCondition' },
      { name: '카페', key: 'haveCafe' },
      { name: '복사기', key: 'havePrinter' },
      { name: '주차', key: 'haveParkArea' },
      { name: '공용 라운지', key: 'havePublicLounge' },
      { name: '공용 주방', key: 'havePublicKitchen' },
      { name: '개인 락커', key: 'havePrivateLocker' },
      { name: '인터넷', key: 'haveWifi' },
    ],
  },
  {
    id: '6',
    image: '/img3.avif',
    officeName: '이지코워크 인천소호사무실',
    grade: '⭐️3.91(91)',
    address: {
      legion: '인천',
      city: '남동구',
      town: '청능대로 559 논현메디컬센터 4층',
    },

    price: '월 300,000',
    option: [
      { name: '에어컨', key: 'haveAirCondition' },
      { name: '카페', key: 'haveCafe' },
      { name: '복사기', key: 'havePrinter' },
      { name: '택배서비스', key: 'packageSendServiceAvailable' },
      { name: '팩스', key: 'faxServiceAvailable' },
      { name: '난방기', key: 'haveHeater' },
      { name: '주차', key: 'haveParkArea' },
      { name: '공용 라운지', key: 'havePublicLounge' },
      { name: '프로젝터', key: 'haveTvProjector' },
      { name: '화이트보드', key: 'haveWhiteBoard' },
      { name: '인터넷', key: 'haveWifi' },
    ],
  },
];
export const cardData = atom({
  key: 'cardData',
  default: arrayTest,
});
