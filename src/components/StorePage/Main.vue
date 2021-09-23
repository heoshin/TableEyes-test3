<template>
  <div>
      <StoreImg />
      <StoreName />
      <StoreBar />
      <StoreInfo />
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