<script lang="ts" setup>
import { ref } from 'vue';

const triangle = ref({
  angle1: 0,
  angle2: 0,
  angle3: 0,
  isValid: true
})
const addTriangle = () => {
  if (triangle.value.angle1 == 0 || triangle.value.angle2 == 0 || triangle.value.angle1 < 0 || triangle.value.angle2 < 0) {
    triangle.value.isValid = false
  } else if (180 - triangle.value.angle1 - triangle.value.angle2 > 0) {
    triangle.value.angle3 = 180 - triangle.value.angle1 - triangle.value.angle2
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
      <label for="angle1">Set angle 1:</label>
      <input type="number" id="angle1" name="angle1" v-model="triangle.angle1" />
      <label for="angle2">Set angle 2:</label>
      <input type="number" id="angle2" name="angle2" v-model="triangle.angle2" />
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