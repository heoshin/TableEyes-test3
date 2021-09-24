<template>
  <div class="storeName">
    <p>{{title}}</p>
    <div class="storeStar">
      <span class="mainStoreStar"><span :style="starWidth"></span></span>
      <span class="star-1">{{star}}</span>
      <span class="star-2">|</span>
      <span class="distance">{{distance}}m</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    star: Number,
    distance: Number,
  },
  data() {
    return {
      starWidth: {
        "width": this.star * 20 + "%"
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.storeName {
  width: 414px;
  height: 63px;

  margin-top: 28px;
  padding-left: 21px;
}

.storeName p {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 30px;
}
/* 매장기본정보란 별점 */
.storeName .storeStar {
  margin-top: 12px;
}

.storeName .storeStar .mainStoreStar {
  width: 63px;
}

.storeName .storeStar .mainStoreStar,
.storeName .storeStar .mainStoreStar span {
  display: inline-block;
  height: 12px;
  overflow: hidden;
  background: url(../../../assets/img/star.png) no-repeat;
  background-size: auto 24px;
}

.storeName .storeStar .mainStoreStar span {
  background-position: left bottom;
  line-height: 0;
  vertical-align: top;
}
/* 별점, 거리 사이 "|"  */
.star-1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  margin-left: 9px;
}

.star-2 {
  color: #dfdfdf;

  margin: 0px 12px;
}

.distance {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.3px;

  color: #ff0000;
}
</style>