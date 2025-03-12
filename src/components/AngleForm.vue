<script lang="ts" setup>
import { ref } from 'vue';
const emit = defineEmits(['submitTriangle'])
const props = defineProps({
  angleA: Number,
  angleB: Number,
  isValid: Boolean,
  sideA: Number
})
const formTriangle = ref({
  formAngleA: 60,
  formAngleB: 30,
  formSideA: 200,
  formIsValid: props.isValid
})
const addTriangle = () => {
  if (formTriangle.value.formAngleA == 0 || formTriangle.value.formAngleB == 0 || formTriangle.value.formAngleB < 0 || formTriangle.value.formAngleB < 0) {
    formTriangle.value.formIsValid = false
  } else if ((180 - formTriangle.value.formAngleA - formTriangle.value.formAngleB) > 0) {
    formTriangle.value.formIsValid = true
    emit('submitTriangle', formTriangle.value)
  } else {
    formTriangle.value.formIsValid = false
  }
  emit('submitTriangle', formTriangle.value)
}
</script>
<template>
  {{ props.angleA }}
  <div :class="$style.input_card">
    <p :class="$style.px">Enter triangle:</p>
    <form @submit.prevent="addTriangle">
      <label for="angleA">Set angle B:</label>
      <input type="number" value="60" id="angleA" name="angleA" v-model="formTriangle.formAngleA" />
      <label for="angleB">Set angle A:</label>
      <input type="number" value="30" id="angleB" name="angleB" v-model="formTriangle.formAngleB" />
      <label for="sideA">Set side A:</label>
      <input type="number" value="200" id="sideA" name="sideA" v-model="formTriangle.formSideA" />
      <button type="submit">Submit</button>
    </form>
    <p :class="$style.error" v-if="formTriangle.formIsValid === false">This does not make a valid triangle!</p>
  </div>
</template>
<style module>
.input_card {
  padding: 16px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 8px 8px 24px 0px rgb(12, 12, 12);
  width: 250px;
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