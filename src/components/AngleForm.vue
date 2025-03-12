<script lang="ts" setup>
import type formTriangleType from '@/assets/types/form-triangle';
import { ref, type Ref } from 'vue';

const triangle: Ref<formTriangleType> = ref({
  angleA: 0,
  angleB: 0,
  angleC: 0,
  isValid: true
})
const addTriangle = () => {
  if (triangle.value.angleA == 0 || triangle.value.angleB == 0 || triangle.value.angleA < 0 || triangle.value.angleB < 0) {
    triangle.value.isValid = false
  } else if (180 - triangle.value.angleA - triangle.value.angleB > 0) {
    triangle.value.angleC = 180 - triangle.value.angleA - triangle.value.angleB
    triangle.value.isValid = true
  } else {
    triangle.value.isValid = false
  }
}
</script>
<template>
  <div :class="$style.input_card">
    <p :class="$style.px">Enter triangle:</p>
    <form @submit.prevent="addTriangle">
      <label for="angle1">Set angle B:</label>
      <input type="number" id="angle1" name="angle1" v-model="triangle.angleA" />
      <label for="angle2">Set angle A:</label>
      <input type="number" id="angle2" name="angle2" v-model="triangle.angleB" />
      <label for="sideA">Set side A:</label>
      <input type="number" id="angle2" name="angle2" v-model="triangle.angleC" />
      <button type="submit">Submit</button>
    </form>
    <p :class="$style.error" v-if="triangle.isValid === false">This does not make a valid triangle!</p>
  </div>
</template>
<style module>
.input_card {
  padding: 16px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 8px 8px 24px 0px rgb(12, 12, 12);
}

.input_card form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.input_card form button {
  padding: 16px 32px;
  background-color: rgb(0, 200, 0);
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1rem;
}

.input_card form button:hover {
  background-color: rgb(0, 150, 0);
}

.error {
  color: red;
}
</style>