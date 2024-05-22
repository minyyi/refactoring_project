import { useState } from 'react';
import CommonInput from '@/component/common/CommonInput';
import CommonInputLabel from '@/component/common/CommonInputLabel';
import CommonSelect from '@/component/common/CommonSelect';
import CommonTitle from '@/component/common/CommonTitle';
import PageContainer from '@/component/common/PageContainer';
import {
  Container,
  FormControl,
  Box,
  Typography,
  MenuItem,
  Paper,
  styled,
} from '@mui/material';

import { selectLegion, selectCity } from '@/utils/config';
import Option from '@/component/common/Option';
import { useRecoilState } from 'recoil';
import { myOfficeData } from '@/lib/recoil/myOfficeAtom';
import { optionInfo } from '@/utils/config';
import { checkedOptionAtom } from '@/lib/recoil/searchAtom';
import CommonButton from '@/component/common/CommonButton';

const AddOffice = () => {
  const [card, setCard] = useRecoilState(myOfficeData);

  const [officeName, setOfficeName] = useState<any>('');
  const [price, setPrice] = useState<any>('');
  const [selected, setSelected] = useState('');
  const [city, setCity] = useState('');
  const [town, setTown] = useState<any>({
    town: '',
  });
  const userId = localStorage.getItem('userId');
  const handleSelect1 = (e: any) => {
    setSelected(e.target.value);
  };
  const handleSelect2 = (e: any) => {
    setCity(e.target.value);
  };

  const handleOfficeName = (e: any) => {
    let { name, value } = e.target;
    // console.log({ name, value });
    setOfficeName({ [name]: value });
  };
  const handleFormData = (e: any) => {
    let { name, value } = e.target;
    // console.log({ name, value });
    setTown({ [name]: value });
  };
  const handlePrice = (e: any) => {
    let { name, value } = e.target;
    // console.log({ name, value });
    setPrice({ [name]: value });
  };
  const [option, setOption] = useState<any>([]);
  const handleSetOption = (option: any) => {
    setOption((prev: any) => {
      return [...prev, option];
    });
  };

  const clickSaveOffice = () => {
    fetch('http://localhost:5502/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        officeName: officeName,
        address: {
          legion: selected,
          city: city,
          town: town,
        },
        price: price,
        option: [],
        img: '',
      }),
    })
      .then((res: any) => {
        return res.json();
      })
      .then((res: any) => {
        console.log(res);
        setCard(res);
      });
  };
  console.log({ officeName, price, selected, city, town, userId });
  console.log(option);
  return (
    <PageContainer>
      <Container>
        <CommonTitle>오피스 추가하기</CommonTitle>
        <Paper
          elevation={3}
          square={false}
          sx={{
            my: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              rowGap: 2,
              padding: 2,
            }}
          >
            <Typography>이름</Typography>
            <CommonInput
              size="normal"
              label={'오피스 이름'}
              name="officeName"
              value={officeName?.officeName}
              type="text"
              sx={{ width: 400 }}
              onChange={handleOfficeName}
            ></CommonInput>
            <Typography>주소</Typography>
            <FormControl sx={{ display: 'flex', width: 400 }}>
              <CommonInputLabel>시/도</CommonInputLabel>
              <CommonSelect
                label="시/도"
                onChange={handleSelect1}
                value={selected}
                //   sx={{ width: 400 }}
              >
                {selectLegion.map((address: any, idx: any) => (
                  <MenuItem key={idx} value={address.legion}>
                    {address.legion}
                  </MenuItem>
                ))}
              </CommonSelect>
            </FormControl>

            <FormControl sx={{ display: 'flex', width: 400 }}>
              <CommonInputLabel>시/군/구</CommonInputLabel>
              <CommonSelect
                label="시/군/구"
                onChange={handleSelect2}
                disabled={!selected}
                value={city}
                //   sx={{ width: 400 }}
              >
                {selectCity?.[selected]?.map((city: any, idx: any) => (
                  <MenuItem key={idx} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </CommonSelect>
            </FormControl>
            <CommonInput
              sx={{ display: 'flex', width: 400 }}
              size="normal"
              label={'읍/면/동/리'}
              type="text"
              name="town"
              value={town?.town}
              onChange={handleFormData}
            />
            <Typography>가격</Typography>
            <CommonInput
              sx={{ display: 'flex', width: 400 }}
              size="normal"
              label={'가격'}
              type="text"
              name="price"
              value={price?.price}
              onChange={handlePrice}
            />

            <Typography>옵션</Typography>
            <Box
              sx={{
                width: 400,
                // display: 'flex',
                // alignItems: 'center',
              }}
            >
              {optionInfo.map((option: any, idx: any) => (
                <Option
                  key={option?.name}
                  option={option}
                  // handleSetOption={() => handleSetOption(option)}
                  handleSetOption={handleSetOption}
                />
              ))}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 2,
              }}
            >
              <CommonButton sx={{ height: 40 }}>
                사진 추가
                <VisuallyHiddenInput type="file" />
              </CommonButton>

              <Box sx={{ borderColor: 'gray' }}>
                <img
                  src="/public/noProfile.png"
                  style={{ width: 100, alignItems: 'center', paddingTop: 40 }}
                />
              </Box>
            </Box>

            <Box sx={{ width: 400, display: 'flex' }}>
              <CommonButton fullWidth>오피스 등록하기</CommonButton>
            </Box>
          </Box>
        </Paper>
      </Container>
    </PageContainer>
  );
};
export default AddOffice;

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
