import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { 
    path: '/about', 
    name:'about',
    component: HomeView 
  },
  { 
    path: '/products', 
    name:'products',
    component: HomeView 
  },
  { 
    path: '/company', 
    name:'company',
    component: HomeView 
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to,savedPosition) {
    if (to.hash) {
        const offset = 100;
        const element = document.querySelector(to.hash);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      } else if (savedPosition) {
        return savedPosition;
      } else {
        return { left: 0, top: 0, behavior: 'smooth' };
      }
    
  }
})




export default router;
