/**
 * Firebase initialisation — used for X (Twitter) login on the Daily Drop game and
 * Firestore storage of speaker applications. These are public client config values
 * (safe to ship). Env vars override them so you can point staging at another project.
 */
import { initializeApp } from "firebase/app";
import { getAuth, TwitterAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDkb61ss5h56c8j88L-dDDbT_lfMAsVlgY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "web3phc-5d851.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "web3phc-5d851",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "web3phc-5d851.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "383309427814",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:383309427814:web:9939bc481a449e8f93e9a7",
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.appId
);

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const twitterProvider = new TwitterAuthProvider();
