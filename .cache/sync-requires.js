const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/horse/Desktop/sites/belle-dogs/gatsby-starter-delog-master/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/horse/Desktop/sites/belle-dogs/gatsby-starter-delog-master/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/horse/Desktop/sites/belle-dogs/gatsby-starter-delog-master/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/horse/Desktop/sites/belle-dogs/gatsby-starter-delog-master/src/pages/index.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/horse/Desktop/sites/belle-dogs/gatsby-starter-delog-master/src/templates/blogTemplate.js")))
}

