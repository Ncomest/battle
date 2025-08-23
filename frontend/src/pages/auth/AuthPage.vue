<script setup>
import { reactive, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import ButtonSystem from '@components/shared/buttons/system/ButtonSystem.vue'
import InputInGame from '@components/shared/input/in-game/InputInGame.vue'
import { useAuth } from '@/composables/useAuth.ts'

const { login } = useAuth()
const router = useRouter()

// Объект для хранения данных формы
const auth = ref({
  login: '',
  password: '',
})

const error = ref('')

// Функция обработки отправки формы
const handleSubmit = async () => {
  const success = await login(auth.value.login, auth.value.password)

  if (success) {
    router.push('/lobby')
  } else {
    error.value = 'Login failed.'
  }
}

// Функция для отправки данных (замените на реальный запрос)
// const sendToBackend = async () => {
//   try {
//     // Пример запроса с fetch
//     const response = await fetch('http://localhost:3000/api/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(auth),
//     })
//
//     if (!response.ok) throw new Error('Ошибка сети')
//
//     const result = await response.json()
//     localStorage.setItem('token', result.token)
//     console.log('Успешно:', result)
//     // Действия после успешной отправки
//   } catch (error) {
//     console.error('Ошибка:', error)
//     // Обработка ошибок
//   }
// }
</script>

<template>
  <div class="auth-page">
    <form class="auth-page__form">
      <div class="auth-page__form__input-group">
        <h4>Логин:</h4>
        <span>{{ auth.login }}</span>
        <input-in-game
          id="login"
          v-model="auth.login"
          placeholder="Введите логин"
        />
      </div>
      <div class="auth-page__form__input-group">
        <h4>Пароль:</h4>
        <span>{{ auth.password }}</span>
        <input-in-game
          id="password"
          v-model="auth.password"
          placeholder="Введите пароль"
          type="password"
        />
      </div>
      <div>
        <button-system
          class="auth-page__form__button"
          text="Войти"
          @click="handleSubmit"
        />
      </div>
    </form>
    <RouterLink :to="{ name: 'Lobby' }">в лобби</RouterLink>
  </div>
</template>

<style src="./style.scss"></style>
