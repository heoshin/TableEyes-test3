<template>
  <div class="ownerInformation">
    <div class="checkBox" :class="{ checkBoxBG: isActive }" @click="isActive = !isActive">
      <img src="@/assets/img/check.png" class="checkImg" alt="" v-if="isActive" />
      <img src="@/assets/img/uncheck.png" class="checkImg" alt="" v-if="!isActive" />
    </div>
    <a href="#">
      <div class="informationBox">
        <p class="boxTitle">{{ title }}</p>
        <p class="boxContent">
          {{ description }}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}

.ownerInformation {
  width: 374px;
  height: 120px;

  margin-bottom: 22px;
  border-radius: 15px;
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.1);
}

.checkBox {
  float: left;
  width: 33px;
  height: 120px;

  border-radius: 15px 0px 0px 15px;

  /* background: #fff url(../../assets/img/check.png) no-repeat 5px 4px 0px 14px; */
}

.checkBoxBG {
  /* background: #c4c4c4 url(../../assets/img/uncheck.png) no-repeat 5px 4px; */
  background: #c4c4c4 no-repeat 5px 4px;
}

.checkImg,
.uncheckImg {
  position: relative;
  left: 5px;
  right: 4px;
  top: 14px;
}

.informationBox {
  float: left;

  padding: 0px 14px;

  width: 338px;
  height: 120px;

  background: #ffffff;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 0px 15px 15px 0px;
  border-left: none;
}

.boxTitle {
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.3px;

  margin-top: 16px;
}

.boxContent {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.7px;

  color: #7e7e7e;

  margin-top: 16px;
}

.information {
  height: 330px;
}
</style>