import { useState, useRef } from 'react';
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
  // const [option, setOption] = useState<any>([]);
  // const handleSetOption = (option: any) => {
  //   setOption((prev: any) => {
  //     return [...prev, option];
  //   });
  // };
  const [option, setOption] = useState<any>([]);
  const handleSetOption = (option: any) => {
    // console.log(cardData);
    setOption((prev: any) => {
      //map??
      let checkTrue = prev?.find((data: any) => option?.name === data?.name);
      if (checkTrue) {
        return prev?.filter((data: any) => option?.key !== data?.key);
      } else {
        return [option, ...prev];
      }
    });
  };
  const [uploadImgUrl, setUploadImgUrl] = useState(''); //firebase
  const [prevImgUrl, setPrevImgUrl] = useState(''); //임시이미지
  const photo = useRef<HTMLInputElement>(null);

  const onchangeImageUpload = (e: any) => {
    const file = e.target.files[0]; //서버에 보내서 저장 ->
    console.log(file?.type.split('/')[0]);
    if (file?.type.split('/')[0] === 'image') {
      const imageUrl = URL.createObjectURL(file);
      console.log(imageUrl); //임시용 / 보안위험
      setPrevImgUrl(imageUrl);
      // setUploadImgUrl(imageUrl);
      /* 1, firebase 업로드성공
         2. setUploadImgUrl 넣어서 state 저장하고
         3. post 하는 img에 넣기  
      */
    } else {
      window.alert('이미지 파일로 올려주세요.');
    }

    // const { files } = e.target;
    // const uploadFile = files[0];
    // const reader = new FileReader();
    // console.log(reader);
    // reader.readAsDataURL(uploadFile);
    // reader.onloadend = () => {
    //   // setUploadImgUrl(reader?.result);
    // };
  };
  const fileHandler = () => {
    if (photo.current) {
      photo.current!.click();
    }
  };
  const clickSaveOffice = () => {
    fetch('http://localhost:5502/api/products', {
      method: 'POST', //get data와 비교하기
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        officeName,
        grade: '4.5(21)',
        address: {
          legion: selected,
          city: city,
          town: town,
        },
        price,
        option,
        image: uploadImgUrl, //서버에서 보낼때 : formdata로 보내기
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
  // console.log(inputRef);
  // function handleClick() {
  //   inputRef.current.focus();
  // }

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
              {/* <label htmlFor="ex_file">파일 등록</label> */}
              <CommonButton sx={{ height: 40 }} onClick={fileHandler}>
                사진 추가
                <input
                  type="file"
                  name="filename"
                  ref={photo}
                  accept="image/*"
                  multiple
                  onChange={onchangeImageUpload}
                  style={{
                    display: 'none',
                  }}
                ></input>
              </CommonButton>
              <Box
                sx={{
                  border: 'solid',
                  borderColor: 'gray',
                  width: 100,
                  height: 100,
                  backgroundColor: 'lightgray',
                  borderRadius: 3,
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  // src="/public/noProfile.png"
                  src={prevImgUrl}
                  style={{ width: 100, objectFit: 'cover' }}
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
