import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CommonButton from '@/component/common/CommonButton';
import PageContainer from '@/component/common/PageContainer';
import CommonSelect from '@/component/common/CommonSelect';
import CommonTitle from '@/component/common/CommonTitle';
import CommonInputLabel from '@/component/common/CommonInputLabel';
import {
  Box,
  Container,
  Paper,
  Typography,
  MenuItem,
  FormControl,
} from '@mui/material';
import OfficeCard from '@/component/common/OfficeCard';
import Option from '@/component/common/Option';
import Calendar from '@/component/reservation/Calendar';
import { month, people } from '@/utils/config';
import { useRecoilState, useRecoilValue, selector } from 'recoil';
import { cardData } from '@/lib/recoil/homeDataAtom';
import SelectforReservation from '@/component/reservation/SelectforReservation';
import { myReservation } from '@/lib/recoil/reservationAtom';
import { format, addMonths } from 'date-fns';

const Reservation = ({ clickCard }: any) => {
  const { id } = useParams();
  const list = useRecoilValue(cardData);
  const navigate = useNavigate();

  const clickOtherOffice = () => {
    navigate('/home');
  };
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const [book, setBook] = useRecoilState<any>(myReservation);
  const [bookData, setBookData] = useState<any>({
    endDate: '',
    paymentDate: '',
    people: '',
  });
  const findData = list?.find((card: any) => card?.id === id);

  const handleCalendarDate = (date: any) => {
    setStartDate(date);
  };

  const handleDate = (e: any) => {
    let { name, value } = e.target;

    setBookData((prev: any) => {
      return { ...prev, [name]: value };
    });
  };
  const clickBooking = () => {
    let calEndDate: any;
    if (startDate && bookData?.endDate && bookData?.people) {
      calEndDate = addMonths(new Date(startDate), bookData?.endDate);
    } else {
      window.alert('모든 값을 선택해주세요');
      return;
    }
    setBook((prev: any) => [
      ...prev,
      {
        startDate,
        endDate: calEndDate,
        paymentDate: new Date(),
        people: bookData?.people,
        id,
      },
    ]);
  };
  console.log(list);
  console.log(id);
  console.log(findData);
  console.log(bookData);
  console.log(book);

  return (
    <PageContainer sx={{ display: 'flex', flexDirection: 'column', rowGap: 4 }}>
      <Container
        sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}
        id="schedule"
      >
        <CommonTitle>예약하기</CommonTitle>
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
            <Container
              sx={{
                display: 'flex',
                columnGap: 2,
                rowGap: { sm: 0, xs: 1 },
                flexWrap: 'wrap',
                justifyContent: { sm: 'flex-start', xs: 'center' },
              }}
            >
              <OfficeCard
                // key={findData?.id}
                cardData={findData}
                sx={{ width: 310, height: 352 }}
              />
            </Container>

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
              display: 'flex',
              flexDirection: 'column',
              //   justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { md: 'row', sm: 'column', xs: 'column' },
                columnGap: 2,
                // justifyContent: 'center',
              }}
            >
              {/* 달력 */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  //   flexGrow: 1,
                  alignItems: 'center',
                  justifyContent: 'center',

                  width: { md: '50%', sm: '100%' },
                }}
              >
                <Typography>시작 날짜를 선택해주세요.</Typography>
                <Calendar
                  handleDate={handleCalendarDate}
                  // bookData={bookData?.startDate}
                />
              </Box>
              {/* select */}
              <SelectforReservation
                handleDate={handleDate}
                bookData={bookData}
              />
            </Box>
            {startDate <= bookData?.endDate ? (
              <CommonButton
                color="warning"
                sx={{ width: '100%' }}
                onClick={clickBooking}
              >
                선택하신 기간에 사용중인 오피스가 있습니다.
              </CommonButton>
            ) : (
              <CommonButton sx={{ width: '100%' }} onClick={clickBooking}>
                예약하기
              </CommonButton>
            )}
          </Paper>
        </Box>
      </Container>
      {/* <Container>
        <Box sx={{ width: '100%', height: 400, backgroundColor: 'gray' }}>
          지도
        </Box>
      </Container> */}
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
