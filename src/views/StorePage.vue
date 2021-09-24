<template>
  <div style="margin-bottom: 100px">
    <Main />
    <NavInfo />
    <NavSeat />
    <NavReview />
  </div>
</template>

<script>
import Main from "@/components/StorePage/Main.vue";
import NavInfo from "@/components/StorePage/NavInfo.vue";
import NavSeat from "@/components/StorePage/NavSeat.vue";
import NavReview from "@/components/StorePage/NavReview.vue";

export default {
  components: {
    Main,
    NavInfo,
    NavSeat,
    NavReview,
  },
};
</script>

<style scoped>
</style>