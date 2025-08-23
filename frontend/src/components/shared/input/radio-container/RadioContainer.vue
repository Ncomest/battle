<script setup>
  defineProps({
    title: {type: String, required: true},
    id: {type: String, required: true},
    name: {type: String, required: true},
  })
</script>

<template>
  <div class="radio-container">
    <label :for="id">{{ title }}</label>
    <input type="radio" :name :id />
  </div>
</template>

<style src="./style.scss"></style>