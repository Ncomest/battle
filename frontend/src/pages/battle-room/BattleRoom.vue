<script setup>
import ButtonInGame from "@components/shared/buttons/in-game/ButtonInGame.vue";
import RadioContainer from "@components/shared/input/radio-container/RadioContainer.vue";
import {computed} from "vue";

const userLogin = 'Koier';

const mokDataPl = {
  teamRed: {
    id: 1,
    login: 'Koier',
    nickname: 'Harry Potter',
    level: 4,
    stats: {
      lowDamage: 12,
      maxDamage: 24,
      critChance: 8, // %
      critPower: 240, // %
      armor: 12, // %
      evoidance: 5, // %
      parry: 10, // %
      hp: 860
    }
  },
  teamBlue: {
    id: 2,
    login: 'Satina',
    nickname: 'Terminator',
    level: 3,
    stats: {
      lowDamage: 14,
      maxDamage: 22,
      critChance: 12, // %
      critPower: 280, // %
      armor: 4, // %
      evoidance: 8, // %
      parry: 7, // %
      hp: 730
    }
  }
}

const { teamRed, teamBlue } = mokDataPl;

const myTeam = computed(() => userLogin === teamRed.login ? 'red' : 'blue');
const teamLeft = computed(() => myTeam.value === 'red' ? '--team-left' : '--team-right');
const teamRight = computed(() => myTeam.value === 'red' ? '--team-right' : '--team-left');

//===...

const mokDataBattle = {
  arenaID: 34,
  roundCounter: 2,
  winner: null,
  loser: null,
  battleIsOver: false,

  teamRed: {
    user: {
      id: 1,
      login: 'Koier',
      nickname: 'Harry Potter',
    },
    role: 'host',
    attack: 'head',
    block: 'chest',
    damaged: 15,
    currentHealth: 540,
    maxHealth: 860,
  },

  teamBlue: {
    user: {
      id: 2,
      login: 'Satina',
      nickname: 'Terminator',
    },
    role: 'connecter',
    attack: 'foot',
    block: 'head',
    damaged: 20,
    currentHealth: 470,
    maxHealth: 730,
  },
}
</script>

<template>
  <h1>Battle room</h1>
  <div class="battle-room">

    <section class="battle-room__section"
             :class="['battle-room__section' + teamLeft]"
    >
      <div class="battle-room__section__header">
        <h3>{{ teamRed.login }} <span>{{ teamRed.level }}</span> уровень</h3>
        <h4 class="battle-room__section__header__nickname battle-room__section__header__nickname--team-red">{{ teamRed.nickname }}</h4>
        <span>{{ mokDataBattle.teamRed.currentHealth }} / {{ mokDataBattle.teamRed.maxHealth }} HP</span>
        <input type="range"
               min="0"
               :max="mokDataBattle.teamRed.maxHealth"
               :value="mokDataBattle.teamRed.currentHealth"
        />
      </div>

      <div class="battle-room__stats">
        <p>Сила удара:
          <span>{{ teamRed.stats.lowDamage }} - {{ teamRed.stats.maxDamage }} ед</span>
        </p>
        <p>Шанс крита:
          <span>{{ teamRed.stats.critChance }} %</span>
        </p>
        <p>Сила крита:
          <span>{{ teamRed.stats.critPower }} %</span>
        </p>
        <p>Броня:
          <span>{{ teamRed.stats.armor }} %</span>
        </p>
        <p>Уклонение:
          <span>{{ teamRed.stats.evoidance }} %</span>
        </p>
        <p>Паррировние:
          <span>{{ teamRed.stats.parry }} %</span>
        </p>
        <p>Здоровье:
          <span>{{ teamRed.stats.hp }} ед</span>
        </p>
      </div>
    </section>

    <div class="battle-room__outside-container">
      <form action="" class="battle-room__form">
        <div>
          <h3>Атака</h3>
          <radio-container id="attack-head" title="Голова" name="attack" />
          <radio-container id="attack-chest" title="Грудь" name="attack" />
          <radio-container id="attack-maw" title="Живот" name="attack" />
          <radio-container id="attack-foot" title="Ноги" name="attack" />
        </div>
        <div>
          <h3>Защита</h3>
          <radio-container id="block-head" title="Голова" name="block" />
          <radio-container id="block-chest" title="Грудь" name="block" />
          <radio-container id="block-maw" title="Живот" name="block" />
          <radio-container id="block-foot" title="Ноги" name="block" />
        </div>
      </form>
      <button-in-game text="Вперед!" />
    </div>

    <section class="battle-room__section"
             :class="['battle-room__section' + teamRight]"
    >
      <div class="battle-room__section__header">
        <h3>{{ teamBlue.login }} {{ teamBlue.level }} уровень</h3>
        <h4 class="battle-room__section__header__nickname battle-room__section__header__nickname--team-blue">{{ teamBlue.nickname }}</h4>
        <span>{{ mokDataBattle.teamBlue.currentHealth }} / {{ mokDataBattle.teamBlue.maxHealth }} HP</span>
        <input type="range"
               min="0"
               :max="mokDataBattle.teamBlue.maxHealth"
               :value="mokDataBattle.teamBlue.currentHealth"
        />
      </div>

      <div class="battle-room__stats">
        <p>Сила удара:
          <span>{{ teamBlue.stats.lowDamage }} - {{ teamBlue.stats.maxDamage }} ед</span>
        </p>
        <p>Шанс крита:
          <span>{{ teamBlue.stats.critChance }} %</span>
        </p>
        <p>Сила крита:
          <span>{{ teamBlue.stats.critPower }} %</span>
        </p>
        <p>Броня:
          <span>{{ teamBlue.stats.armor }} %</span>
        </p>
        <p>Уклонение:
          <span>{{ teamBlue.stats.evoidance }} %</span>
        </p>
        <p>Паррировние:
          <span>{{ teamBlue.stats.parry }} %</span>
        </p>
        <p>Здоровье:
          <span>{{ teamBlue.stats.hp }} ед</span>
        </p>
      </div>
    </section>

  </div>
    <RouterLink to="/lobby">Покинуть бой</RouterLink>
</template>

<style src="./style.scss"></style>
