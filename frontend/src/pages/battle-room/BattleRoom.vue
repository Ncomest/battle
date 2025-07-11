<script></script>
<template>
  <h1>Battle room</h1>
  <div>
    <h2>Login: Firilenin</h2>
    <h3>Nick Avatar: Harry Potter</h3>
    <h4>Level: 4</h4>
    <span>100 / 100 HP</span>
    <div>
      <p>Сила удара: 19-23 ед</p>
      <p>Шанс крита: 8%</p>
      <p>Сила крита: 224%</p>
      <p>Точность: 5%</p>
      <p>Броня: 12%</p>
      <p>Уклонение: 20%</p>
      <p>Паррировние: 7%</p>
      <p>Здоровье: 740 ед</p>
    </div>

    <section>
      <form action="" style="display: flex">
        <div>
          <h3>Attack</h3>
          <div>
            <label for="">удар в голову</label>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <label for="">удар в грудь</label>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <label for="">удар в живот</label>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <label for="">удар в ноги</label>
            <input type="checkbox" name="" id="" />
          </div>
        </div>
        <div>
          <h3>Защита</h3>
          <div>
            <label for="">Блок головы</label>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <label for="">Блок груди</label>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <label for="">Блок живота</label>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <label for="">Блок ног</label>
            <input type="checkbox" name="" id="" />
          </div>
        </div>
      </form>
      <button>Вперед!</button>
    </section>
    <RouterLink to="/lobby">Покинуть бой</RouterLink>
  </div>
</template>
