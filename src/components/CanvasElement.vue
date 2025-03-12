<script setup lang="ts">
import type canvasTriangleType from '@/assets/types/triangle';
import { onMounted, ref, type Ref } from 'vue';
const canvas = ref()
const ctx: Ref<CanvasRenderingContext2D|undefined> = ref()
const triangle: Ref<canvasTriangleType> = ref({
  angleA: 0,
  angleB: 0,
  angleC: 0,
  //sideA = C<->B
  sideA: 0,
  //sideB = C<->A
  sideB: 0,
  //sideC = B<->A
  sideC: 0
})
const drawTriangle = () => {
  ctx.value!.strokeStyle = "#ffffff"
  ctx.value?.beginPath()
  ctx.value?.moveTo(250, 200)
  ctx.value?.lineTo(350, 200)
  ctx.value?.lineTo(250, 200+ triangle.value.sideC)
  ctx.value?.lineTo(250, 200)
  ctx.value?.stroke()
}
const calcTriangle = () => {
  triangle.value.angleA = 180-21-71
  triangle.value.angleB = 71
  triangle.value.angleC = 21
  triangle.value.sideA = 100
  triangle.value.sideB = Math.sin(((Math.PI / 180) * triangle.value.angleB))/Math.sin(((Math.PI / 180) * triangle.value.angleA))*100
  triangle.value.sideC = Math.sin(((Math.PI / 180) * triangle.value.angleC))/Math.sin(((Math.PI / 180) * triangle.value.angleA))*100
}
onMounted(() => {
  canvas.value = document.getElementById("canvas")
  ctx.value = canvas.value.getContext("2d")
  calcTriangle()
})
</script>
<template>
  <div class="canvas_container">
    <canvas width="600" height="400" id="canvas" @click="drawTriangle"></canvas>
  </div>
</template>
<style>
#canvas {
  fill: #ffffff;
  border: 2px solid green;
  cursor: pointer;
}
</style>