import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      component: () => import('./components/Index.vue'),
      children: [
        {
          path: 'star',
          component: () => import('./components/Star.vue'),
        },
        {
          path: 'trash',
          component: () => import('./components/Trash.vue'),
        },
      ],
    },
  ],
});
