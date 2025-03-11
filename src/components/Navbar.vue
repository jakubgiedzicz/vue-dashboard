<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <div :class="$style.navbar">
    <div><RouterLink to="/">Home</RouterLink></div>
    <div><RouterLink to="/triangles">Triangles</RouterLink></div>
    <div><RouterLink to="/rectangles">Rectangles</RouterLink></div>
  </div>
</template>
<style module>
.navbar {
  background-color: var(--vt-c-black-soft);
  overflow: hidden;
}
.navbar>div {
  padding: 1.5em 1em;
  margin-left: 4em;
  cursor: pointer;
  transition: 0.2s;
  display: inline-block;
}
.navbar>div:hover {
  background-color: var(--vt-c-black-mute);
  filter: brightness(105%);
  scale: 1.2;
}
a {
  text-decoration: none;
  color: green;
}
</style>