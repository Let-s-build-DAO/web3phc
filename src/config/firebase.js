/**
 * Firebase initialisation — used only for X (Twitter) login on the Daily Drop game.
 * These are public client config values (safe to ship). Env vars override them so
 * you can point staging at a different project without code changes.
 */
import { initializeApp } from "firebase/app";
import { getAuth, TwitterAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.appId
);

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const twitterProvider = new TwitterAuthProvider();
