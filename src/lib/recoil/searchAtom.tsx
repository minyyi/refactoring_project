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
    let initialData = get(cardData);
    let legion = get(selectLegionAtom);
    let city = get(selectCity);
    // let town = get(inputTownAtom);
    let option: any = get(checkedOptionAtom);
    // let newArray = [...initialData]?.filter(
    //   (data) => data?.address?.legion === legion
    // );
    //검색필터
    if (
      legion &&
      city &&
      Object.values(option)?.some((boolean) => boolean === true)
    ) {
      let newArray = [...initialData]
        ?.filter((data) => data?.address?.legion === legion)
        ?.filter((data) => data?.address?.city === city)
        ?.filter(
          (data) => data?.option?.some((optionData) => option[optionData?.key])
        );
      console.log(newArray);
      return newArray;
    }
    if (legion && city) {
      let newArray = [...initialData]
        ?.filter((data) => data?.address?.legion === legion)
        ?.filter((data) => data?.address?.city === city);
      console.log(newArray);
      return newArray;
    }

    if (legion && Object.values(option)?.some((boolean) => boolean === true)) {
      let newArray = [...initialData]
        ?.filter((data) => data?.address?.legion === legion)
        ?.filter(
          (data) => data?.option?.some((optionData) => option[optionData?.key])
        );
      console.log(newArray);
      return newArray;
    }
    if (Object.values(option)?.some((boolean) => boolean === true)) {
      let newArray = [...initialData]?.filter(
        (data) => data?.option?.some((optionData) => option[optionData?.key])
      );
      console.log(newArray);

      return newArray;
    }

    if (legion) {
      let newArray = [...initialData]?.filter(
        (data) => data?.address?.legion === legion
      );
      console.log(newArray);

      return newArray;
    }
    // console.log({ legion, city, option });
    return initialData;
  },
});
