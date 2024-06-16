import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/HomePage.vue';
import Springs from '@/views/SpringsPage.vue';
import Food from '@/views/FoodPage.vue';
import Attractions from '@/views/AttractionsPage.vue';
import History from '@/views/HistoryPage.vue';
import Culture from '@/views/CulturePage.vue';
import Contact from '@/views/ContactPage.vue';
import About from '@/views/AboutPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/springs', name: 'Springs', component: Springs },
    { path: '/food', name: 'Food', component: Food },
    { path: '/attractions', name: 'Attractions', component: Attractions },
    { path: '/history', name: 'History', component: History },
    { path: '/culture', name: 'Culture', component: Culture },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/about', name: 'About', component: About }
  ]
});
