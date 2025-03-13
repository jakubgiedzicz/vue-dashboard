<script setup lang="ts">
import type ICanvasTriangle from '@/assets/types/canvas-triangle';
import getDegrees from '@/functions/getDegrees';
import { onMounted, onUpdated, ref, type Ref } from 'vue';
const emit = defineEmits(['calcTriangle', 'toggleScale'])
const props = defineProps({
  angleA: {type: Number, required: true},
  angleB: {type: Number, required: true},
  angleC: {type: Number, required: true},
  sideA: {type: Number, required: true},
  sideB: {type: Number, required: true},
  sideC: {type: Number, required: true},
  scale: {type: Boolean, required: true}
})
const canvas = ref()
const ctx: Ref<CanvasRenderingContext2D|undefined> = ref()
const size = ref({
  width: 600,
  height: 400
})
const getScaleFactor = () => {

}
const drawTriangle = () => {
  const h = Math.sin(getDegrees(props.angleB))*props.sideC
  const x = Math.cos(getDegrees(props.angleB))*props.sideC
  ctx.value?.clearRect(0, 0, 600, 400)
  ctx.value!.strokeStyle = "#ffffff"
  ctx.value?.beginPath()
  ctx.value?.moveTo(10, 10)
  ctx.value?.lineTo(10+props.sideA, 10)
  ctx.value?.lineTo(10-x+props.sideA, 10+ h)
  ctx.value?.lineTo(10, 10)
  ctx.value?.stroke()
}
onMounted(() => {
  canvas.value = document.getElementById("canvas")
  ctx.value = canvas.value.getContext("2d")
  drawTriangle()
})
onUpdated(()=> {
  drawTriangle()
})
</script>
<template>
  <div class="stats">
    <h1>Current:</h1>
    <p>Angle A: {{ props.angleA }}</p>
    <p>Angle B: {{ props.angleB }}</p>
    <p>Angle C: {{ props.angleC }}</p>
<br />
<p>Side a: {{ props.sideA }}</p>
<p>Side b: {{ props.sideB.toFixed(2) }}</p>
<p>Side c: {{ props.sideC.toFixed(2) }}</p>
<br />
<input type="checkbox" :checked="scale" name="scale" @change="$emit('toggleScale')"/>
<label for="scale">Scale to canvas?</label>
  </div>
  <div class="canvas_container">
    <canvas width="600" height="600" id="canvas"></canvas>
  </div>
</template>
<style scoped>
#canvas {
  fill: #ffffff;
  border: 2px solid green;
  box-shadow: 8px 8px 24px 0px rgb(12, 12, 12);
}
.stats {
  margin-inline: 16px;
  text-wrap: nowrap;
  height: fit-content;
}
p {
  margin: 2px 0;
}
input[type=checkbox]{
  transform: scale(1.5);
  cursor: pointer;
}
</style>