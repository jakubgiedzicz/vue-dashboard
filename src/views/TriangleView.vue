<script setup lang="ts">
import type ICanvasTriangle from '@/assets/types/canvas-triangle';
import type IFormTriangle from '@/assets/types/form-triangle';
import type ITriangle from '@/assets/types/triangle';
import AngleForm from '@/components/AngleForm.vue';
import CanvasElement from '@/components/CanvasElement.vue';
import getDegrees from '@/functions/getDegrees';
import { ref, type Ref } from 'vue';
const scale = ref(true)
const triangle: Ref<ITriangle> = ref({
  angleA: 60,
  angleB: 30,
  angleC: 0,
  //sideA = A<->B
  sideA: 200,
  //sideB = C<->A
  sideB: 0,
  //sideC = B<->C
  sideC: 0,
  isValid: true
})
const calcTriangle = ()=> {
  triangle.value.angleC = 180 - triangle.value.angleA - triangle.value.angleB
  triangle.value.sideB = +(Math.sin(getDegrees(triangle.value.angleB))*triangle.value.sideA/Math.sin(getDegrees(triangle.value.angleA))).toFixed(1)
  triangle.value.sideC = +(Math.sin(getDegrees(triangle.value.angleC))*triangle.value.sideA/Math.sin(getDegrees(triangle.value.angleA))).toFixed(1)
}
const formTriangle = (formTriangle: IFormTriangle) => {
  if (formTriangle.formIsValid) {
    triangle.value.angleA = formTriangle.formAngleA
    triangle.value.angleB = formTriangle.formAngleB
    triangle.value.sideA = formTriangle.formSideA
    calcTriangle()
  } else {
    triangle.value.isValid = false
  }
}
const toggle = (toScale: boolean) => {
  scale.value = !scale.value
}
</script>
<template>
  <div :class="$style.content_container">
    <AngleForm :angleA="triangle.angleA" :angleB="triangle.angleB" :isValid="triangle.isValid" :sideA="triangle.sideA"
    @submitTriangle="formTriangle" />
  <CanvasElement :scale="scale" :angleA="triangle.angleA" :angleB="triangle.angleB" :angleC="triangle.angleC" :sideA="triangle.sideA" :sideB="triangle.sideB" :sideC="triangle.sideC"
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