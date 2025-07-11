<script setup>
defineProps({
  text: { type: String, required: true },
});
</script>

<template>
  <button class="button-blue">{{ text }}</button>
</template>

<style src="./style.scss"></style>
