<script>
import { RouterLink } from "vue-router";
</script>
<template>
  <section>
    <ul>
      <li>room1</li>
      <li>room2</li>
      <li>room3</li>
    </ul>
  </section>
  <RouterLink to="/create-room">Create Room</RouterLink>
  <button type="button">connect</button>
  <router-link to="/">to Auth</router-link>
</template>
<style></style>
