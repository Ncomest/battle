<script setup>
defineProps({
  title: { type: String, required: true },
  id: { type: String, required: true },
  type: { type: String, default: 'text' },
  placeholder: { type: String, required: true },
  modelValue: { type: String, required: true },
});

const emit = defineEmits(['update:modelValue']);

function onInput(e) {
  emit('update:modelValue', e.target.value);
}
</script>

<template>
  <div class="input-container">
    <label :for="id">{{ title }}</label>
    <input :type="type" @input="onInput" :value="modelValue" :id :placeholder />
  </div>
</template>

<style src="./style.scss"></style>
