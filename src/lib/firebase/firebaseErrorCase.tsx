import { FirebaseError } from 'firebase/app';

export const firebaseErrorCase = (error: FirebaseError) => {
  console.log(error.code);
  switch (error.code) {
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return window.alert('이메일 혹은 비밀번호가 일치하지 않습니다.');
    case 'auth/email-already-in-use':
      return window.alert('이미 사용 중인 이메일입니다.');
    case 'auth/weak-password':
      return window.alert('비밀번호는 6글자 이상이어야 합니다.');
    case 'auth/network-request-failed':
      return window.alert('네트워크 연결에 실패 하였습니다.');
    case 'auth/invalid-email':
      return window.alert('잘못된 이메일 형식입니다.');
    case 'auth/internal-error':
      return window.alert('잘못된 요청입니다.');
    default:
      return window.alert('잠시 후 다시 시도해주세요.');
  }
};
