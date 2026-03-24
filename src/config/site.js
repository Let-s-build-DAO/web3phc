/** Production site origin (no trailing slash). Override with VITE_SITE_ORIGIN for staging. */
export const SITE_ORIGIN = (
  import.meta.env.VITE_SITE_ORIGIN || "https://web3phc.lbdao.xyz"
).replace(/\/$/, "");

/**
 * @param {string} pathOrUrl - "/reconfig", "reconfig", or full https URL
 * @returns {string}
 */
export function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return SITE_ORIGIN;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_ORIGIN}${path}`;
}
