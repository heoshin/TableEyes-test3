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
import axios from "axios";

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
    sendPost() {
      console.log("sendPost");
      let params = {
        location: 10,
      };
      axios.post("http://koldin.myddns.me:4004/sort/", params).then((res) => {
        console.log(res);
      });
    },
    sendGet() {
      axios.get("http://koldin.myddns.me:4004/store").then((res) => {
        console.log(res);
      });
    },
    sendDelete() {
      axios.delete("http://koldin.myddns.me:4004/store/" + 40).then((res) => {
        console.log(res);
      });
    },
    sendPatch() {
      axios
        .patch(`http://koldin.myddns.me:4004/store/personnel/${45}/${5}`)
        .then((res) => {
          console.log(res);
        });
    },
    sendPut() {
      let params = {
        name: "test111",
        star: 0,
        starCount: 0,
        lat: 1.23112,
        lon: 1.23112,
        maxPersonnel: 12,
        nowPersonnel: 0,
        isOpen: 0,
        description: "hello World",
        category: ["a", "b"],
        logo: "koldin.myddns.me",
        waitingState: 0,
      };
      axios
        .put(`http://koldin.myddns.me:4004/store/${45}`, params)
        .then((res) => {
          console.log(res);
        });
    },
    signUp() {
      const params = {
        name: "heoshin-test3",
        password: "1234",
        email: "ghtls@gmail.com",
        age: 12,
        sex: "male",
        phoneNumber: "123456",
        hometown: "부산광역시 해운대구 좌동 대림1차",
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .post("http://koldin.myddns.me:4004/sign-up", params, config)
        .then((res) => {
          console.log(res);
        });
    },
    login() {
      const params = {
        id: "heoshin-test3",
        password: "1234",
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .post("http://koldin.myddns.me:4004/login", params, config)
        .then((res) => {
          console.log(res);
        });
    },
  },
  mounted() {
    axios
      .get("http://koldin.myddns.me:4004/store/type/id/category")
      .then((response) => {
        console.log(response);
        this.stores = response.data;
      });
    // this.$cookies.set(test, "hello");
    // $.ajax({
    //   url: "http://koldin.myddns.me:4004/store/type/id/category",
    //   type: "get",
    //   success: (res) => {
    //     console.log(res);
    //     this.stores = res;
    //   },
    // });
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
