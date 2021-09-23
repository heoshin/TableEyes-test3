<template>
  <div class="mainStoreImg">
    <img
      src="https://www.haeundae.go.kr/upload_data/board_data/BBS_0000050/157915039396198.png"
      alt="매장사진"
    />
  </div>
</template>

<script>
export default {
  props: {
    img: String, 
  },
};
</script>

<style scoped>
.mainStoreImg img {
  width: 374px;
  height: 216px;
  border-radius: 17px;

  margin-top: 71px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>