<template>
  <article class="choice">
    <div>
      <a href="#" v-for="(item, i) in categorys.displayNames" :key="i">
        <span>
          <img :src="getCategoryImg(i)">
        </span>

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
        names: ["all", "random", "cafe", "game", "sing", "sport"],
        displayNames: ["전체", "랜덤", "카페", "게임", "노래방", "스포츠"],
      },
    };
  },
  methods: {
    getCategoryImg(idx) {
      let name = this.categorys.names[idx];
      return require(`@/assets/img/category/${name}-B.png`)
    }
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
  height: inherit;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.choice div a {
  color: black;
  margin: 10px 10px;
}
.choice div a span {
  display: block;
  width: 90px;  height: 90px;
  line-height: 90px;
  background-color: #c4c4c4;
  border-radius: 50%;
  text-align: center;
}
.choice div a span img {
  vertical-align: middle;
}
.choice div a p {
  margin-top: 5px;
  text-align: center;
}
.choice a:hover span {
  background-color: #6a6a6a;
}
</style>