import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyAxcOMq0rvS_EroCrrd9eFsSJu3eiYbaVE",
    authDomain: "bike-the-big-apple-capst-d46ad.firebaseapp.com",
    projectId: "bike-the-big-apple-capst-d46ad",
    storageBucket: "bike-the-big-apple-capst-d46ad.appspot.com",
    messagingSenderId: "184416377704",
    appId: "1:184416377704:web:9c096d7f4a6515675a94dd",
    measurementId: "G-H69DWBVKD8"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
auth.useDeviceLanguage();
const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {
  try {
    //the signInWithPopUp() method accepts ANY provider we create. This is all our authentication logic
    signInWithPopup(auth,googleProvider).then((res) => {
    const user = res.user;
    console.log(user)
  })
     } catch (err) {
      console.log(err);
    }
  };

  export const signOut = async () =>{
    try {
      await auth.signOut()
      console.log("you've signed out - congrats.")
      alert("you've signed out - congrats.")
    } catch(err) {
      console.log(err)
    }
  }