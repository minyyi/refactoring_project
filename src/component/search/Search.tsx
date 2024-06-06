import { useState, useEffect } from 'react';
import { Box, MenuItem, FormControl, Typography } from '@mui/material';

import CommonSelect from '../common/CommonSelect';
import { selectLegion, selectCity } from '@/utils/config';
import CommonButton from '../common/CommonButton';
import CommonInputLabel from '../common/CommonInputLabel';
import CommonInput from '../common/CommonInput';
import Option from '../common/Option';
import { optionInfo } from '@/utils/config';
import { useRecoilState } from 'recoil';
import {
  selectCity as selectCityAtom,
  selectLegionAtom,
  inputTownAtom,
  checkedOptionAtom,
} from '@/lib/recoil/searchAtom';

const Search = () => {
  const [selected, setSelected] = useRecoilState(selectLegionAtom);
  const [city, setCity] = useRecoilState(selectCityAtom);
  const [town, setTown] = useRecoilState<any>(inputTownAtom);
  const [option, setOption] = useRecoilState<any>(checkedOptionAtom);

  // const [test, setTest] = useState({
  //   legion: '',
  //   city: '',
  //   town: '',
  // });

  //여러개 ? 하나의 함수 안에서 조건으로 => todo하던거
  const handleSelect1 = (e: any) => {
    setSelected(e.target.value);
    setCity('');
  };
  const handleSelect2 = (e: any) => {
    setCity(e.target.value);
  };

  const handleFormData = (e: any) => {
    let { name, value } = e.target;
    // console.log({ name, value });
    setTown(value);
  };

  const handleSetOption = ({ name, key }: any) => {
    setOption((prev: any) => {
      return { ...prev, [key]: !prev[key] };
    });
  };
  // const handleSearch = (e: any) => {
  //   setSearch(e.target.value);
  // };

  // const handleReset = () => {
  //   setSearch('');
  //   // setSelected('');
  //   // setCity('');
  //   // setTown({ town: '' });
  // };

  // sessionStorage에 저장된 search 값을 가져옴
  // const sessionSearch = window.sessionStorage.getItem('search');

  // // search input 값이 바뀔때마다 상태 관리
  // const [search, setSearch] = useState(sessionSearch || '');

  // // search 값이 바뀔 때마다 sessionStorage의 값도 변경하기
  // useEffect(() => {
  //   window.sessionStorage.setItem('search', search);
  // }, [search]);

  // const clickedSearch = () => {
  //   window.sessionStorage.setItem('search', search);
  // };

  // console.log(search);
  console.log(selected);
  console.log(city);
  // console.log(town);
  // console.log(option);
  // console.log(selectCity[selected]);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          columnGap: 2,
          rowGap: 2,
          maxWidth: { sm: 1000, xs: '100%' },
          width: { sm: 'auto', xs: '100%' },
          backgroundColor: 'secondary.dark',
          borderRadius: 5,
          px: 4,
          py: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { sm: 'row', xs: 'column' },
            columnGap: 2,
          }}
        >
          <FormControl
            sx={{ display: 'flex', width: { md: 200, sm: 100, xs: '100%' } }}
          >
            <CommonInputLabel>시/도</CommonInputLabel>
            <CommonSelect
              label="시/도"
              onChange={handleSelect1}
              value={selected}
              sx={{}}
            >
              {/* <MenuItem aria-label="None" value="">
                선택안함
              </MenuItem> */}

              {selectLegion.map((address: any, idx: any) => (
                <MenuItem key={idx} value={address.legion}>
                  {address.legion}
                </MenuItem>
              ))}
            </CommonSelect>
          </FormControl>

          <FormControl
            sx={{ display: 'flex', width: { md: 200, sm: 100, xs: '100%' } }}
          >
            <CommonInputLabel>시/군/구</CommonInputLabel>
            <CommonSelect
              label="시/군/구"
              onChange={handleSelect2}
              disabled={!selected}
              value={city}
            >
              {selectCity?.[selected]?.map((city: any, idx: any) => (
                <MenuItem key={idx} value={city}>
                  {city}
                </MenuItem>
              ))}
            </CommonSelect>
          </FormControl>

          <CommonInput
            sx={{ display: 'flex', width: { md: 200, sm: 100, xs: '100%' } }}
            size="normal"
            label={'읍/면/동/리'}
            type="text"
            name="town"
            // onChange={handleSearch}
            // value={search}
            autoComplete="off"
            value={town}
            onChange={handleFormData}
          />
          <CommonButton size={'medium'}>검색</CommonButton>
          <CommonButton size={'medium'}>초기화</CommonButton>
        </Box>
        <Box sx={{ borderTop: 0.5, pt: 2, mt: 1 }}>
          {optionInfo.map((option: any, idx: any) => (
            <Option
              key={option?.name}
              option={option}
              handleSetOption={handleSetOption}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
export default Search;
