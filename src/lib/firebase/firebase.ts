// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA9K4GqYLBz7hlwK5DtuSOElx5j7-Wy-Mc',
  authDomain: 'refactoring-findoffice.firebaseapp.com',
  projectId: 'refactoring-findoffice',
  storageBucket: 'refactoring-findoffice.appspot.com',
  messagingSenderId: '1042575960719',
  appId: '1:1042575960719:web:e3c986b1847f08d2469efa',
  measurementId: 'G-PZKYH1QLPQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const USER_COLLECTION = collection(db, 'users');
export const IMAGE = collection(db, 'img');

export const useGetCollection = (dbname: any) => {
  console.log(dbname);
  return collection(db, dbname);
};
// export const useGetImage = (url: any) => {
//   console.log(url);
//   return collection(db, url);
// };
// export const useGetCollection2 = (object: any) => {
//   return collection(db, object?.dbname);
// };

const user = auth.currentUser;

console.log(user?.email); // 이메일
// console.log(user?.name); // 표시 이름
console.log(user?.emailVerified); // 이메일 인증 여부(boolean)
