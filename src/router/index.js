import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AllJobs from "../views/AllJobs.vue";
import JobDetails from "../views/JobDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/jobs",
      name: "Jobs",
      component: AllJobs,
    },
    {
      path: "/jobs/:id",
      name: "job-details",
      component: JobDetails,
    },
  ],
});

export default router;
