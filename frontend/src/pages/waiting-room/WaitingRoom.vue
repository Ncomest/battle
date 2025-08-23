<script setup>
import ButtonInGame from '@components/shared/buttons/in-game/ButtonInGame.vue'
import InputContainer from '@components/shared/input/container/InputContainer.vue'
import { computed, ref } from 'vue'
import InputInGame from '@components/shared/input/in-game/InputInGame.vue'

// Данные комнаты получаем с бэка
const mokData = {
  players: [
    {
      id: 1,
      login: 'Satina',
      level: 12,
      role: 'host',
      nickname: null,
      ready: false,
    },
    // {
    //   id: 2,
    //   login: 'Mikel',
    //   level: 4,
    //   role: 'connecter',
    //   nickname: 'Volkolak',
    //   ready: true,
    //   isEmpty: false,
    // },
    {
      id: null,
      login: null,
      level: null,
      role: 'connecter',
      nickname: null,
      ready: null,
      isEmpty: true,
    },
  ],
}

// Данные авторизованного пользователя
const mokDataPlayer = {
  id: 1,
  login: 'Satina',
  nickname: null,
  level: 12,
}

// const mokDataPlayer = {
//   id: 1,
//   login: 'Mikel',
//   level: 12,
// }

// Активируем кнопку "Начать поединок"
const isCanStart = computed(() => {
  const isHost = mokData.players.some(
    (player) => player.role === 'host' && player.login === mokDataPlayer.login
  )
  const isAllReady = mokData.players.every(
    (player) => player.ready && player.nickname !== null
  )
  const playerQuantity = mokData.players.length === 2

  return isHost && isAllReady && playerQuantity
})

// Определяем текущего игрока
const myChooseNickname = computed(() =>
  mokData.players.find((player) => player.login === mokDataPlayer.login)
)

// Проверяем есть ли 2ой игрок
const isTwoPlayers = computed(() =>
  mokData.players.some((p) => p.isEmpty === true)
)

// Определяем второго игрока
const enemyChooseNickName = computed(() =>
  mokData.players.find((player) => player.login !== mokDataPlayer.login)
)

// Готовность участников
const playersReady = computed(() => {
  const allReady = mokData.players.every((p) => p.ready === true)
  const playerQuantity = mokData.players.length === 2

  return allReady && playerQuantity
})

// Выбираем Ник
const selectNickname = ref('')

// Кинуть инвайт
const invitePlayer = ref('')
console.log('invitePlayer', invitePlayer.value)
</script>

<template>
  <section class="meet-room">
    <div class="meet-room__await-section">
      <div
        class="meet-room__await-section__await-nickname"
        v-if="myChooseNickname.nickname"
      >
        <h4>Вы выбрали:</h4>
        <p>{{ myChooseNickname.nickname }}</p>
        <button-in-game text="отменить выбор" />
      </div>
      <div v-else class="meet-room__await-section__await-nickname">
        <h4>Придумайте ник</h4>
        <input-in-game
          id="meet-room-select-nickname"
          placeholder="От 4 до 10 букв"
          name="meet-room-select-nickname"
          v-model="selectNickname"
        />
        <button-in-game text="Подтвердить выбор" type="submit" />
      </div>
      <div class="meet-room__await-section__await-nickname">
        <template v-if="isTwoPlayers">
          <h4>Пригласить противника</h4>
          <input-in-game
            id="invite-to-match"
            placeholder="Введите логин"
            name="invite-to-match"
            v-model="invitePlayer"
          />
          <button-in-game text="Пригласить" />
        </template>

        <template v-else>
          <h4>
            <span> {{ enemyChooseNickName.login }} </span>
            {{
              enemyChooseNickName.nickname
                ? 'сделал свой выбор!'
                : 'выбирает ник'
            }}
          </h4>
          <p>{{ enemyChooseNickName.nickname ?? 'Придумывает...' }}</p>
          <button-in-game
            v-if="
              myChooseNickname.role === 'host' &&
              myChooseNickname.ready !== true
            "
            text="Выгнать игрока"
          />
        </template>
      </div>
    </div>

    <div class="meet-room__waiting-player">
      <p v-if="!playersReady">Ожидаем готовности игроков...</p>
      <p v-else>Все участиники готовы!</p>
      <ul class="meet-room__waiting-list">
        <li
          v-for="user in mokData.players"
          class="meet-room__waiting-item"
          :class="{
            'meet-room__waiting-item--ready':
              user.ready && user.nickname !== null,
          }"
        ></li>
      </ul>
      <button-in-game text="Начать поединок!" v-if="isCanStart" />
    </div>
  </section>

  <RouterLink to="battle-room">начать бой</RouterLink>
</template>

<style src="./style.scss"></style>
