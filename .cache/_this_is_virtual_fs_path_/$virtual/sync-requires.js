
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/nico/strapi-fun/my-first-blog/frontend/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/home/nico/strapi-fun/my-first-blog/frontend/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/home/nico/strapi-fun/my-first-blog/frontend/src/pages/index.js"))
}

