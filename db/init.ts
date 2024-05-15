import { initializeApp } from "firebase/app";
import Bun from 'bun';


// Get environment variables
const apiKey = Bun.env.FB_APPID;
const authDomain = Bun.env.FB_AUTHDOMAIN;
const databaseURL = Bun.env.FB_DBURL;
const projectId = Bun.env.FB_PROJECTID;
const storageBucket = Bun.env.FB_STORAGEBUCKET;
const messagingSenderId = Bun.env.FB_MSGSENDER;
const appId = Bun.env.FB_APPID;
const measurementId = Bun.env.FB_MEASUREID;

const fbInit = {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
};

// Initialize Firebase
const fbDB = initializeApp(fbInit);

export { fbDB }