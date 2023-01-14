<script setup>
import dashboardVue from "./components/dashboard.vue";
import login from "./components/login.vue";
</script>

<template>
  <!-- <dashboardVue></dashboardVue> -->
  <!-- <login></login> -->
  <router-view></router-view>
</template>

<script>
export default {
  components: {
    dashboardVue,
    login,
  },
  methods: {},
};
</script>
