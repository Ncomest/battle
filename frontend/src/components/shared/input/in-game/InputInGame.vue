<script setup>
defineProps({
  title: { type: String },
  type: { type: String, default: 'text' },
  id: { type: String, required: true },
  name: { type: String },
  placeholder: { type: String, required: true },
  modelValue: { type: String, required: true },
})

const emit = defineEmits(['update:modelValue'])

function onInput(e) {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <label :for="id">
    {{ title }}
    <input
      class="input-in-game__input"
      :type="type"
      :name
      :id
      :placeholder
      @input="onInput"
      :value="modelValue"
    />
  </label>
</template>

<style src="./style.scss"></style>
