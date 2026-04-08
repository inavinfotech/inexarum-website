import { useEffect } from "react";

const SITE_URL = "https://inexarum.in";
const DEFAULT_IMAGE = `${SITE_URL}/Mlogo.png`;
const SITE_NAME = "iNexarum";

/**
 * SEOHead — Dynamic per-page SEO meta tags for React SPA.
 * Updates document.title + meta tags on mount, cleans up on unmount.
 *
 * @param {string}  title        — Page title (appended with " | iNexarum")
 * @param {string}  description  — Meta description (max ~160 chars)
 * @param {string}  keywords     — Comma-separated keywords
 * @param {string}  path         — URL path (e.g. "/contact")
 * @param {string}  ogType       — Open Graph type (default: "website")
 * @param {string}  image        — OG/Twitter image URL
 * @param {object}  structuredData — Optional JSON-LD structured data object
 */
const SEOHead = ({
  title,
  description,
  keywords = "",
  path = "/",
  ogType = "website",
  image = DEFAULT_IMAGE,
  structuredData = null,
}) => {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const fullUrl = `${SITE_URL}${path}`;

    // Set document title
    document.title = fullTitle;

    // Helper to set/create meta tags
    const setMeta = (attribute, key, content) => {
      let el = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attribute, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Helper to set link tags
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (rel === "canonical") {
        if (!el) {
          el = document.createElement("link");
          el.setAttribute("rel", rel);
          document.head.appendChild(el);
        }
        el.setAttribute("href", href);
      }
    };

    // Primary meta tags
    setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);

    // Canonical
    setLink("canonical", fullUrl);

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", fullUrl);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:image", image);

    // Twitter Card
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // JSON-LD Structured Data
    let scriptEl = document.getElementById("seo-structured-data");
    if (structuredData) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = "seo-structured-data";
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(structuredData);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    // Cleanup: restore defaults on unmount
    return () => {
      document.title = "iNexarum – Web Development, AI Solutions & Digital Agency in India";
    };
  }, [title, description, keywords, path, ogType, image, structuredData]);

  return null;
};

export default SEOHead;
