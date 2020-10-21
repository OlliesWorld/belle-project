var plugins = [{
      plugin: require('/Users/horse/Desktop/sites/belle-dogs/gatsby-starter-delog-master/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-164743872-1","head":true},
    },{
      plugin: require('/Users/horse/Desktop/sites/belle-dogs/gatsby-starter-delog-master/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Delog GatbsyJS Starter","short_name":"Delog","start_url":"/","background_color":"#fff","theme_color":"#381696","display":"standalone","icon":"src/images/icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"3fc19ef725921a97ef02aa308d5bd4ef"},
    },{
      plugin: require('/Users/horse/Desktop/sites/belle-dogs/gatsby-starter-delog-master/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/horse/Desktop/sites/belle-dogs/gatsby-starter-delog-master/node_modules/gatsby-plugin-dark-mode/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/horse/Desktop/sites/belle-dogs/gatsby-starter-delog-master/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/horse/Desktop/sites/belle-dogs/gatsby-starter-delog-master/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}