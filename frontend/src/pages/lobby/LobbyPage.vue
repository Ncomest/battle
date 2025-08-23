<script setup lang="ts">
// import { useListMatches } from '@/composables/useListMatches.ts';
import { onMounted, ref } from 'vue';
import ButtonSystem from '@components/shared/buttons/system/ButtonSystem.vue';
import LinkSystem from '@components/shared/links/LinkSystem.vue';
import { socket } from '@/ws/ws';
import router from '@/router';

// type waitingRoomListType = {
//   waitingRoomName: string;
//   hostName: string;
//   waitingRoomID: number;
//   currentPlayers: number;
//   maxPlayers: number;
//   waitingRoomPassword: boolean;
// };

// const waitingRoomsList: waitingRoomListType[] = [
//   {
//     waitingRoomName: 'Cherezard',
//     hostName: 'Charls',
//     waitingRoomID: 14,
//     currentPlayers: 1,
//     maxPlayers: 2,
//     waitingRoomPassword: true,
//   },
//   {
//     waitingRoomName: 'Laxat',
//     hostName: 'Koiler',
//     waitingRoomID: 12,
//     currentPlayers: 1,
//     maxPlayers: 2,
//     waitingRoomPassword: true,
//   },
//   {
//     waitingRoomName: 'Koasdk',
//     hostName: 'Jous',
//     waitingRoomID: 6,
//     currentPlayers: 2,
//     maxPlayers: 2,
//     waitingRoomPassword: false,
//   },
// ]

// const waitingRoomsList = ref<waitingRoomListType[] | null>(null);

const rooms = ref<
  {
    id: string;
    roomName: string;
    playersCount: number;
  }[]
>([]);

onMounted(() => {
  socket.emit('get-rooms');

  socket.on('roomsList', (list: any) => (rooms.value = list));
});

const selectedRoomId = ref<string | null>(null);

const handleSelectRoomId = (id: string) => {
  selectedRoomId.value = id;
};

const handleConnectToRoom = () => {
  if (selectedRoomId) socket.emit('connectToRoom', selectedRoomId.value);

  socket.on('playerJoined', ({ players, roomId }) => {
    console.log(`Вы подключены к комнате ${roomId}, игроки:`, players);

    // Переброс на страницу ожидания
    router.push(`/waiting-room/${roomId}`);
  });
};

// onMounted(async () => (waitingRoomsList.value = await useListMatches()));
//
// const handleUpdateList = async () => {
//   waitingRoomsList.value = await useListMatches();
//   console.log(waitingRoomsList.value);
// };
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
        <!--        <tr v-for="(room, index) in waitingRoomsList" :key="room.waitingRoomID">-->
        <!--          <td>{{ index + 1 }}</td>-->
        <!--          <td>{{ room.waitingRoomName }}</td>-->
        <!--          <td>{{ room.hostName }}</td>-->
        <!--          <td>{{ room.waitingRoomID }}</td>-->
        <!--          <td>{{ room.currentPlayers }}/{{ room.maxPlayers }}</td>-->
        <!--          <td>{{ room.waitingRoomPassword ? 'пароль' : '' }}</td>-->
        <!--        </tr>-->
        <tr v-for="(room, index) in rooms" :key="room.id">
          <td>{{ index + 1 }}</td>
          <td>{{ room.roomName }}</td>
          <td>HostName</td>
          <td @click="handleSelectRoomId(room.id)">{{ room.id }}</td>
          <td>currentPlayers/{{ room.playersCount }}</td>
          <td>password</td>
        </tr>
      </tbody>
    </table>
    <div class="lobby__button-container">
      <link-system to="/create-room" text="Создать" />
      <button-system text="Подключиться" @click="handleConnectToRoom" />
      <p>Выбрана ID комнаты: {{ selectedRoomId }}</p>
      <button-system class="lobby__button" text="Обновить список" />
      <!--        @click="handleUpdateList"-->
    </div>
  </section>
</template>
<style src="./style.scss"></style>
