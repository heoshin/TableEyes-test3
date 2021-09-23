<template>
  <div class="storeBox">
    <div class="photoBox">
      <div class="Photo" :style="getStorePhotoBgStyle(0)"></div>
      <img :src="imgUrl" @click="like" alt="" class="heart" />
    </div>
    <div class="storeInfoBox">
      <div class="storeInfo">
        <span class="storeName">{{ title }}</span>
        <span class="storeDistance">{{ distance }} m</span>
        <div class="block">
          <span class="storeStar">{{ Star }}</span>
          <span class="storeCategory">{{ Category }}</span>
        </div>
      </div>
      <a href="#">바로가기</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    photo: String,
    distance: Number,
    Star: Number,
    Category: String,
  },
  data() {
    return {
      isHearted: false,
      imgUrl: require("@/assets/img/unheart.png"),
    };
  },
  methods: {
    like() {
      if (this.isHearted == true) {
        this.imgUrl = require("@/assets/img/unheart.png");
        this.isHearted = false;
      } else {
        this.imgUrl = require("@/assets/img/하트.png");
        this.isHearted = true;
      }
    },
    getStorePhotoBgStyle(id) {
      let arr = [this.photo];
      return { backgroundImage: `url(${arr[id]})` };
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.storeBox {
  overflow: hidden;
  margin-bottom: 16px;
  padding: 0px 20px;
}

.photoBox {
  float: left;
  width: 136px;
  height: 110px;
  position: relative;
}

.Photo {
  position: relative;

  width: 136px;
  height: 110px;

  background-color: #c4c4c4;
  background-image: url({photo});
  background-size: 136px 110px;
  border-radius: 10px;
}

.heart {
  position: absolute;
  top: 13px;
  right: 10px;

  width: 25px;
  height: 25px;
}

.storeInfoBox {
  float: left;
  margin-left: 33px;
  margin-top: 15px;
}

.block {
  display: block;
}

.storeInfo {
  width: 145px;

  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0f4;
}

.storeName {
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  margin-right: 7px;
}

.storeDistance {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  letter-spacing: -0.3px;

  color: #E19111;
}

.storeStar {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: -0.3px;

  color: #D35400;

  margin-right: 13px;
}

.storeStar:before {
  content: "";
  background-image: url("../../assets/img/별.png");
  background-size: 17px 15px;
  width: 17px;
  height: 15px;
  display: inline-block;

  margin-right: 8px;
}

.storeCategory {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;

  letter-spacing: -0.3px;

  color: #6f7198;
}

.storeInfoBox a {
  display: inline-block;
  width: 78px;
  height: 24px;
  border-radius: 25px;
  border: 1px solid #b4b5d5;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  letter-spacing: -0.3px;

  text-align: center;
  line-height: 24px;

  color: #6f7198;

  margin-top: 11px;
}
</style>