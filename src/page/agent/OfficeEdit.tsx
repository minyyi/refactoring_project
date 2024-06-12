import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import { useRecoilValue } from 'recoil';
import { optionInfo } from '@/utils/config';
import CommonButton from '@/component/common/CommonButton';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { storage } from '@/lib/firebase/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
const OfficeEdit = () => {
  const { id } = useParams();
  const cardinfo = useRecoilValue<any>(cardData);
  const navigator = useNavigate();
  const findData = cardinfo?.find((card: any) => id === card?._id);

  const [loading, setLoading] = useState(true);
  const [officeName, setOfficeName] = useState<any>('');
  const [price, setPrice] = useState<any>('');
  const [selected, setSelected] = useState('');
  const [city, setCity] = useState('');
  const [town, setTown] = useState<any>('');

  const userId = localStorage.getItem('userId');
  const handleSelect1 = (e: any) => {
    setSelected(e.target.value);
  };
  const handleSelect2 = (e: any) => {
    setCity(e.target.value);
  };

  const handleOfficeName = (e: any) => {
    let { name, value } = e.target;
    setOfficeName(value);
  };
  const handleFormData = (e: any) => {
    let { name, value } = e.target;
    setTown(value);
  };
  const handlePrice = (e: any) => {
    let { name, value } = e.target;
    setPrice(value);
  };
  const [registeredOption, setRegisteredOption] = useState<any>([]);
  const handleSetOption = (option: any) => {
    setRegisteredOption((prev: any) => {
      //map??
      let checkTrue = prev?.find((data: any) => option?.name === data?.name);
      if (checkTrue) {
        return prev?.filter((data: any) => option?.key !== data?.key);
      } else {
        return [option, ...prev];
      }
    });
  };
  const findregisteredOption = (option: any) => {
    // const result =
    return registeredOption?.some(
      (registeredOption: any) => registeredOption?.key === option?.key
    );
  };
  const [file, setFile] = useState<any>(''); //firebase
  console.log(file);
  const [prevImgUrl, setPrevImgUrl] = useState(''); //임시이미지
  const [downloadImageUrl, setDownloadImageUrl] = useState('');
  console.log(downloadImageUrl);
  const photo = useRef<HTMLInputElement>(null);

  const onchangeImageUpload = (e: any) => {
    const file = e.target.files[0]; //서버에 보내서 저장 ->
    console.log(file?.type.split('/')[0]);
    if (file?.type.split('/')[0] === 'image') {
      const imageUrl = URL.createObjectURL(file);
      console.log(imageUrl); //임시용 / 보안위험
      setPrevImgUrl(imageUrl);
      setFile(file);
      /* 1, firebase 업로드성공
         2. setFile 넣어서 state 저장하고
         3. post 하는 img에 넣기  
      */
    } else {
      window.alert('이미지 파일로 올려주세요.');
    }
  };
  const fileHandler = () => {
    if (photo.current) {
      photo.current!.click();
    }
  };
  const changeImage = async () => {
    const formData = new FormData();
    formData.append('image', file);
  };

  useEffect(() => {
    //if
    const uploadFile = () => {
      const name = new Date().getTime() + file?.name;
      console.log(name);
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setDownloadImageUrl(downloadURL);
            console.log('File available at', downloadURL);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  useEffect(() => {
    if (findData) {
      setOfficeName(findData?.officeName);
      setSelected(findData?.address?.legion);
      setCity(findData?.address?.city);
      setTown(findData?.address?.town);
      setPrice(findData?.price);
      setRegisteredOption(findData?.option);
      setPrevImgUrl(findData?.image);
      setDownloadImageUrl(findData?.image);
    }
    setLoading(false);
  }, [findData]);

  const form = new FormData();
  form.append('image', file);

  const clickSaveOffice = () => {
    // if(){
    //   alert('저장')
    // }
    fetch(`http://localhost:5502/api/product/${id}`, {
      // /:id
      method: 'PUT', //get data와 비교하기
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: findData?.userId,
        officeName,
        grade: findData?.grade,
        address: {
          legion: selected,
          city: city,
          town: town,
        },
        price,
        option: registeredOption,
        image: downloadImageUrl, //서버에서 보낼때 : formdata로 보내기
      }),
    })
      .then((res: any) => {
        return res.json();
      })
      .then((res: any) => {
        console.log(res);
        navigator('/myOffice');
      });
  };
  console.log(cardData);
  console.log(findData);
  console.log({ officeName, price, selected, city, town, userId });
  console.log(findData?.option);
  console.log(selected);
  console.log(registeredOption);
  console.log(file);
  console.log(form);
  return loading ? null : (
    <PageContainer>
      <Container>
        <CommonTitle>오피스 수정하기</CommonTitle>
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
              // cardData={findData}
              size="normal"
              label="오피스 이름"
              name="officeName"
              // defaultValue={findData?.officeName}
              value={officeName}
              type="text"
              sx={{ width: 400 }}
              onChange={handleOfficeName}
            />
            <Typography>주소</Typography>
            <FormControl sx={{ display: 'flex', width: 400 }}>
              <CommonInputLabel>시/도</CommonInputLabel>
              <CommonSelect
                cardData={findData}
                label="시/도"
                name="legion"
                onChange={handleSelect1}
                // defaultValue={findData?.address?.legion}
                value={selected}
              >
                {selectLegion.map((address: any, idx: any) => (
                  <MenuItem key={idx} value={address?.legion}>
                    {address?.legion}
                  </MenuItem>
                ))}
              </CommonSelect>
            </FormControl>

            <FormControl sx={{ display: 'flex', width: 400 }}>
              <CommonInputLabel>시/군/구</CommonInputLabel>
              <CommonSelect
                cardData={findData}
                label="시/군/구"
                name="city"
                onChange={handleSelect2}
                // disabled={!selected}
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
              cardData={findData}
              sx={{ display: 'flex', width: 400 }}
              size="normal"
              label="읍/면/동/리"
              type="text"
              name="town"
              value={town}
              onChange={handleFormData}
            />
            <Typography>가격</Typography>
            <CommonInput
              cardData={findData}
              sx={{ display: 'flex', width: 400 }}
              size="normal"
              label="가격"
              type="text"
              name="price"
              value={price}
              // defaultValue={findData?.price}
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
                  defaultChecked={findregisteredOption(option)}
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
                // onChange={(e) => setFile(e.target.file[0])}
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
                // defaultValue={findData?.image}
              >
                <img
                  // src="/public/noProfile.png"
                  src={prevImgUrl}
                  style={{ width: 100, height: 100, objectFit: 'cover' }}
                />
              </Box>
            </Box>

            <Box sx={{ width: 400, display: 'flex' }}>
              <CommonButton fullWidth onClick={clickSaveOffice}>
                수정하기
              </CommonButton>
            </Box>
          </Box>
        </Paper>
      </Container>
    </PageContainer>
  );
};

export default OfficeEdit;

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
