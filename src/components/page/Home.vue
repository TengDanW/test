<template>
  <div>
    <h1>Home</h1>
    <h2>This is home</h2>
    <div>
      <router-link to="news">News</router-link>---
      <router-link to="message">Message</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
   
  },
   created() {
      console.log("Home Created");
    },
    destroyed() {
      console.log("Home Destroyed");
    },
};
</script>

<style>
</style>