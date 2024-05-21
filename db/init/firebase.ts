import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// Get environment variables
const apiKey = process.env.FB_APPKEY;
const authDomain = process.env.FB_AUTHDOMAIN!;
const databaseURL = process.env.FB_DBURL!;
const projectId = process.env.FB_PROJECTID!;
const storageBucket = process.env.FB_STORAGEBUCKET!;
const messagingSenderId = process.env.FB_MSGSENDER!;
const appId = process.env.FB_APPID!;
const measurementId = process.env.FB_MEASUREID!;


const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FBdb = getDatabase(app);

export { FBdb };

