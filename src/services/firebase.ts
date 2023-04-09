import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDOYhkrVzyUdrOJy5pcQIw-kxVbuhz84QI",
  authDomain: "auth-yt-d7118.firebaseapp.com",
  projectId: "auth-yt-d7118",
  storageBucket: "auth-yt-d7118.appspot.com",
  messagingSenderId: "795893677226",
  appId: "1:795893677226:web:5fd79ea82adbeade3924d3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)