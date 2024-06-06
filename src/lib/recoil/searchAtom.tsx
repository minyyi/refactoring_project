import { atom, selector } from 'recoil';
import { optionInfo } from '@/utils/config';
import { cardData } from './homeDataAtom';

const defaultObject = optionInfo
  //메서드 체이닝
  ?.map((optionObject) => {
    return optionObject?.key;
  })
  ?.reduce((acc, cur) => {
    return {
      ...acc,
      [cur]: false,
    };
  }, {});

export const selectCity = atom({
  key: 'selectCity',
  default: '',
});

export const selectLegionAtom = atom({
  key: 'selectLegionAtom',
  default: '',
});
export const inputTownAtom = atom({
  key: 'inputTownAtom',
  default: '',
});
export const checkedOptionAtom = atom({
  key: 'checkedOptionAtom',
  default: defaultObject,
});

export const mySelector = selector({
  key: 'MySelector',
  get: ({ get }) => {
    const initialData = get(cardData);
    const legion = get(selectLegionAtom);
    const city = get(selectCity);
    const option: any = get(checkedOptionAtom);
    const town: any = get(inputTownAtom);
    const townSplit: any = town ? town?.split('') : null;
    // console.log(town);
    // console.log(townSplit);

    return initialData.filter((data: any) => {
      // legion과 city 조건을 체크합니다.
      const legionMatch = legion ? data.address.legion === legion : true;
      const cityMatch = city ? data?.address?.city === city : true;
      const townSplit = town ? town?.split('') : true;
      const initialDataSpilt = data?.address?.town?.split('');
      const checkTown = town
        ? initialDataSpilt?.some((word: any) => townSplit?.includes(word))
        : true;
      // 선택된 모든 옵션이 데이터 항목에 포함되어 있는지 확인합니다.
      const optionKeys = Object.keys(option).filter((key) => option[key]);
      const optionMatch =
        optionKeys.length > 0
          ? optionKeys.every((key) =>
              data.option.some((opt: any) => opt.key === key)
            )
          : true;

      return legionMatch && cityMatch && optionMatch && checkTown;
    });
  },
});
