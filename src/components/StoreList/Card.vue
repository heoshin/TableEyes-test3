<template>
  <div class="card">
    <div class="card-thumbnail">
      <img :src="store.logo" />
    </div>
    <div class="card-info">
      <div id="info-title">{{ store.name }}</div>
      <span class="mainStoreStar"><span :style="starWidth"></span></span>

      <div id="info-time">
        <img src="@/assets/time.png" />{{ store.openTime }}~{{ store.closeTime }}
      </div>

      <div id="info-distance">{{distance}}m<img src="@/assets/distance.png" /></div>
      <div id="info-count">
        <img :src="getCountSrc()" />{{ store.nowPerson }}/{{ store.maxPerson }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    store: Object,
  },
  data() {
    return {
      starWidth: {
        width: this.store.detail.star * 20 + "%",
      },
      distance: 0,
    };
  },
  methods: {
    getCountSrc() {
      // let curCountSrc = require("@/assets/count_" +
      //   (parseInt((this.store.nowPerson / this.store.maxPerson) * 3) + 1) +
      //   ".png");
      let curCountSrc = 3;
      return curCountSrc;
    },
  },
};
</script>

<style scoped>
.card {
  margin: 0 auto;
  width: 100%;
  height: 100px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.card-thumbnail {
  float: left;
  width: 100px;
  height: 100px;
  background-color: #f4e2f6;
  border-radius: 20px;
  line-height: 100px;
  text-align: center;
}
.card-thumbnail img {
  width: 85%;
  margin: 0 auto;
  vertical-align: middle;
  border-radius: 50%;
  border: solid 5px white;
}

.card-info {
  position: relative;
  float: left;
  width: calc(100% - 100px);
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
#info-title {
  font-size: 18px;
  font-weight: 900;
}

.mainStoreStar {
  width: 90px;
  margin-top: 10px;
}
.mainStoreStar,
.mainStoreStar span {
  display: inline-block;
  height: 12px;
  overflow: hidden;
  background: url(../../assets/img/star.png) no-repeat;
  background-size: auto 24px;
}
.mainStoreStar span {
  background-position: left bottom;
  line-height: 0;
  vertical-align: top;
}

#info-time {
  margin-top: 5px;
  line-height: 30px;
  font-size: 20px;
}
#info-time img {
  height: 15px;
  padding-right: 5px;
  vertical-align: middle;
}
#info-distance {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 16px;
}
#info-distance img {
  height: 30px;
  vertical-align: -5px;
}
#info-count {
  position: absolute;
  top: 40px;
  right: 20px;
  font-size: 18px;
  font-weight: bold;
}
#info-count img {
  height: 60px;
  vertical-align: -25px;
  margin-right: -10px;
}
</style>