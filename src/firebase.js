// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes} from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPEA9PaKw2L4mq07eZsTmSapc6oeVOgdI",
  authDomain: "semillero-timeline.firebaseapp.com",
  databaseURL: "https://semillero-timeline-default-rtdb.firebaseio.com",
  projectId: "semillero-timeline",
  storageBucket: "semillero-timeline.appspot.com",
  messagingSenderId: "215743074692",
  appId: "1:215743074692:web:d0cd6eca4ff54e56504dd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export  async function uploadFile(file, name){
   const storageRef= ref(storage, name)
   return await uploadBytes(storageRef, file)   
}