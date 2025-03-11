<script lang="ts" setup>
import { ref } from 'vue';

const triangle = ref({
  angle1: 0,
  angle2: 0,
  angle3: 0,
  isValid: true
})
const addTriangle = () => {
  if (triangle.value.angle1 == 0 || triangle.value.angle2 == 0){
    triangle.value.isValid = false
  } else if (180 - triangle.value.angle1 - triangle.value.angle2 > 0){
    triangle.value.angle3 = 180 - triangle.value.angle1 - triangle.value.angle2
    triangle.value.isValid = true
  }  else {
    triangle.value.isValid = false
  }
}
</script>
<template>

</template>
<style module>
</style>