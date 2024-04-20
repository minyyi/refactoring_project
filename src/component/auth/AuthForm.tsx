import { useState } from 'react';
// import { useMutation } from 'react-query';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import PageContainer from '@/component/common/PageContainer';
import { Box, IconButton, InputAdornment, Typography } from '@mui/material';
import CommonTitle from '../common/CommonTitle';
import { PasswordTwoTone, VisibilityOff } from '@mui/icons-material';
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
// import { auth } from '@/';
// import { auth } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  auth,
  useGetCollection,
  USER_COLLECTION,
} from '../../lib/firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseErrorCase } from '@/lib/firebase/firebaseErrorCase';
import { setDoc, doc, addDoc, getDocs } from 'firebase/firestore';

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

  const [signup, setSignup] = useState<AgencyCardProps>({
    businessNumber: '',
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
  });

  const clicktoButton = ({
    title,
    process,
  }: {
    title: string;
    process: string;
  }) => {
    if (title === '로그인') {
      console.log('클릭');
      login(signup?.email, signup?.password);
    } else {
      signUp();
    }
  };
  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    console.log({ name, value });
    setSignup((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // const userCollectionRef = collection(db, 'users');
  const createUser = async ({
    userid,
    name,
    role,
    businessNumber,
    email,
  }: any) => {
    await addDoc(useGetCollection('users'), {
      userid: userid,
      name,
      role,
      businessNumber,
      email,
      // ...user,
    });
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, signup?.email, signup?.password)
      .then((userCredential: any) => {
        console.log(userCredential);
        // setUserDoc(user);
        const user = userCredential.user;
        const additionalData = {
          userid: user?.uid,
          name: signup?.name,
          role: process,
          businessNumber: signup?.businessNumber,
          email: signup?.email,
        };

        createUser(additionalData);
        navigate('/login');
        setSignup({
          businessNumber: '',
          email: '',
          name: '',
          password: '',
          passwordConfirm: '',
        });

        console.log('성공');
      })
      .catch((error: any) => {
        console.log(error);
        firebaseErrorCase(error);
      });
  };

  const login = (email: any, password: any) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential: any) => {
        console.log(userCredential);
        const data = await getDocs(USER_COLLECTION);
        const List = data.docs.map((doc) => ({ ...doc.data() }));
        const find = List?.find((data) => data.userid === userCredential?.uid);

        localStorage.setItem('userid', userCredential?.user?.uid);
        localStorage.setItem('token', userCredential?.user?.accessToken);
        localStorage.setItem('role', find?.role);
        setId({ email: find?.email, name: find?.name, role: find?.role }); //렌더링용

        navigate('/home');
      })
      .catch((error: any) => {
        console.log(error);
        firebaseErrorCase(error);
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
        <Box sx={{ minHeight: 50 }}>
          <CommonInput
            fullWidth
            label={'이메일'}
            placeholder={'이메일을 입력해 주세요'}
            error={signup.email && !validateEmail(signup.email)}
            // helperText={
            //   //스타일링   빼고 p태그로 대체하거나
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
          {signup.email && !validateEmail(signup.email) && (
            //visibility
            <Typography>이메일 형식이 아닙니다</Typography>
          )}
        </Box>

        <CommonInput
          label={'비밀번호'}
          placeholder={'6~10자리의 비밀번호를 입력해주세요'}
          warning={
            signup.password.trim()
              ? validatePassword(signup.password)
                ? ''
                : '6~10자리로 입력해주세요'
              : ''
          }
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
              warning={
                signup.passwordConfirm.trim()
                  ? signup.password === signup.passwordConfirm
                    ? '일치합니다.'
                    : '비밀번호가 일치하지 않습니다'
                  : ''
              }
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
              warning={
                signup.name.trim()
                  ? validateName(signup.name)
                    ? ''
                    : '두 글자 이상 작성해주세요'
                  : ''
              }
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
            warning={
              signup.businessNumber.trim()
                ? validateBusinessNumber(signup.businessNumber)
                  ? ''
                  : '10자리로 입력해주세요'
                : ''
            }
            type={'text'}
            onChange={handleFormData}
          />
        )}
        <hr style={{ width: '300px' }} />

        <CommonButton
          onClick={() =>
            clicktoButton({
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
