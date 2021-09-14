<template>
  <div>
    <v-btn @click="$router.push('/registerStore')">registerStore</v-btn>
    <v-btn @click="$router.push('/manage')">manage</v-btn>

    <router-view></router-view>

    <Gnb />
  </div>
</template>

<script>
import Gnb from "@/components/Gnb.vue"

export default {
  name: "App",
  components: {
    Gnb,
  },
  data() {
    return {

    }
  },
  methods: {
  },
  mounted() {},
};
</script>

<style>
* {
  margin: 0;
}

body {
  width: 414px;
  margin: 0 auto;
}

</style>
