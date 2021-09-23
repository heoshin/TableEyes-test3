<template>
  <article>
    <div class="amenities">
      <p>편의시설</p>
    </div>
    <div class="scroll">
      <AmenitiesList />
      <AmenitiesList />
      <AmenitiesList />
      <AmenitiesList />
      <AmenitiesList />
      <AmenitiesList />
      <AmenitiesList />
      <AmenitiesList />
      <AmenitiesList />
      <AmenitiesList />
    </div>
  </article>
</template>

<script>
import AmenitiesList from "@/components/StorePage/NavInfo/AmenitiesList.vue";

export default {
  components: {
    AmenitiesList,
  },
};
</script>

<style scoped>
.amenities p {
  margin-top: 29px;
  margin-left: 20px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
}

.scroll {
  padding-left: 20px;
  margin-top: 20px;

  width: 394px;
  height: 110px;

  white-space: nowrap;
  overflow-x: visible;
  overflow-y: hidden;

  border-bottom: 12px solid #ebebeb;
}

.scroll::-webkit-scrollbar {
  display: none;
}
</style>