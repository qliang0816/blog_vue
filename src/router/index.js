import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/views/Home';
// import Article from '@/views/Article';
// import Timeline from '@/views/Timeline';
// import Media from '@/views/Media';

Vue.use(Router);

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home,
      component:resolve=>require(['@/views/Home'],resolve)
    },
    {
      path: '/article/:id',
      name: 'Article',
      // component: Article,
      component:resolve=>require(['@/views/Article'],resolve)
    },
    {
      path: '/timeline',
      name: 'Timeline',
      // component: Timeline,
      component:resolve=>require(['@/views/Timeline'],resolve)
    },
    {
      path: '/media',
      name: 'Media',
      // component: Media,
      component:resolve=>require(['@/views/Media'],resolve)
    },
  ]
});
