import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AllJobs from "../views/AllJobs.vue";
import JobDetails from "../views/JobDetails.vue";
import AddJob from "../views/AddJob.vue";
import EditJob from "../views/EditJob.vue";

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
    {
      path: "/add-jobs",
      name: "add-jobs",
      component: AddJob,
    },
    {
      path: "/jobs/edit/:id",
      name: "editJob",
      component: EditJob,
    },
  ],
});

export default router;
