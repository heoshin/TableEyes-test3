<template>
  <div>
    <div class="map"></div>
    <SortSelector id="sort-selector" />
    <Card class="card" v-for="(store, i) in stores" :key="i" :store="store" />
  </div>
</template>

<script>
import Card from "@/components/StoreList/Card.vue";
import SortSelector from "@/components/StoreList/SortSelector.vue";
// import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      stores: [],
      curKindIdx: 0,
    };
  },
  methods: {
    setCurKind(idx) {
      this.curKindIdx = idx;
      if (this.curKindIdx == 0) {
        this.stores.sort((a, b) => a.count / a.countMax - b.count / b.countMax);
      } else if (this.curKindIdx == 1) {
        this.stores.sort((a, b) => a.distance - b.distance);
      }
    },
    getCurKindMargin() {
      return { marginLeft: this.curKindIdx * 150 + "px" };
    },

  },
  mounted() {
    this.stores = this.$store.state.curStores
    // this.$cookies.set(test, "hello");
  },
  components: {
    Card: Card,
    SortSelector: SortSelector,
  },
};
</script>

<style scoped>
* {
  margin: 0;
}
.map {
  width: inherit;
  height: 300px;
  margin: 0 auto;
  background: lightgray;
}
#sort-selector {
  position: sticky;
  z-index: 1;
  top: 10px;
  margin-top: 10px;
}
.card {
  margin-top: 10px;
  width: inherit;
}
</style>
