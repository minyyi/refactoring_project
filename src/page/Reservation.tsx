import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonButton from '@/component/common/CommonButton';
import PageContainer from '@/component/common/PageContainer';
import CommonSelect from '@/component/common/CommonSelect';
import Title from '@/component/common/Title';
import CommonInputLabel from '@/component/common/CommonInputLabel';
import {
  Box,
  Container,
  Paper,
  Typography,
  MenuItem,
  FormControl,
} from '@mui/material';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import OfficeCard from '@/component/common/OfficeCard';
import Option from '@/component/common/Option';

const Reservation = () => {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState<Date>();

  const clickOtherOffice = () => {
    navigate('/home');
  };
  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    // border-color: 'primary.main';
    // color: 'primary.main';
  }
  .my-today { 
    font-weight: bold;
    font-size: 120%; 
    text-decoration : underline;
  }
`;
  return (
    <PageContainer sx={{ display: 'flex', flexDirection: 'column', rowGap: 4 }}>
      <Container
        sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}
        id="schedule"
      >
        <Title>예약하기</Title>
        <Box
          sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' } }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              //   justifyContent: 'center',
            }}
          >
            <OfficeCard sx={{ width: 310, height: 352 }} />
            <CommonButton
              onClick={clickOtherOffice}
              sx={{ width: 250, backgroundColor: 'secondary.main' }}
            >
              다른 오피스 보기
            </CommonButton>
            {/* <CommonButton></CommonButton> */}
          </Box>
          <Paper
            elevation={3}
            square={false}
            sx={{
              flexGrow: 1,
              padding: 2,
              //   columnGap: 10,
              //   display: 'flex',
              //   flexDirection: 'column',
              //   justifyContent: 'center',
              //   alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                // flexDirection: { md: 'row', sm: 'column', xs: 'column' },
                columnGap: 20,
                // justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  //   display: 'flex',
                  //   flexDirection: 'column',
                  //   flexGrow: 1,
                  //   alignItems: 'center',
                  width: '100%',
                }}
              >
                <Typography sx={{ display: 'flex' }}>
                  시작 날짜를 선택해주세요.
                </Typography>

                <style>{css}</style>
                <DayPicker
                  mode="single"
                  selected={selectedDay}
                  onSelect={setSelectedDay}
                  showOutsideDays
                  modifiersClassNames={{
                    selected: 'my-selected',
                    today: 'my-today',
                  }}
                  modifiersStyles={{
                    disabled: { fontSize: '75%' },
                  }}
                ></DayPicker>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  //   width: 300,
                  display: 'flex',
                  flexDirection: 'column',
                  //   alignItems: 'center',
                }}
              >
                <Typography>이용 기간을 선택해주세요.</Typography>
                <FormControl
                  sx={{
                    display: 'flex',
                    width: '100%',
                    // { md: 200, sm: 100, xs: '100%' },
                    mb: 5,
                  }}
                >
                  <CommonInputLabel>1~11개월까지 선택 가능</CommonInputLabel>
                  <CommonSelect label={'1~11개월까지 선택 가능'}>
                    <MenuItem>1개월</MenuItem>
                    <MenuItem>2개월</MenuItem>
                    <MenuItem>3개월</MenuItem>
                    <MenuItem>4개월</MenuItem>
                    <MenuItem>5개월</MenuItem>
                  </CommonSelect>
                </FormControl>
                <Typography>사용할 인원을 선택해주세요.</Typography>
                <FormControl
                  sx={{
                    display: 'flex',
                    width: '100%',
                    // { md: 200, sm: 100, xs: '100%' },
                    mb: 5,
                  }}
                >
                  <CommonInputLabel>1~10명까지 선택 가능</CommonInputLabel>
                  <CommonSelect label={'1~10명까지 선택 가능'}>
                    <MenuItem>1명</MenuItem>
                    <MenuItem>2명</MenuItem>
                    <MenuItem>3명</MenuItem>
                  </CommonSelect>
                </FormControl>
              </Box>
            </Box>
            <CommonButton>예약하기</CommonButton>
          </Paper>
        </Box>
      </Container>
      <Container>
        <Box sx={{ width: '100%', height: 400, backgroundColor: 'gray' }}>
          지도
        </Box>
      </Container>
      <Container>
        <Box sx={{ padding: 2, borderBottom: 0.5 }}>
          <Typography sx={{ color: '#A7AAB3', fontWeight: 'bold', mb: 1 }}>
            옵션
          </Typography>
          <Typography sx={{ fontSize: 14 }}>에어컨</Typography>
          <Typography sx={{ fontSize: 14 }}>커피머신</Typography>
        </Box>
        <Box sx={{ padding: 2 }}>
          {' '}
          <Typography sx={{ color: '#A7AAB3', fontWeight: 'bold', mb: 1 }}>
            리뷰
          </Typography>
          <Typography>어쩌고 저쩌고</Typography>
        </Box>
      </Container>
    </PageContainer>
  );
};
export default Reservation;
