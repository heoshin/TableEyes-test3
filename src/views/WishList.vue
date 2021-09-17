<template>
  <div>
    <header>
      <img src="../assets/img/left.png" alt="" />
      <p class="headerTitle">찜한매장</p>
    </header>
    <section>
      <div class="KimBox">
        <span class="StoreNum">찜한 매장 24개</span>
        <div class="arrayBox">
          <span id="modal">최근수</span>
          <img src="../assets/img/gray.png" alt="" />
        </div>
      </div>
      <article>
        <div class="storeBox">
          <div class="photoBox">
            <div class="Photo"></div>
            <img
              src="../assets/img/heart.png"
              @click="like(0)"
              alt=""
              class="heart"
            />
          </div>
          <div class="storeInfoBox">
            <div class="storeInfo">
              <span class="storeName">롯데시네마</span>
              <span class="storeDistance">210m</span>
              <span class="storeStar">4.2</span>
              <span class="storeKategorie">영화관</span>
            </div>
            <a href="#">바로가기</a>
          </div>
        </div>
        <div class="storeBox">
          <div class="photoBox">
            <div class="Photo"></div>
            <img
              src="../assets/img/heart.png"
              @click="like(1)"
              alt=""
              class="heart"
            />
          </div>
          <div class="storeInfoBox">
            <div class="storeInfo">
              <span class="storeName">롯데시네마</span>
              <span class="storeDistance">210m</span>
              <span class="storeStar">4.2</span>
              <span class="storeKategorie">영화관</span>
            </div>
            <a href="#">바로가기</a>
          </div>
        </div>
        <div class="storeBox">
          <div class="photoBox">
            <div class="Photo"></div>
            <img
              src="../assets/img/heart.png"
              @click="like(2)"
              alt=""
              class="heart"
            />
          </div>
          <div class="storeInfoBox">
            <div class="storeInfo">
              <span class="storeName">롯데시네마</span>
              <span class="storeDistance">210m</span>
              <span class="storeStar">4.2</span>
              <span class="storeKategorie">영화관</span>
            </div>
            <a href="#">바로가기</a>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    like(idx) {
      let img = document.querySelectorAll(".heart")[idx];

      console.log(img.src);

      if (
        img.src ===
        "file:///C:/Users/HeaJin/Desktop/Tableeyes/TableEyes-test3/src/assets/img/heart.png"
      ) {
        img.src = require("../assets/img/unheart.png");
      } else {
        img.src = require("../assets/img/heart.png");
      }
    },
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
  color: black;
}

body {
  margin-bottom: 99px;
}

header {
  display: inline-block;

  width: 414px;
  height: 110px;

  box-sizing: border-box;
  padding: 0px 20px;

  border-bottom: 12px solid #e6e6e6;
}

header img {
  width: 15px;
  height: 29px;

  margin-left: 11px;
  transform: translateY(15%);
}

section {
  width: 414px;

  overflow: hidden;
  box-sizing: border-box;
  padding: 0px 20px;
}

article {
  overflow: hidden;
}

.headerTitle {
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: -0.3px;

  margin-top: 46px;
  margin-left: 10px;
}

.KimBox {
  width: 374px;
  height: 59px;

  line-height: 59px;

  display: flex;
  justify-content: space-between;
}

.StoreNum {
  font-family: "";
  font-style: normal;
  font-weight: normal;
  font-size: 15px;

  letter-spacing: -0.3px;

  color: #7e7e7e;
}

.arrayBox {
  display: inline-block;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;

  letter-spacing: -0.3px;

  color: #6f7198;
  cursor: pointer;
}

.storeBox {
  overflow: hidden;
  margin-bottom: 16px;
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

.storeInfo {
  width: 145px;
  height: 44px;

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

  color: #ff0000;
}

.storeStar {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: -0.3px;

  color: #ff47cc;

  margin-right: 13px;
}

.storeStar:before {
  content: "";
  background-image: url("../assets/img/별.png");
  background-size: 17px 15px;
  width: 17px;
  height: 15px;
  display: inline-block;

  margin-right: 8px;
}

.storeKategorie {
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

/* 여기서부터 selectBox CSS*/
#modalView {
  position: absolute;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);

  width: 414px;
  height: 100%;
  display: none;
}
#Views {
  position: fixed;
  bottom: -400px;
  width: 414px;
  height: 395px;

  background-color: #fff;
  border-radius: 30px 30px 0px 0px;

  box-sizing: border-box;
  padding: 0px 20px;
  padding-top: 19px;
}

.selectBox li {
  padding: 20px 3px;
  display: flex;

  border-bottom: 1px solid #ebebeb;
}
.selectBox li a {
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;

  letter-spacing: -0.3px;

  color: #c9c9c9;
}

.checkImg {
  background-image: url("../assets/img/selectCheck.png");
  background-size: 19px 15px;
  width: 19px;
  height: 15px;

  margin-left: 14px;
  display: none;
  /* transform: translateY(10%); */
}
</style>