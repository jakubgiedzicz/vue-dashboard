<script setup lang="ts">
import type ICanvasTriangle from '@/assets/types/canvas-triangle';
import { onMounted, ref, type Ref } from 'vue';
import { defineProps } from 'vue';
const emit = defineEmits(['calcTriangle'])
const props = defineProps({
  angleA: Number,
  angleB: Number,
  sideA: Number
})
const canvas = ref()
const ctx: Ref<CanvasRenderingContext2D|undefined> = ref()
const triangle: Ref<ICanvasTriangle> = ref({
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
  ctx.value?.clearRect(0, 0, 600, 400)
  calcTriangle()
  ctx.value!.strokeStyle = "#ffffff"
  ctx.value?.beginPath()
  ctx.value?.moveTo(250, 200)
  ctx.value?.lineTo(250+triangle.value.sideA, 200)
  ctx.value?.lineTo(250, 200+ triangle.value.sideC)
  ctx.value?.lineTo(250, 200)
  ctx.value?.stroke()
}
const calcTriangle = () => {
  triangle.value.angleA = props.angleA
  triangle.value.angleB = props.angleB
  triangle.value.angleC = 180 - props.angleA - props.angleB
  triangle.value.sideA = props.sideA
  triangle.value.sideB = Math.sin(((Math.PI / 180) * props.angleB))/Math.sin(((Math.PI / 180) * props.angleA))*100
  triangle.value.sideC = Math.sin(((Math.PI / 180) * (180 - props.angleA - props.angleB)))/Math.sin(((Math.PI / 180) * props.angleA))*100
}
onMounted(() => {
  canvas.value = document.getElementById("canvas")
  ctx.value = canvas.value.getContext("2d")
  calcTriangle()
})
</script>
<template>
  <div class="stats">
    Current:
    <p>Angle A: {{ triangle.angleA }}</p>
    <p>Angle B: {{ triangle.angleB }}</p>
    <p>Angle C: {{ triangle.angleC }}</p>
<br />
<p>Side A: {{ triangle.sideA }}</p>
<p>Side B: {{ triangle.sideB.toFixed(0) }}</p>
<p>Side C: {{ triangle.sideC.toFixed(0) }}</p>
  </div>
  <div class="canvas_container">
    <canvas width="600" height="400" id="canvas" @click="drawTriangle"></canvas>
  </div>
</template>
<style>
#canvas {
  fill: #ffffff;
  border: 2px solid green;
  cursor: pointer;
  box-shadow: 8px 8px 24px 0px rgb(12, 12, 12);
}
</style>