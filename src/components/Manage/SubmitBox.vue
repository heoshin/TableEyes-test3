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
// import axios from "axios";

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
      let url = "http://koldin.myddns.me:4004/" + this.path;

      if (this.type == "post") {
        console.log("request post: " + url);
        this.post(url);
      } else {
        console.log(`request ${this.type}: ` + url);
        this.reqAjax(url);
      }

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
    reqAjax(url) {
      $.ajax({
        url: url,
        type: this.type,
        success: (res) => {
          console.log(res);
        },
      });
    },
    post(url) {
      $.ajax({
        url: url,
        type: "post",
        data: this.submitData,
        success: (res) => {
          console.log(res);
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