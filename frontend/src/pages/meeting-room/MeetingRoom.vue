<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const messages = ref([]);
const inputMessage = ref("");
let socket = null;

const connectWebSocket = () => {
  socket = new WebSocket("ws://localhost:3000");

  socket.onopen = () => {
    console.log("WebSocket connect OPEN");
  };

  socket.onmessage = (e) => {
    console.log(e.data)
    messages.value.push(JSON.parse(e.data))
  }

  socket.onerror = () => {
    console.log("Websocket connect OFF");
  };
};

const sendMessage = () => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({ message: inputMessage.value }));

    // messages.value.push({ text: `You: ${inputMessage.value}` });

    inputMessage.value = "";
  }
};

onUnmounted(() => socket ? socket.close() : null);
onMounted(connectWebSocket);

</script>
<template>
  <h2>WebSocket</h2>
  <div
    v-for="(msg, index) in messages"
    :key="index"
  >
    {{ msg.message }}
  </div>
  <div>
    <input type="text" v-model="inputMessage" placeholder="Введите сообщение" />
    <button @click="sendMessage">Отправить</button>
  </div>

  <!-- <div>
    <div>
      <label for="">invite your friend</label>
      <input type="text" name="" id="" placeholder="id" />
    </div>
    <div>
      <label for="">your nickname</label>
      <input type="text" name="" id="" placeholder="nick" />
    </div>
    <div>
      <label for="">готовность</label>
      <input type="checkbox" name="" id="" />
    </div>
  </div> -->
  <RouterLink to="battle-room">начать бой</RouterLink>
</template>

<style scoped>
.messages {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
  height: 200px;
  overflow-y: auto;
}
.server {
  color: #42b983;
}
.client {
  color: #647eff;
}
</style>
