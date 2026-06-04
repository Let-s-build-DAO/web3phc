/**
 * Firebase initialisation — used only for X (Twitter) login on the Daily Drop game.
 * These are public client config values (safe to ship). Env vars override them so
 * you can point staging at a different project without code changes.
 */
import { initializeApp } from "firebase/app";
import { getAuth, TwitterAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAwCSnciGKb38zmmEE8UAVChcecFfx3G8E",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "web3phc.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "web3phc",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "web3phc.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1078702927342",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1078702927342:web:3494604c6d0ad6cd6932ff",
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.appId
);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const twitterProvider = new TwitterAuthProvider();
