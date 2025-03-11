<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import LeftSection from "@/components/LeftSection.vue"
import { RouterView } from 'vue-router'
</script>
<template>
  <Navbar />
  <div :class="$style.shell_container">
    <LeftSection />
    <div :class="$style.shell_main">
    <RouterView />
    </div>
  </div>
</template>
<style module>
.shell_container {
  display: flex;
}
.shell_main {
  height: calc(100vh - 3em - 21px -64px);
  padding: 32px;
  width: 100%;
}
</style>