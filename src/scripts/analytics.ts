/**
 * Analytics Privacy-Respecting Loader
 *
 * Dynamically loads the third-party analytics script only if the user has
 * not set Do Not Track (DNT) or Global Privacy Control (GPC) preferences.
 */

// Helper to determine if user has opted out of tracking
const isTrackingDisabled = (): boolean => {
  const nav = navigator as any;
  const win = window as any;

  return (
    nav.doNotTrack === "1" ||
    win.doNotTrack === "1" ||
    nav.msDoNotTrack === "1" ||
    nav.globalPrivacyControl === true
  );
};

const initAnalytics = (): void => {
  if (isTrackingDisabled()) {
    console.log("Analytics: Respecting user privacy (Do Not Track/GPC enabled). Tracking skipped.");
    return;
  }

  // Get the current loader script element to read config data attributes
  const currentScript = document.currentScript as HTMLScriptElement;
  if (!currentScript) {
    console.warn("Analytics: Loader script tag not found in DOM.");
    return;
  }

  const srcUrl = currentScript.getAttribute("data-src");
  const websiteId = currentScript.getAttribute("data-website-id");

  if (!srcUrl || !websiteId) {
    console.warn("Analytics: Missing data-src or data-website-id attributes on loader script.");
    return;
  }

  // Dynamically inject the third-party tracking script
  const trackerScript = document.createElement("script");
  trackerScript.async = true;
  trackerScript.defer = true;
  trackerScript.src = srcUrl;
  trackerScript.setAttribute("data-website-id", websiteId);

  // If data-domains attribute is present, forward it to the tracker
  const domains = currentScript.getAttribute("data-domains");
  if (domains) {
    trackerScript.setAttribute("data-domains", domains);
  }

  document.head.appendChild(trackerScript);
};

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAnalytics);
} else {
  initAnalytics();
}
