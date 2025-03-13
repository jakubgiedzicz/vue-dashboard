<script setup lang="ts">
import type ICanvasTriangle from '@/assets/types/canvas-triangle';
import type formTriangleType from '@/assets/types/form-triangle';
import type ITriangle from '@/assets/types/triangle';
import AngleForm from '@/components/AngleForm.vue';
import CanvasElement from '@/components/CanvasElement.vue';
import { ref, type Ref } from 'vue';
const scale = ref(true)
const triangle: Ref<ITriangle> = ref({
  angleA: 60,
  angleB: 30,
  angleC: 0,
  //sideA = C<->B
  sideA: 200,
  //sideB = C<->A
  sideB: 0,
  //sideC = B<->A
  sideC: 0,
  isValid: true
})
const checkTriangle = (formTriangle: formTriangleType) => {
  if (formTriangle.formIsValid) {
    triangle.value.angleA = formTriangle.formAngleA
    triangle.value.angleB = formTriangle.formAngleB
    triangle.value.sideA = formTriangle.formSideA
  } else {
    triangle.value.isValid = false
  }
}
const calcTriangle = (canvasTriangle: ICanvasTriangle)=> {
  triangle.value.angleC = canvasTriangle.angleC
  triangle.value.sideB = canvasTriangle.sideB
  triangle.value.sideC = canvasTriangle.sideC
}
const toggle = (toScale: boolean) => {
  scale.value = !scale.value
}
</script>
<template>
  <div :class="$style.content_container">
    <AngleForm :angleA="triangle.angleA" :angleB="triangle.angleB" :isValid="triangle.isValid" :sideA="triangle.sideA"
    @submitTriangle="checkTriangle" />
  <CanvasElement :scale="scale" :angleA="triangle.angleA" :angleB="triangle.angleB" :sideA="triangle.sideA"
  @calcTriangle="calcTriangle" @toggleScale="toggle"/>
  </div>
</template>
<style module>
.content_container {
  display: flex;
  flex-direction: row;
  gap: 64px;
}
</style>