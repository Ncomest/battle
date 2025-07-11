<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

// Объект для хранения данных формы
const formData = ref({
  email: "",
  password: "",
});

// Функция обработки отправки формы
const handleSubmit = () => {
  // Валидация (можно добавить больше проверок)
  if (!formData.value.email || !formData.value.password) {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  // Подготовка объекта для отправки
  const dataToSend = {
    email: formData.value.email.trim(),
    password: formData.value.password,
  };

  // Здесь будет запрос на бэкенд
  console.log(dataToSend);
  // sendToBackend(dataToSend);
};

// Функция для отправки данных (замените на реальный запрос)
const sendToBackend = async (data) => {
  try {
    // Пример запроса с fetch
    const response = await fetch("https://your-api-endpoint.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Ошибка сети");

    const result = await response.json();
    console.log("Успешно:", result);
    // Действия после успешной отправки
  } catch (error) {
    console.error("Ошибка:", error);
    // Обработка ошибок
  }
};
</script>

<template>
  <div class="auth-page">
    <form @submit.prevent="handleSubmit" class="auth-page__form">
      <div class="input-group">
        <label class="input-label">Login</label>
        <input type="text" class="form-input" placeholder="Login" />
      </div>
      <div class="auth-page__input-container">
        <label for="password">Password</label>
        <input
          v-model="formData.password"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div>
        <button type="submit">click</button>
      </div>
    </form>
    <RouterLink :to="{ name: 'Lobby' }">в лобби</RouterLink>
  </div>
</template>

<style src="./style.scss"></style>
