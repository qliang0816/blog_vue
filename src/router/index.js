import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Article from '@/views/Article';
import Timeline from '@/views/Timeline';
import Media from '@/views/Media';

Vue.use(Router);

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article,
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline,
    },
    {
      path: '/media',
      name: 'Media',
      component: Media,
    },
  ]
});
