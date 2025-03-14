<script setup lang="ts">
import getDegrees from '@/functions/getDegrees';
import { onMounted, onUpdated, ref, type Ref } from 'vue';
const emit = defineEmits(['calcTriangle', 'toggleScale'])
const props = defineProps({
  angleA: { type: Number, required: true },
  angleB: { type: Number, required: true },
  angleC: { type: Number, required: true },
  sideA: { type: Number, required: true },
  sideB: { type: Number, required: true },
  sideC: { type: Number, required: true },
  scale: { type: Boolean, required: true },
  inscribedRadius: { type: Number, required: true },
  circumscribedRadius: { type: Number, required: true }
})
const canvas = ref()
const ctx: Ref<CanvasRenderingContext2D | undefined> = ref()
const size = ref({
  width: 600,
  height: 400
})
const getScaleFactor = () => {
  if (size.value.height > size.value.width) {
    return ((size.value.height / 2) - 20) / props.circumscribedRadius
  } else return ((size.value.width / 2) - 20) / props.circumscribedRadius
}
const drawTriangle = () => {
  const h = Math.sin(getDegrees(props.angleB)) * props.sideC
  const x = Math.cos(getDegrees(props.angleB)) * props.sideC
  let middleH = 0
  if(props.sideA != 0 && props.sideB!=0){
    middleH = +(props.sideA/(2*props.sideB)*100).toFixed(2)
  }
  const pointZero = {
    x: (size.value.width / 2)-(props.sideA/2),
    y: (size.value.height / 2)-(+(middleH/3).toFixed(2))
  }
  ctx.value?.clearRect(0, 0, size.value.width, size.value.height)
  ctx.value!.strokeStyle = "#ffffff"
  if (!props.scale) {
    ctx.value?.beginPath()
    ctx.value?.moveTo(pointZero.x, pointZero.y)
    ctx.value?.arc(pointZero.x, pointZero.y, props.circumscribedRadius, 0, 2*Math.PI)
    ctx.value?.lineTo(pointZero.x+props.sideA, pointZero.y)
    ctx.value?.lineTo(pointZero.x - x + props.sideA, pointZero.y + h)
    ctx.value?.lineTo(pointZero.x, pointZero.y)
    ctx.value?.moveTo(size.value.width/2, 0)
    ctx.value?.lineTo(size.value.width/2, size.value.height)
    ctx.value?.moveTo(0, size.value.height/2)
    ctx.value?.lineTo(size.value.width, size.value.height/2)
    ctx.value?.stroke()
  } else {
    const scaleFactor = getScaleFactor()
    ctx.value?.beginPath()
    ctx.value?.moveTo(size.value.width / 2, size.value.height / 2)
    ctx.value?.lineTo(size.value.width / 2 + props.sideA, size.value.height / 2)
    console.log(pointZero)
  }



}
onMounted(() => {
  canvas.value = document.getElementById("canvas")
  ctx.value = canvas.value.getContext("2d")
})
onUpdated(() => {
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
    <p>r: {{ props.inscribedRadius }}</p>
    <p>R: {{ props.circumscribedRadius }}</p>
    <br />
    <input type="checkbox" :checked="props.scale" name="scale" @change="$emit('toggleScale')" />
    <label for="scale">Scale to canvas?</label>
  </div>
  <div class="canvas_container">
    <canvas :width="size.width" :height="size.height" id="canvas"></canvas>
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

input[type=checkbox] {
  transform: scale(1.5);
  cursor: pointer;
}
</style>