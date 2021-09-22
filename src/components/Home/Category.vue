<template>
  <article class="choice">
    <div>
      <a href="#" v-for="(item, i) in categorys.names" :key="i">
        <span></span>
        <p>{{ item }}</p>
      </a>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      categorys: {
        names: ["전체", "영화", "노래방", "스포츠", "pc방", "보드게임"],
      },
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}

.choice {
  width: 414px;
  height: inherit;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 0px 15px;
}
.choice div {
  width: 414px;
  height: inherit;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.choice div a {
  color: black;
  margin-right: 30px;
  margin-top: 20px;
}
.choice div a span {
  display: block;
  width: 90px;
  height: 90px;
  background-color: #c4c4c4;
  border-radius: 50%;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
}
.choice div a p {
  margin-top: 5px;
  text-align: center;
}
.choice a:hover span {
  background-color: #6a6a6a;
}
</style>