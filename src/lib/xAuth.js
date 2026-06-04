/**
 * X (Twitter) login + share helpers for the Daily Drop game, built on Firebase Auth.
 *
 * - signInWithX(): popup login, returns a normalised user { name, handle, photo }.
 * - watchUser(cb): subscribes to auth state; cb(user|null). Returns an unsubscribe fn.
 * - signOutX(): signs out.
 * - shareOnX({ text, url }): opens the X compose intent (works with or without login).
 */
import {
  signInWithPopup,
  signOut as fbSignOut,
  onAuthStateChanged,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth, twitterProvider, isFirebaseConfigured } from "../config/firebase";

export { isFirebaseConfigured };

const normalise = (user, handle) => ({
  name: user.displayName || "Builder",
  handle: handle || null, // @screen_name, only reliably available right after sign-in
  photo: user.photoURL || null,
  uid: user.uid,
});

export async function signInWithX() {
  if (!isFirebaseConfigured) throw new Error("Login is not configured yet.");
  const result = await signInWithPopup(auth, twitterProvider);
  const info = getAdditionalUserInfo(result);
  const handle = info?.username || info?.profile?.screen_name || null;
  return normalise(result.user, handle);
}

export function watchUser(cb) {
  if (!isFirebaseConfigured) {
    cb(null);
    return () => {};
  }
  return onAuthStateChanged(auth, (user) => cb(user ? normalise(user) : null));
}

export function signOutX() {
  if (isFirebaseConfigured) return fbSignOut(auth);
  return Promise.resolve();
}

export function shareOnX({ text, url }) {
  const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}${
    url ? `&url=${encodeURIComponent(url)}` : ""
  }`;
  window.open(intent, "_blank", "noopener,noreferrer");
}
