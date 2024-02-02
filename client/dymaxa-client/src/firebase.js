// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_c8Oq1CkPz4OJVRuQkOpqNM3frpTMmQk",
    authDomain: "cvupload-dced4.firebaseapp.com",
    projectId: "cvupload-dced4",
    storageBucket: "cvupload-dced4.appspot.com",
    messagingSenderId: "406800271570",
    appId: "1:406800271570:web:1e95d14b10ab1f4d5fc50b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);