<script setup lang="ts">
import { RouterLink } from "vue-router";

type waitingRoomListType = {
  waitingRoomName: string;
  hostName: string;
  waitingRoomID: number;
  currentPlayers: number;
  maxPlayers: number;
  waitingRoomPassword: boolean;
};

const waitingRoomsList: waitingRoomListType[] = [
  {
    waitingRoomName: "Cherezard",
    hostName: "Charls",
    waitingRoomID: 14,
    currentPlayers: 1,
    maxPlayers: 2,
    waitingRoomPassword: true,
  },
  {
    waitingRoomName: "Laxat",
    hostName: "Koiler",
    waitingRoomID: 12,
    currentPlayers: 1,
    maxPlayers: 2,
    waitingRoomPassword: true,
  },
  {
    waitingRoomName: "Koasdk",
    hostName: "Jous",
    waitingRoomID: 6,
    currentPlayers: 2,
    maxPlayers: 2,
    waitingRoomPassword: false,
  },
];
</script>

<template>
  <h1>Лобби</h1>
  <section class="lobby">
    <table class="lobby__table">
      <thead class="lobby__table__head">
        <tr>
          <th>№</th>
          <th>Название комнаты</th>
          <th>HOST</th>
          <th>ID комнаты</th>
          <th>Количество игроков</th>
          <th>Пароль</th>
        </tr>
      </thead>
      <tbody class="lobby__table__body">
        <tr v-for="(room, index) in waitingRoomsList" :key="room.waitingRoomID">
          <td>{{ index + 1}}</td>
          <td>{{ room.waitingRoomName }}</td>
          <td>{{ room.hostName }}</td>
          <td>{{ room.waitingRoomID }}</td>
          <td>{{ room.currentPlayers }}/{{ room.maxPlayers }}</td>
          <td>{{ room.waitingRoomPassword ? "пароль" : "" }}</td>
        </tr>
      </tbody>
    </table>
    <div class="lobby__button-container">
      <button class="lobby__button" type="button">Создать</button>
      <button class="lobby__button" type="button">Подключиться</button>
      <button class="lobby__button" type="button">Обновить список</button>
    </div>
  </section>
  <RouterLink to="/create-room">Create Room</RouterLink>
</template>
<style src="./style.scss"></style>
