import { useState } from 'react';
// import { useMutation } from 'react-query';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import PageContainer from '@/component/common/PageContainer';
import { Box, IconButton, InputAdornment } from '@mui/material';
import CommonTitle from '../common/CommonTitle';
import { VisibilityOff } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import {
  validateName,
  validateEmail,
  validatePassword,
  validateBusinessNumber,
} from '@/utils/validate';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userid, userType } from '@/lib/recoil/authAtom';

// import { getAgencyApi } from "../../fetch/get/main";
// import { signupAgencyApi } from '../../fetch/post/main';
// import { FcGoogle } from 'react-icons/fc';
// import { BsArrowCounterclockwise } from 'react-icons/bs';
// import { AiOutlineEyeInvisible } from "react-icons/ai";

interface AgencyCardProps {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  businessNumber: string;
}

export const AuthForm = ({
  title,
  clickBack,
  process,
}: {
  clickBack: (key: string) => void;
  title: string;
  process: string;
}) => {
  const navigate = useNavigate();
  const setId = useSetRecoilState(userid);

  const clicktoLogin = ({
    title,
    process,
  }: {
    title: string;
    process: string;
  }) => {
    if (title === '로그인') {
      navigate('/home');
      setId('민영');
      localStorage.setItem('userid', '민영');
      localStorage.setItem('roll', process);

      console.log('클릭');
    } else {
      navigate('/login');
    }
  };
  const [signup, setSignup] = useState<AgencyCardProps>({
    businessNumber: '',
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
  });

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    console.log({ name, value });
    setSignup((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //   const clickSignupButton = () => {
  //     postSignup.mutate({
  //       businessNumber: signup?.businessNumber,
  //       email: signup?.email,
  //       name: signup?.email,
  //       password: signup?.password,
  //     });
  //   };
  return (
    <PageContainer
      sx={{
        display: 'flex',
        flexGrow: 1,
        columnGap: 1,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <IconButton onClick={() => clickBack('')}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <CommonTitle sx={{ padding: 0 }}>
            {process === 'agency' ? '임대인' : '일반회원'} {title}
          </CommonTitle>
          <Box sx={{ pl: 4 }}></Box>
        </Box>

        <CommonInput
          label={'이메일'}
          placeholder={'이메일을 입력해 주세요'}
          // warning={
          //   signup.email.trim()
          //     ? validateEmail(signup.email)
          //       ? ''
          //       : '이메일 형식이 아닙니다'
          //     : ''
          // }
          type={'email'}
          value={signup.email}
          name={'email'}
          onChange={handleFormData}
        />
        <CommonInput
          label={'비밀번호'}
          placeholder={'10~20자리의 비밀번호를 입력해주세요'}
          // warning={
          //   signup.password.trim()
          //     ? validatePassword(signup.password)
          //       ? ''
          //       : '10~20자리로 입력해주세요'
          //     : ''
          // }
          type={'password'}
          value={signup.password}
          name={'password'}
          onChange={handleFormData}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOff />
              </InputAdornment>
            ),
          }}
        />
        {/* 회원가입일 때만 */}
        {title === '회원가입' && (
          <>
            <CommonInput
              label={'비밀번호 확인'}
              placeholder={'한 번 더 입력해주세요'}
              // warning={
              //   signup.passwordConfirm.trim()
              //     ? signup.password === signup.passwordConfirm
              //       ? '일치합니다.'
              //       : '비밀번호가 일치하지 않습니다'
              //     : ''
              // }
              type={'password'}
              value={signup.passwordConfirm}
              name={'passwordConfirm'}
              onChange={handleFormData}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityOff />
                  </InputAdornment>
                ),
              }}
            />
            <CommonInput
              label={'닉네임'}
              placeholder={'닉네임을 입력해주세요'}
              // warning={
              //   signup.name.trim()
              //     ? validateName(signup.name)
              //       ? ''
              //       : '두 글자 이상 작성해주세요'
              //     : ''
              // }
              type={'text'}
              value={signup.name}
              name={'name'}
              onChange={handleFormData}
            />
          </>
        )}
        {title === '회원가입' && process === 'agency' && (
          <CommonInput
            value={signup.businessNumber}
            name={'businessNumber'}
            label={'사업자 등록 번호'}
            placeholder={'사업자 등록번호 10자리를 입력해주세요'}
            // warning={
            //   signup.businessNumber.trim()
            //     ? validateBusinessNumber(signup.businessNumber)
            //       ? ''
            //       : '10자리로 입력해주세요'
            //     : ''
            // }
            type={'text'}
            onChange={handleFormData}
          />
        )}
        <hr style={{ width: '300px' }} />

        <CommonButton
          onClick={() =>
            clicktoLogin({
              title,
              process,
            })
          }
          //   clickHandler={() => clickSignupButton()}
          disabled={
            //함수로 바꾸기 chatGPT
            title === '로그인'
              ? !validateEmail(signup.email) ||
                !validatePassword(signup.password)
              : !validateEmail(signup.email) ||
                !validatePassword(signup.password) ||
                // signup.password !== signup.passwordConfirm ||
                !validateName(signup.name) ||
                (process === 'agency'
                  ? !validateBusinessNumber(signup.businessNumber)
                  : false)
          }
        >
          {title}
        </CommonButton>
      </Box>
    </PageContainer>
  );
};
