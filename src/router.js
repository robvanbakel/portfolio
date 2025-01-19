import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import GoTiny from '@/views/GoTiny.vue';
import Scheduler from '@/views/Scheduler.vue';
import Spark from '@/views/Spark.vue';
import AllLinks from '@/views/AllLinks.vue';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home',
    },
    {
      path: '/gotiny',
      component: GoTiny,
      name: 'GoTiny',
      meta: {
        title: 'GoTiny',
      },
    },
    {
      path: '/scheduler',
      component: Scheduler,
      name: 'Scheduler',
      meta: {
        title: 'Scheduler',
      },
    },
    {
      path: '/spark',
      component: Spark,
      name: 'Spark',
      meta: {
        title: 'Spark',
      },
    },
    {
      path: '/alllinks',
      component: AllLinks,
      name: 'AllLinks',
      meta: {
        title: 'AllLinks',
      },
    },
    {
      path: '/:catchAll(.*)',
      redirect: {
        name: 'Home',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  let title = 'Rob van Bakel - Web Development Portfolio';

  if (to.meta.title) {
    title = `${to.meta.title} | ${title}`;
  }

  document.title = title;

  next();
});

export default router;
