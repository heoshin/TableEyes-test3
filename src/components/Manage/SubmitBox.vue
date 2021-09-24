<template>
  <v-card ref="form">
    {{ submitData }}
    <v-card-text>
      <v-textarea
        v-model="submitDataByStr"
        @input="OnChangeSubmitDataByStr"
        label="raw"
        row-height="1"
        auto-grow
        required
      ></v-textarea>
      <v-text-field v-model="path" label="path" required></v-text-field>
      <v-text-field
        v-for="key in submitKeys"
        :key="key"
        v-model="submitData[key]"
        @input="OnChangeSubmitData"
        :label="key"
        required
      ></v-text-field>
    </v-card-text>
    <v-divider class="mt-12"></v-divider>
    <v-card-actions>
      <v-btn text @click="copyToClipboard"> copy </v-btn>
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
      submitDataByStr: "",
      token: "",
    };
  },
  methods: {
    submit() {
      console.log("submit!");
      let url = "http://koldin.myddns.me:4004/" + this.path;

      if (this.type == "post") {
        console.log("request post: " + url);
        this.reqAxiosPost(url);
      } else {
        console.log(`request ${this.type}: ` + url);
        this.reqAxios(url);
      }
    },
    reqAxios(url) {
      axios({
        method: this.type,
        url: url,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
    },
    reqAxiosPost(url) {
      let config = {
        headers: {
          "content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "withCredentials": true,
          "Accept": "/",
        },
      };

      axios
        .post(url, this.submitData, config)
        .then((res) => {
          console.log(res);
          // let userId = res.data.userId;
          // console.log(userId);
          // this.$cookies.set("userId", userId);
        })
        .catch((res) => {
          console.log(res);
        });
    },

    OnChangeSubmitData() {
      let newSubmitDataByStr = JSON.stringify(this.submitData);
      this.submitDataByStr = newSubmitDataByStr;
    },
    OnChangeSubmitDataByStr() {
      let newSubmitData = JSON.parse(this.submitDataByStr);
      this.submitData = newSubmitData;
    },
    copyToClipboard() {
      let newSubmitData = JSON.stringify(this.submitData);
      console.log(newSubmitData);
      this.$copyText(newSubmitData);
      console.log("copy");
    },
  },
};
</script>

<style>
</style>