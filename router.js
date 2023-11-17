import Vue from "vue";
import Router from 'vue-router';
import home from "~/pages/home/index.vue";

Vue.use(Router);

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m);

const routes = [

  {
    path: '/',
    name: 'home',
    component: page('home/index.vue')
  },
  {
    path: '/:filter', // Define un parámetro de ruta para el filtro
    name: 'FilteredMovies',
    component: home
  }
];

export function createRouter() {
  return new Router({
    routes,
    mode: 'history',
    base: process.env.BASE_URL,
  })
}
