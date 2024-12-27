<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "Are you a Job seekers ?",
  },
  subTitle: {
    type: String,
    default: "Then You in the right place!",
  },
  bg: {
    type: String,
    default: "#F3F4F6",
  },
  btnColor: {
    type: String,
    default: "#000000",
  },
  btnText: {
    type: String,
    default: "Button",
  },
  btnLink: {
    type: String,
    default: "/",
  },
});
</script>

<template>
  <div :style="{ backgroundColor: bg }" :class="`= p-6 rounded-lg shadow-md`">
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <p class="mt-2 mb-4">{{ subTitle }}</p>
    <RouterLink
      :to="btnLink"
      :style="{ backgroundColor: btnColor }"
      :class="`inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700`"
    >
      {{ btnText }}
    </RouterLink>
  </div>
</template>
