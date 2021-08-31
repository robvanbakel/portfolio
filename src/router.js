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
    },
    {
      path: "/scheduler",
      component: Scheduler,
      name: "Scheduler",
    },
  ],

})

export default router
