
import { initializeApp, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Get environment variables
const apiKey = process.env.FB_APPID;
const authDomain = process.env.FB_AUTHDOMAIN!;
const databaseURL = process.env.FB_DBURL!;
const projectId = process.env.FB_PROJECTID!;
const storageBucket = process.env.FB_STORAGEBUCKET!;
const messagingSenderId = process.env.FB_MSGSENDER!;
const appId = process.env.FB_APPID!;
const measurementId = process.env.FB_MEASUREID!;

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
console.log(apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId, measurementId)
// Initialize Firebase

const fb = initializeApp(fbInit);
const firebaseApp = getApp();
const storage1 = getStorage(firebaseApp);

export { firebaseApp, storage1 }