<script lang="ts" setup>
</script>
<template>
<div :class="$style.section">
  <div :class="$style.section_item">Triangle 1</div>
  <div :class="$style.section_item">Triangle 2</div>
</div>
</template>
<style module>
.section {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--vt-c-black-soft);
  height: calc(100vh - 3em - 21px);
}
.section_item {
  margin: 1em .5em;
  padding: 1em;
  text-wrap: nowrap;
}
</style>