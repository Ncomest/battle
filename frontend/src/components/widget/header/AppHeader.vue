<script setup>
import { ref } from 'vue';
import ButtonSystem from '@components/shared/buttons/system/ButtonSystem.vue';

const user = ref({
  id: 2,
  login: 'Mikel',
  level: 12,
  auth: true,
  nickname: null,
  currentXP: 55,
  maxXP: 100,
});
</script>

<template>
  <header class="app-header">
    <div v-if="user.auth" class="app-header__wrapper">
      <div class="app-header__login">{{ user.login }}</div>
      <div class="app-header__level-container">
        <span class="app-header__level">{{ user.level }}</span>
        <span>уровень</span>
      </div>
      <input type="range" min="0" :max="user.maxXP" :value="user.currentXP" />
      <div class="app-header__xp-container">
        <span>{{ user.currentXP }}</span>
        <span>/</span>
        <span>{{ user.maxXP }}</span>
        <span>XP</span>
      </div>
    </div>

    <div class="app-header__profile-wrapper">
      <div v-if="user.auth" class="app-header__logout">
        <button-system text="Выйти" @click="user.auth = false" />
      </div>

      <div v-else class="app-header__sign-in-register">
        <a href="#">Регистрация</a>
        <!--        <a href="#" @click="user.auth = true">Войти</a>-->
        <router-link @click="user.auth = true" to="/login">Войти</router-link>
      </div>
    </div>
  </header>
</template>

<style src="./style.scss"></style>
