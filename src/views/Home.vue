<script setup>
import Hero from "../components/Hero.vue";
import Card from "../components/Card.vue";
import JobListing from "../components/JobListings.vue";
</script>

<template>
  <Hero title="Become a Vue Devs" />
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 rounded-lg">
        <Card
          title="For Developers"
          subTitle="Browse our Vue jobs and start your career today"
          btnText="Browse Jobs"
          btnLink="/jobs"
        />
        <Card
          title="For Employers"
          subTitle="List your job to find the perfect
        developer for the role"
          btnText="Add Jobs"
          btnColor="#22C55E"
          btnLink="/add-jobs"
          bg="#DCFCE7"
        />
      </div>
    </div>
  </section>
  <JobListing limit="3" showBtn="true" />
</template>
