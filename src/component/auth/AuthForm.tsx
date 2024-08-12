import { useEffect, useState } from 'react';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import PageContainer from '@/component/common/PageContainer';
import { Box, IconButton, InputAdornment, Typography } from '@mui/material';
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
import { useSetRecoilState } from 'recoil';
import { userid } from '@/lib/recoil/authAtom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  auth,
  useGetCollection,
  USER_COLLECTION,
} from '../../lib/firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseErrorCase } from '@/lib/firebase/firebaseErrorCase';
import { addDoc, getDocs } from 'firebase/firestore';

interface AgencyCardProps {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  businessNumber: string;
  // bookmark: any;
}

export const AuthForm = ({
  title,
  clickBack,
  role,
}: {
  clickBack: (key: string) => void;
  title: string;
  role: string;
}) => {
  const navigate = useNavigate();
  const setId = useSetRecoilState(userid);

  const [signup, setSignup] = useState<AgencyCardProps>({
    businessNumber: '',
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    // bookmark: [],
  });

  const clicktoButton = ({ title, role }: { title: string; role: string }) => {
    console.log(role);
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

  // useEffect(token? '/home' ) 랜딩, 로그인페이지에서 토큰, 있으면 홈으로 넘어가도록!

  // const userCollectionRef = collection(db, 'users');
  const createUser = async ({
    userid,
    name,
    role,
    businessNumber,
    email,
    // bookmark: [],
  }: any) => {
    await addDoc(useGetCollection('users'), {
      userid: userid,
      name,
      role,
      businessNumber,
      email,
      // bookmark: [],
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
          role: role,
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
          // bookmark: [],
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
        const find = List?.find(
          (data) => data.userid === userCredential?.user?.uid
        );
        console.log(find);
        localStorage.setItem('userid', userCredential?.user?.uid);
        localStorage.setItem('token', userCredential?.user?.accessToken);
        localStorage.setItem('role', find?.role);
        setId({
          id: find?.id,
          email: find?.email,
          name: find?.name,
          role: find?.role,
          bookmarks: find?.bookmarks || [],
        }); //렌더링용
        console.log(setId);
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
      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 1 }}>
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
            {role === 'agency' ? '임대인' : '일반회원'} {title}
          </CommonTitle>
          <Box sx={{ pl: 4 }}></Box>
        </Box>
        <Box sx={{ minHeight: 50 }}>
          <CommonInput
            fullWidth
            label={'이메일'}
            placeholder={'이메일을 입력해 주세요'}
            error={signup.email && !validateEmail(signup.email)}
            sx={{ mb: 0 }}
            // helperText={
            //   //스타일링   빼고 p태그로 대체하거나
            // {
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

          <Typography
            visibility={!signup.email ? 'hidden' : 'visible'}
            sx={{ margin: 0, padding: 0, fontSize: 12 }}
          >
            {!validateEmail(signup.email) ? '이메일 형식이 아닙니다' : ``}
          </Typography>
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
        {title === '회원가입' && role === 'agency' && (
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
              role,
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
                (role === 'agency'
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
