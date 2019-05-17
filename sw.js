importScripts('/blog/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/blog/_nuxt/0c1391ce47d24de1b902.js",
    "revision": "5c86c5ecc3294a5d046686afb9a32508"
  },
  {
    "url": "/blog/_nuxt/193a8b112044d62c88c2.js",
    "revision": "9dcd510cec6bb780401ff5af1970c7b8"
  },
  {
    "url": "/blog/_nuxt/36c126c424c83e00f566.js",
    "revision": "e00fa7834a105c915143c9f5bc565abb"
  },
  {
    "url": "/blog/_nuxt/474e81cd2e5147725f94.js",
    "revision": "b633cd34d2e39954e654d322a8d46396"
  },
  {
    "url": "/blog/_nuxt/736e0ea6a9645e124ce3.js",
    "revision": "b2f4ba4e8d921053d2482c06fbac1e6d"
  },
  {
    "url": "/blog/_nuxt/e86d2d4ce134f77c3619.js",
    "revision": "ec97b73c52352bd8b36fedb34be9d1ec"
  }
], {
  "cacheId": "hello-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/blog/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/blog/.*'), workbox.strategies.networkFirst({}), 'GET')
