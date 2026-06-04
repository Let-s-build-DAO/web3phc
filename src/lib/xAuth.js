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
  signInWithRedirect,
  getRedirectResult,
  signOut as fbSignOut,
  onAuthStateChanged,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth, twitterProvider, isFirebaseConfigured } from "../config/firebase";

export { isFirebaseConfigured };

const isMobile = () =>
  typeof navigator !== "undefined" &&
  /Android|iPhone|iPad|iPod|Mobile|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const normalise = (user, handle) => ({
  name: user.displayName || "Builder",
  handle: handle || null, // @screen_name, only reliably available right after sign-in
  photo: user.photoURL || null,
  uid: user.uid,
});

/**
 * Start X sign-in.
 * - Mobile: full-page redirect (hands off to the X app / login, then returns to the
 *   site). Resolves to null because the page navigates away — the result is picked up
 *   on return by consumeRedirectResult().
 * - Desktop: popup. Resolves to the signed-in user.
 */
export async function signInWithX() {
  if (!isFirebaseConfigured) throw new Error("Login is not configured yet.");
  if (isMobile()) {
    await signInWithRedirect(auth, twitterProvider);
    return null;
  }
  const result = await signInWithPopup(auth, twitterProvider);
  const info = getAdditionalUserInfo(result);
  const handle = info?.username || info?.profile?.screen_name || null;
  return normalise(result.user, handle);
}

/** Call on load/after returning from a redirect to capture the signed-in user (with handle). */
export async function consumeRedirectResult() {
  if (!isFirebaseConfigured) return null;
  try {
    const result = await getRedirectResult(auth);
    if (!result) return null;
    const info = getAdditionalUserInfo(result);
    const handle = info?.username || info?.profile?.screen_name || null;
    return normalise(result.user, handle);
  } catch {
    return null;
  }
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
