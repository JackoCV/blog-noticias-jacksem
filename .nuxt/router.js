import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _948fc392 = () => interopDefault(import('..\\pages\\deportes\\index.vue' /* webpackChunkName: "pages/deportes/index" */))
const _64146fd4 = () => interopDefault(import('..\\pages\\espectaculos\\index.vue' /* webpackChunkName: "pages/espectaculos/index" */))
const _002322cc = () => interopDefault(import('..\\pages\\sucesos\\index.vue' /* webpackChunkName: "pages/sucesos/index" */))
const _1999e0a7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _97fd0622 = () => interopDefault(import('..\\pages\\deportes\\_slug.vue' /* webpackChunkName: "pages/deportes/_slug" */))
const _6781b264 = () => interopDefault(import('..\\pages\\espectaculos\\_slug.vue' /* webpackChunkName: "pages/espectaculos/_slug" */))
const _0390655c = () => interopDefault(import('..\\pages\\sucesos\\_slug.vue' /* webpackChunkName: "pages/sucesos/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/deportes",
    component: _948fc392,
    name: "deportes"
  }, {
    path: "/espectaculos",
    component: _64146fd4,
    name: "espectaculos"
  }, {
    path: "/sucesos",
    component: _002322cc,
    name: "sucesos"
  }, {
    path: "/",
    component: _1999e0a7,
    name: "index"
  }, {
    path: "/deportes/:slug",
    component: _97fd0622,
    name: "deportes-slug"
  }, {
    path: "/espectaculos/:slug",
    component: _6781b264,
    name: "espectaculos-slug"
  }, {
    path: "/sucesos/:slug",
    component: _0390655c,
    name: "sucesos-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
