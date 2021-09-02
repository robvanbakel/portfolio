import { createRouter, createWebHistory } from "vue-router"

import Home from "@/views/Home"
import GoTiny from "@/views/GoTiny"
import Scheduler from "@/views/Scheduler"

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
    {
      path: "/gotiny",
      component: GoTiny,
      name: "GoTiny",
      meta: {
        title: "GoTiny",
      },
    },
    {
      path: "/scheduler",
      component: Scheduler,
      name: "Scheduler",
      meta: {
        title: "Scheduler",
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  let title = "Rob van Bakel - Web Development Portfolio"

  if (to.meta.title) {
    title = `${to.meta.title} | ${title}`
  }

  document.title = title

  next()
})

export default router
