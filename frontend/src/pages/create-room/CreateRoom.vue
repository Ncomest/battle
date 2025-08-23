<script setup>
import { ref } from 'vue';
import { socket } from '@/ws/ws.js';
import router from '@/router/index.js';
import ButtonSystem from '@components/shared/buttons/system/ButtonSystem.vue';
import InputContainer from '@components/shared/input/container/InputContainer.vue';

const roomName = ref('');
const password = ref('');
// const mode = ref('');

const createRoom = () => {
  socket.emit('createRoom', {
    roomName: roomName.value,
    password: password.value || null,
  });
};

socket.once('roomCreated', (roomId) => {
  router.push(`waiting-room/${roomId}`);
});

// если комната создана , получает ответ от сервера и редиректит на страницу с боем
</script>
<template>
  <section class="create-room">
    <h1>Создание комнаты</h1>
    <form class="create-room__form">
      <input-container
        title="Название комнаты:"
        id="create-room-input-name-of-room"
        placeholder="Название комнаты"
        v-model="roomName"
      />

      <input-container
        title="Поставить пароль:"
        id="create-room-input-name-of-room"
        placeholder="Поставить пароль"
        v-model="password"
      />

      <!--      <div>-->
      <!--        <ul>-->
      <!--          Режим PvP-->
      <!--          <li class="create-room__form__list">-->
      <!--            <label for="">1 x 1:</label>-->
      <!--            <input @click="" type="radio" id="" min="1" max="2" checked />-->
      <!--          </li>-->
      <!--        </ul>-->
      <!--      </div>-->
      <button-system @click="createRoom" text="Создать" />
      <RouterLink to="/waiting-room">В комнату ожидания...</RouterLink>
    </form>
    <RouterLink to="/lobby">назад в лобби</RouterLink>
  </section>
</template>

<style src="./style.scss"></style>
