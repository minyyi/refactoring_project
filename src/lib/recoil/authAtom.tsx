import { atom } from 'recoil';

export const userid = atom({
  key: 'userid',
  default: {},
});

export const userType = atom({
  key: 'userType',
  default: '',
});
