<template>
  <div>
    <CurrentSeatBar />
    <SeatLayout />
  </div>
</template>

<script>
import CurrentSeatBar from "@/components/StorePage/NavSeat/CurrentSeatBar.vue";
import SeatLayout from "@/components/StorePage/NavSeat/SeatLayout.vue";

export default {
  components: {
    CurrentSeatBar,
    SeatLayout,
  },
};
</script>

<style>
</style>