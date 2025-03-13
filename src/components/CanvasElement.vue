<script setup lang="ts">
import type ICanvasTriangle from '@/assets/types/canvas-triangle';
import { onMounted, onUpdated, ref, type Ref } from 'vue';
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
  sideA: 0,
  sideB: 0,
  sideC: 0
})
const getDegrees = (angle: number) => {
  return angle*Math.PI/180
}
const drawTriangle = () => {
  const h = Math.sin(getDegrees(props.angleB))*triangle.value.sideC
  const x = Math.cos(getDegrees(props.angleB))*triangle.value.sideC 
  console.log(Math.cos(Math.PI/180)*props.angleB)
  ctx.value?.clearRect(0, 0, 600, 400)
  calcTriangle()
  ctx.value!.strokeStyle = "#ffffff"
  ctx.value?.beginPath()
  ctx.value?.moveTo(250, 200)
  ctx.value?.lineTo(250+triangle.value.sideA, 200)
  ctx.value?.lineTo(250+x, 200+ h)
  ctx.value?.lineTo(250, 200)
  ctx.value?.stroke()
}
const calcTriangle = () => {
  triangle.value.angleA = props.angleA
  triangle.value.angleB = props.angleB
  triangle.value.angleC = 180 - props.angleA - props.angleB
  //between B and C
  triangle.value.sideA = props.sideA
  //between A and C
  triangle.value.sideB = Math.sin(((Math.PI / 180) * props.angleB))/Math.sin(((Math.PI / 180) * props.angleA))*100
  //between A and B
  triangle.value.sideC = Math.sin(((Math.PI / 180) * (180 - props.angleA - props.angleB)))/Math.sin(((Math.PI / 180) * props.angleA))*100
}
onMounted(() => {
  canvas.value = document.getElementById("canvas")
  ctx.value = canvas.value.getContext("2d")
  calcTriangle()
  drawTriangle()
})
onUpdated(()=> {
  drawTriangle()
})
</script>
<template>
  <div class="stats">
    Current:
    <p>Angle A: {{ triangle.angleA }}</p>
    <p>Angle B: {{ triangle.angleB }}</p>
    <p>Angle C: {{ triangle.angleC }}</p>
<br />
<p>Side a: {{ triangle.sideA }}</p>
<p>Side b: {{ triangle.sideB.toFixed(2) }}</p>
<p>Side c: {{ triangle.sideC.toFixed(2) }}</p>
  </div>
  <div class="canvas_container">
    <canvas width="600" height="400" id="canvas"></canvas>
  </div>
</template>
<style>
#canvas {
  fill: #ffffff;
  border: 2px solid green;
  cursor: pointer;
  box-shadow: 8px 8px 24px 0px rgb(12, 12, 12);
}
.stats {
  margin-inline: 16px;
  text-wrap: nowrap;
}
</style>