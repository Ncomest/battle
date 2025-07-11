<script>
import { RouterLink } from "vue-router";

// если комната создана , получает ответ от сервера и редиректит на страницу с боем

</script>
<template>
  <div>
    <h1>Создание комнаты</h1>
    <form action="">
      <div>
        <label for="">название комнаты</label>
        <input
          type="text"
          value=""
          name=""
          id=""
          placeholder="Название комнаты"
        />
      </div>
      <div>
        <label for="">пароль комнаты</label>
        <input type="password" name="" id="" placeholder="Пароль комнаты" />
      </div>
      <div>
        <ul>Режим PvP
          <li>
            <label for="">1 x 1</label>
            <input type="checkbox" name="" id="" min="1" max="2" checked />
          </li>
        </ul>
      </div>
      <button type="submit">Создать</button>
      <RouterLink to="/meeting-room">в бой</RouterLink>
    </form>
    <RouterLink to="/lobby">назад в лобби</RouterLink>
  </div>
</template>
