<template>
  <div>
    <v-file-input show-size label="file"></v-file-input>
    <v-btn @click="upload" color="primary">Upload</v-btn>

    <h1>Get</h1>
    <SubmitBox type="get" />

    <h1>Delete</h1>
    <SubmitBox type="delete" path="store/" />

    <h1>AddStore</h1>
    <SubmitBox :submitKeys="addStoreKeys" type="post" path="store" />

    <h1>Login</h1>
    <SubmitBox :submitKeys="loginKeys" type="post" path="login" />

    <h1>SignUp</h1>
    <SubmitBox :submitKeys="signUpKeys" type="post" path="sign-up" />

    <div style="height: 40px"></div>
  </div>
</template>

<script>
import SubmitBox from "../components/Manage/SubmitBox.vue";

export default {
  components: {
    SubmitBox,
  },

  data() {
    return {
      file: "",

      signUpKeys: [
        "name",
        "password",
        "email",
        "age",
        "sex",
        "phoneNumber",
        "hometown",
      ],
      loginKeys: ["id", "password"],
      addStoreKeys: [
        "name",
        "description",
        "maxPersonnel",
        "lat",
        "lon",
        "mainCategory",
        "logo",
        "openTime",
        "closeTime",
        "holiday",
        "infoDescription",
        "conFacility",
        "seat",
        "number",
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style>
</style>