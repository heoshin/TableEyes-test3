<template>
  <div>
    <Amenities />
    <Notice />
  </div>
</template>

<script>
import Amenities from "@/components/StorePage/NavInfo/Amenities.vue";
import Notice from "@/components/StorePage/NavInfo/Notice.vue";

export default {
  components: {
    Amenities,
    Notice,
  },
};
</script>

<style>
</style>