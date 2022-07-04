import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import NotFoundError from '../components/NotFoundError.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'IP Address Tracker'
    }
  },
  {
    path: '/error',
    name: 'NotFoundError',
    component: NotFoundError,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router;