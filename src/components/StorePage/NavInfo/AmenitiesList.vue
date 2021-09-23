<template>
  <div class="amenitiesList">
    <span class="listImg"
      ><img
        :src="img"
        alt="주차가능"
    /></span>
    <span class="name">{{categoryTitle}}</span>
  </div>
</template>

<script>
export default {
  props: {
    img : String,
    categoryTitle : String,
  },
};
</script>

<style scoped>
.amenitiesList {
  margin-right: 9px;

  display: inline-block;
  width: 68px;
}

.amenitiesList .listImg img {
  width: 66px;
  height: 66px;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #00ffff;
}

.amenitiesList .name {
  margin-top: 9px;

  width: 68px;
  height: 15px;

  align-items: center;
  justify-content: center;
  vertical-align: baseline;
  font-size: 13px;
  display: flex;
  flex-direction: row;
}
</style>