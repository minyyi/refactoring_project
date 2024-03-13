export const customerMenuItemArray = [
  { title: 'Mypage', path: '/mypage' },
  { title: 'Bookmark', path: '/bookmark' },
  { title: 'Reservation', path: '/myreservation' },
  { title: 'Logout', path: '/', type: 'logout' },
];
export const agentMenuItemArray = [
  { title: 'Mypage', path: '/mypage' },
  { title: 'MyOffice', path: '/myOffice' },
  { title: 'Reservation', path: '/reservationList' },
  { title: 'Logout', path: '/', type: 'logout' },
];

export const pathCase = ({ pathname }: { pathname: any }) => {
  // console.log(pathname);
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
  // { legion: '' },
  { legion: '서울특별시' },
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

export const selectCity: { [key: string]: string[] } = {
  서울특별시: [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
  ],
  부산광역시: [
    '강서구',
    '금정구',
    '남구',
    '동구',
    '동래구',
    '부산진구',
    '북구',
    '사상구',
    '사하구',
    '서구',
    '수영구',
    '연제구',
    '영도구',
    '중구',
    '해운대구',
  ],
  대구광역시: [
    '남구',
    '달서구',
    '달성군',
    '동구',
    '북구',
    '서구',
    '수성구',
    '중구',
  ],
  인천광역시: [
    '강화군',
    '계양구',
    '남구',
    '남동구',
    '동구',
    '부평구',
    '서구',
    '연수구',
    '옹진군',
    '중구',
  ],
  광주광역시: ['광산구', '남구', '동구', '북구', '서구'],
  대전광역시: ['대덕구', '동구', '서구', '유성구', '중구'],
  울산광역시: ['남구', '동구', '북구', '울주군', '중구'],
  세종특별자치시: ['세종시'],
  경기도: [
    '고양시',
    '과천시',
    '광명시',
    '광주시',
    '구리시',
    '군포시',
    '김포시',
    '남양주시',
    '동두천시',
    '부천시',
    '성남시',
    '수원시',
    '시흥시',
    '안산시',
    '안성시',
    '안양시',
    '양주시',
    '오산시',
    '용인시',
    '의왕시',
    '의정부시',
    '이천시',
    '파주시',
    '평택시',
    '포천시',
    '하남시',
    '화성시',
  ],
  강원특별자치도: [
    '강릉시',
    '고성군',
    '동해시',
    '삼척시',
    '속초시',
    '양구군',
    '양양군',
    '영월군',
    '원주시',
    '인제군',
    '정선군',
    '철원군',
    '춘천시',
    '태백시',
    '평창군',
    '홍천군',
    '화천군',
    '횡성군',
  ],
  충청북도: [
    '괴산군',
    '단양군',
    '보은군',
    '영동군',
    '옥천군',
    '음성군',
    '제천시',
    '증평군',
    '진천군',
    '청주시',
    '충주시',
  ],
  충청남도: [
    '계룡시',
    '공주시',
    '금산군',
    '논산시',
    '당진시',
    '보령시',
    '부여군',
    '서산시',
    '서천군',
    '아산시',
    '예산군',
    '천안시',
    '청양군',
    '태안군',
    '홍성군',
  ],
};

export const optionInfo = [
  // OptionInfo[]
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
];

export const month = [
  { term: '1개월' },
  { term: '2개월' },
  { term: '3개월' },
  { term: '4개월' },
  { term: '5개월' },
  { term: '6개월' },
  { term: '7개월' },
  { term: '8개월' },
  { term: '9개월' },
  { term: '10개월' },
  { term: '11개월' },
];
export const people = [
  { number: '1명' },
  { number: '2명' },
  { number: '3명' },
  { number: '4명' },
  { number: '5명' },
  { number: '6명' },
  { number: '7명' },
  { number: '8명' },
  { number: '9명' },
  { number: '10명' },
];
