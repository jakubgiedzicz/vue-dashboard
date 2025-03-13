<script setup lang="ts">
import type IFormTriangle from '@/assets/types/form-triangle';
import type ITriangle from '@/assets/types/triangle';
import AngleForm from '@/components/AngleForm.vue';
import CanvasElement from '@/components/CanvasElement.vue';
import getDegrees from '@/functions/getDegrees';
import { ref, type Ref } from 'vue';
const triangle: Ref<ITriangle> = ref({
  angleA: 60,
  angleB: 30,
  angleC: 0,
  //sideA = A<->B
  sideA: 100,
  //sideB = C<->A
  sideB: 0,
  //sideC = B<->C
  sideC: 0,
  isValid: true,
  scale: false,
  circumscribedRadius: 0,
  inscribedRadius: 0
})
const calcTriangle = ()=> {
  triangle.value.angleC = 180 - triangle.value.angleA - triangle.value.angleB
  triangle.value.sideB = +(Math.sin(getDegrees(triangle.value.angleB))*triangle.value.sideA/Math.sin(getDegrees(triangle.value.angleA))).toFixed(2)
  triangle.value.sideC = +(Math.sin(getDegrees(triangle.value.angleC))*triangle.value.sideA/Math.sin(getDegrees(triangle.value.angleA))).toFixed(2)
  const p = (triangle.value.sideA+triangle.value.sideB+triangle.value.sideC)/2
  triangle.value.inscribedRadius = +(Math.sqrt(((p-triangle.value.sideA)*(p-triangle.value.sideB)*(p-triangle.value.sideC))/p)).toFixed(2)
  triangle.value.circumscribedRadius = +((triangle.value.sideA*triangle.value.sideB*triangle.value.sideC)/(4*triangle.value.inscribedRadius*p)).toFixed(2)
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
const toggle = () => {
  triangle.value.scale = !triangle.value.scale
}
</script>
<template>
  <div :class="$style.content_container">
    <AngleForm :angleA="triangle.angleA" :angleB="triangle.angleB" :isValid="triangle.isValid" :sideA="triangle.sideA"
    @submitTriangle="formTriangle" />
  <CanvasElement :scale="triangle.scale" :angleA="triangle.angleA" :angleB="triangle.angleB" :angleC="triangle.angleC" :sideA="triangle.sideA" :sideB="triangle.sideB" :sideC="triangle.sideC" :inscribedRadius="triangle.inscribedRadius" :circumscribedRadius="triangle.circumscribedRadius"
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