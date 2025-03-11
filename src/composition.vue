<script setup>
import { ref, onMounted } from 'vue'
const name = ref("John")
const status = ref("active")
const tasks = ref(["One", "Two", "Three"])
const newTask = ref('')

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending"
  } else {
    status.value = "active"
  }
}
const addTask = () => {
  if (newTask.value.trim() != ''){
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
}

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    tasks.value = data.map((task)=> task.title)
  } catch (error) {
    console.log("error")
  }
});
</script>
<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

<form @submit.prevent="addTask">
  <label for="newTask">Add task</label>
  <input type="text" id="newTask" name="newTask" v-model="newTask" />
  <button type="submit">Submit</button>
</form>

  <h3>Tasks</h3>
  <Ul></Ul>
  <li v-for="(task, index) in tasks" :key="task">
    <span>{{ task }}</span>
    <button @click="deleteTask(index)">X</button>
  </li>
  <!-- <a :href="link">Google</a> -->
  <a v-bind:href="link">Google</a>
  <!-- <button v-on:click="toggleStatus">Change status</button> -->
  <button @click="toggleStatus">Change status</button>
</template>