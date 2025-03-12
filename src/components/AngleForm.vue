<script lang="ts" setup>
import { ref } from 'vue';
const formTriangle = ref({
  formAngleA:0,
  formAngleB:0,
  formSideA:0,
})
defineProps({
  angleA: Number,
  angleB: Number,
  isValid: Boolean,
  sideA: Number
})
const addTriangle = () => {
  // if (triangle.value.angleA == 0 || triangle.value.angleB == 0 || triangle.value.angleA < 0 || triangle.value.angleB < 0) {
  //   triangle.value.isValid = false
  // } else if (180 - triangle.value.angleA - triangle.value.angleB > 0) {
  //   triangle.value.angleC = 180 - triangle.value.angleA - triangle.value.angleB
  //   triangle.value.isValid = true
  // } else {
  //   triangle.value.isValid = false
  // }
}
</script>
<template>
  {{ angleA }}
  <div :class="$style.input_card">
    <p :class="$style.px">Enter triangle:</p>
    <form @submit.prevent="$emit('submitTriangle', formTriangle)">
      <label for="angleA">Set angle B:</label>
      <input type="number" id="angleA" name="angleA" v-model="formTriangle.formAngleA"/>
      <label for="angleB">Set angle A:</label>
      <input type="number" id="angleB" name="angleB" v-model="formTriangle.formAngleB"/>
      <label for="sideA">Set side A:</label>
      <input type="number" id="sideA" name="sideA" v-model="formTriangle.formSideA"/>
      <button type="submit">Submit</button>
    </form>
    <p :class="$style.error" v-if="isValid === false">This does not make a valid triangle!</p>
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