<script lang="ts" setup>
import type IFormTriangle from '@/assets/types/form-triangle';
import { onMounted, ref, type Ref } from 'vue';
const emit = defineEmits(['submitTriangle'])
const props = defineProps({
  angleA: Number,
  angleB: Number,
  isValid: Boolean,
  sideA: Number
})
const formTriangle:Ref<IFormTriangle> = ref({
  formAngleA: props.angleA,
  formAngleB: props.angleB,
  formSideA: props.sideA,
  formIsValid: props.isValid
})
const addTriangle = () => {
  if (formTriangle.value.formAngleA == 0 || formTriangle.value.formAngleB == 0 || formTriangle.value.formAngleB < 0 || formTriangle.value.formAngleB < 0) {
    formTriangle.value.formIsValid = false
  } else if ((180 - formTriangle.value.formAngleA - formTriangle.value.formAngleB) > 0) {
    formTriangle.value.formIsValid = true
  } else {
    formTriangle.value.formIsValid = false
  }
  emit('submitTriangle', formTriangle.value)
}
onMounted(()=> {
  formTriangle.value.formAngleA = props.angleA
  formTriangle.value.formAngleB = props.angleB
  formTriangle.value.formSideA = props.sideA
})
</script>
<template>
  <div :class="$style.input_card">
    <p :class="$style.px">Enter triangle:</p>
    <form @submit.prevent="addTriangle">
      <label for="angleA">Set angle A: {{ formTriangle.formAngleA }}</label>
      <input type="number" id="angleA" name="angleA" v-model="formTriangle.formAngleA" />
      <label for="angleB">Set angle B: {{ formTriangle.formAngleB }}</label>
      <input type="number" id="angleB" name="angleB" v-model="formTriangle.formAngleB" />
      <label for="sideA">Set side A: {{ formTriangle.formSideA }}</label>
      <input type="number" id="sideA" name="sideA" v-model="formTriangle.formSideA" />
      <button type="submit">Submit</button>
    </form>
    <p :class="$style.error" v-if="formTriangle.formIsValid === false">This does not make a valid triangle!</p>
  </div>
</template>
<style module>
.input_card {
  padding-inline: 16px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 8px 8px 24px 0px rgb(12, 12, 12);
  width: 250px;
}

.input_card form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.input_card form button {
  margin-top: 8px;
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