<script setup>
defineProps({
  text: { type: String, required: true },
});
</script>

<template>
  <button class="button-in-game" type="button">{{ text }}</button>
</template>

<style src="./style.scss"></style>