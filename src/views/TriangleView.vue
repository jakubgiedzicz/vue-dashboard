<script setup lang="ts">
import type formTriangleType from '@/assets/types/form-triangle';
import AngleForm from '@/components/AngleForm.vue';
import CanvasElement from '@/components/CanvasElement.vue';
import { ref, type Ref } from 'vue';
const triangle: Ref<any> = ref({
  angleA: 0,
  angleB: 0,
  angleC: 0,
  //sideA = C<->B
  sideA: 0,
  //sideB = C<->A
  sideB: 0,
  //sideC = B<->A
  sideC: 0,
  isValid: true
})
const checkTriangle = (formTriangle: formTriangleType) => {
  triangle.value.angleA = formTriangle.formAngleA
  triangle.value.angleB = formTriangle.formAngleB
  triangle.value.sideA = formTriangle.formSideA
console.log(formTriangle)
}
</script>
<template>
  <AngleForm :angleA="triangle.angleA" :angleB="triangle.angleB" :isValid="triangle.isValid" :sideA="triangle.sideA" @submitTriangle="checkTriangle"/>
  <CanvasElement />
</template>
<style module>

</style>