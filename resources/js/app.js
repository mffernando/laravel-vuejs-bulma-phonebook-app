
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * vue router
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

let pageheader = require('./components/PageHeader.vue');
let pagefooter = require('./components/PageFooter.vue');
let home = require('./components/Home.vue');
let about = require('./components/About.vue');

/**
  * Each route should map to a component. The "component" can
  * either be an actual component constructor created via
  * `Vue.extend()`, or just a component options object.
  *  We'll talk about nested routes later.
  */

const routes = [
  { path: '/home', component: home },
  { path: '/about', component: about }
]

/**
  * Create the router instance and pass the `routes` option
  * You can pass in additional options here, but let's
  * keep it simple for now.
  */

const router = new VueRouter({
  mode: 'history', //remove # in URL
  routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    router,
    components:{pageheader, pagefooter}
});
