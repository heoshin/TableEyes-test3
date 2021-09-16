<template>
  <v-card ref="form">
    {{ submitData }}
    <v-card-text>
      <v-text-field v-model="path" label="path" required></v-text-field>
      <v-text-field
        v-for="key in submitKeys"
        :key="key"
        v-model="submitData[key]"
        :label="key"
        required
      ></v-text-field>
    </v-card-text>
    <v-divider class="mt-12"></v-divider>
    <v-card-actions>
      <v-btn text @click="save"> save </v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="submit"> Submit </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  props: {
    submitKeys: Array,
    path: String,
    type: String,
  },
  data() {
    return {
      submitData: {},
    };
  },
  methods: {
    submit() {
      console.log("submit!");
      if (this.type == "get") {
        let url = "http://koldin.myddns.me:4004/" + this.path;
        console.log("request get: " + url);
        this.get(url);
      }
      // let url = "http://koldin.myddns.me:4004/" + this.path;
      // let config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // };
      // axios
      //   .post(url, this.submitData, config)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   });
    },
    // submitAjax() {
    //   let url = "http://koldin.myddns.me:4004/" + this.path;
    //   let config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   };
    //   axios
    //     .post(url, this.submitData, config)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     });
    // },
    get(url) {
      $.ajax({
        url: url,
        type: "get",
        success: (res) => {
          console.log(res);
          this.stores = res;
        },
      });
    },
    save() {
      console.log("save");
    },
  },
};
</script>

<style>
</style>