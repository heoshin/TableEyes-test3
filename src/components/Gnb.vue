<template>
  <div class="gnb">
    <div @click="OnClickGNB(0)" :class="{ active: activeMenuIdx == 0 }">
      <span>검색</span>
    </div>
    <div @click="OnClickGNB(1)" :class="{ active: activeMenuIdx == 1 }">
      <span>찜</span>
    </div>
    <div @click="OnClickGNB(2)" :class="{ active: activeMenuIdx == 2 }">
      <span>홈</span>
    </div>
    <div @click="OnClickGNB(3)" :class="{ active: activeMenuIdx == 3 }">
      <span>최근</span>
    </div>
    <div @click="OnClickGNB(4)" :class="{ active: activeMenuIdx == 4 }">
      <span>마이</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenuIdx: 2,
      gnbCenterButon: false,
    };
  },
  methods: {
    OnClickGNB(idx) {
      switch (idx) {
        case 0:
          this.$router.push("/search");
          break;
        case 1:
          this.$router.push("/wishList");
          break;
        case 2:
          if (this.activeMenuIdx == idx) {
            this.gnbCenterButon = !this.gnbCenterButon;
          }
          if (this.gnbCenterButon) {
            this.$router.push("/home");
          } else {
            this.$router.push("/storeList");
          }
          break;
        case 3:
          this.$router.push("/history");
          break;
        case 4:
          this.$router.push("/myPage");
          break;
      }
      this.activeMenuIdx = idx;
    },
  },
};
</script>

<style>
.gnb {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  background: lightgray;
  width: 414px;
  height: 40px;
  border-radius: 15px 15px 0px 0px;
}
.gnb > div {
  float: left;
  width: calc(414px / 5);
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.gnb > div > span {
  cursor: default;
  font-size: 16px;
  vertical-align: middle;
}
.gnb > div.active {
  background-color: #c653ff;
  border-radius: 15px;
}
</style>