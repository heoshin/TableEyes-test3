<template>
  <div>
      <StoreImg 
        img=https://www.haeundae.go.kr/upload_data/board_data/BBS_0000050/157915039396198.png;
      />
      <StoreName 
        title="스타벅스 송하네"
        star="3.2"
        distance=240
      />
      <StoreBar 
        heart=10000
        filledSeat=20
        totalSeat=40
      />
      <StoreInfo 
        businessHours="9:00~20:00"
        dayOff="월"
        Location="부산컴퓨터과학고등학교 "
      />
      <StoreMap />
      <StoreNavBar />
  </div>
</template>

<script>
import StoreImg from "@/components/StorePage/Main/StoreImg.vue";
import StoreName from "@/components/StorePage/Main/StoreName.vue"
import StoreBar from "@/components/StorePage/Main/StoreBar.vue"
import StoreInfo from "@/components/StorePage/Main/StoreInfo.vue"
import StoreMap from "@/components/StorePage/Main/StoreMap.vue"
import StoreNavBar from "@/components/StorePage/Main/StoreNavBar.vue"

export default {
  components: {
    StoreImg,
    StoreName,
    StoreBar,
    StoreInfo,
    StoreMap,
    StoreNavBar,
  },
};
</script>

<style>
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
</style>