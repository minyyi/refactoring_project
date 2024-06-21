import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
} from '@mui/material';

import { selectLegion, selectCity } from '@/utils/config';
import Option from '@/component/common/Option';
import { useRecoilState } from 'recoil';
import { myOfficeData } from '@/lib/recoil/myOfficeAtom';
import { optionInfo } from '@/utils/config';
import CommonButton from '@/component/common/CommonButton';
import { storage } from '@/lib/firebase/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const AddOffice = () => {
  const navigator = useNavigate();

  const [card, setCard] = useRecoilState(myOfficeData);
  const [officeName, setOfficeName] = useState('');
  const [price, setPrice] = useState('');
  const [selected, setSelected] = useState('');
  const [city, setCity] = useState('');
  const [town, setTown] = useState('');
  const userId = localStorage.getItem('userid');

  // const [getUserId, setGetUserId] = useState<string | null>(null);

  // useEffect(() => {
  //   const storedUserId = localStorage.getItem('userId');
  //   if (storedUserId) {
  //     setGetUserId(storedUserId);
  //   }
  // }, []);
  const handleSelect1 = (e: any) => {
    setSelected(e.target.value);
  };
  const handleSelect2 = (e: any) => {
    setCity(e.target.value);
  };

  const handleOfficeName = (e: any) => {
    setOfficeName(e.target.value);
  };
  const handleFormData = (e: any) => {
    setTown(e.target.value);
  };
  const handlePrice = (e: any) => {
    setPrice(e.target.value);
  };

  const [option, setOption] = useState<any>([]);
  const handleSetOption = (option: any) => {
    setOption((prev: any) => {
      let checkTrue = prev?.find((data: any) => option?.name === data?.name);
      if (checkTrue) {
        return prev?.filter((data: any) => option?.key !== data?.key);
      } else {
        return [option, ...prev];
      }
    });
  };

  const [file, setFile] = useState<any>(''); //firebase
  const [prevImgUrl, setPrevImgUrl] = useState(''); //임시이미지
  const [uploadImageUrl, setUploadImageUrl] = useState('');
  const photo = useRef<HTMLInputElement>(null);

  const onchangeImageUpload = (e: any) => {
    const file = e.target.files[0]; //서버에 보내서 저장 ->
    if (file?.type.split('/')[0] === 'image') {
      const imageUrl = URL.createObjectURL(file);
      setPrevImgUrl(imageUrl);
      setFile(file);
    } else {
      window.alert('이미지 파일로 올려주세요.');
    }
  };

  const fileHandler = () => {
    if (photo?.current) {
      photo?.current!.click();
    }
  };

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file?.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          switch (snapshot.state) {
            case 'paused':
              break;
            case 'running':
              break;
            default:
              break;
          }
          console.log(progress);
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUploadImageUrl(downloadURL);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const clickSaveOffice = () => {
    fetch(`http://${import.meta.env.VITE_BACKEND_URL}:5502/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        officeName,
        grade: '',
        address: {
          legion: selected,
          city: city,
          town: town,
        },
        price,
        option,
        image: uploadImageUrl,
      }),
    })
      .then((res: any) => {
        return res.json();
      })
      .then((res: any) => {
        setCard(res);
        window.alert('오피스 등록이 완료되었습니다.');
        navigator('/home');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <PageContainer>
      <Container>
        <CommonTitle>오피스 추가하기</CommonTitle>
        <Paper elevation={3} square={false} sx={{ my: 2 }}>
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
              value={officeName}
              type="text"
              sx={{ width: 400 }}
              onChange={handleOfficeName}
            />
            <Typography>주소</Typography>
            <FormControl sx={{ display: 'flex', width: 400 }}>
              <CommonInputLabel>시/도</CommonInputLabel>
              <CommonSelect
                label="시/도"
                onChange={handleSelect1}
                value={selected}
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
              value={town}
              onChange={handleFormData}
            />
            <Typography>가격</Typography>
            <CommonInput
              sx={{ display: 'flex', width: 400 }}
              size="normal"
              label={'가격'}
              type="text"
              name="price"
              value={price}
              onChange={handlePrice}
            />
            <Typography>옵션</Typography>
            <Box sx={{ width: 400 }}>
              {optionInfo.map((option: any) => (
                <Option
                  key={option?.name}
                  option={option}
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
              <CommonButton sx={{ height: 40 }} onClick={fileHandler}>
                사진 추가
                <input
                  type="file"
                  name="filename"
                  ref={photo}
                  accept="image/*"
                  multiple
                  onChange={onchangeImageUpload}
                  style={{ display: 'none' }}
                />
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
                  src={prevImgUrl}
                  style={{ width: 100, objectFit: 'cover' }}
                />
              </Box>
            </Box>
            <Box sx={{ width: 400, display: 'flex' }}>
              <CommonButton fullWidth onClick={clickSaveOffice}>
                오피스 등록하기
              </CommonButton>
            </Box>
          </Box>
        </Paper>
      </Container>
    </PageContainer>
  );
};

export default AddOffice;
