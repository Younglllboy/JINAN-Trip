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
import Login from '@/components/LogIn.vue';
import Register from '@/components/RigisterIn.vue';
import Qianfoshan1 from '@/views/Qianfoshan1.vue';
import Qianfoshan2 from '@/views/Qianfoshan2.vue';
import Daminghu1 from '@/views/Daminghu1.vue';
import Daminghu2 from '@/views/Daminghu2.vue';
import Baotuquan1 from '@/views/Baotuquan1.vue';
import Baotuquan2 from '@/views/Baotuquan2.vue';




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
    { path: '/about', name: 'About', component: About },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/attractions', component: Attractions,
      children: [
        {
          path: 'qianfoshan1',
          component:  Qianfoshan1
        }
      ]
    },//设置2级路由
    { path: '/attractions', component: Attractions,
      children: [
        {
          path: 'qianfoshan2',
          component:  Qianfoshan2
        }
      ]
    },
    { path: '/attractions', component: Attractions,
      children: [
        {
          path: 'daminghu1',
          component:  Daminghu1
        }
      ]
    },    
    { path: '/attractions', component: Attractions,
      children: [
        {
          path: 'daminghu2',
          component:  Daminghu2
        }
      ]
    },
    
    { path: '/attractions', component: Attractions,
      children: [
        {
          path: 'baotuquan1',
          component:  Baotuquan1
        }
      ]
    },    
    { path: '/attractions', component: Attractions,
      children: [
        {
          path: 'baotuquan2',
          component:  Baotuquan2
        }
      ]
    },
  ]
});
