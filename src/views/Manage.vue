<template>
  <div>
    <h1>Get</h1>
    <SubmitBox type="get" />

    <h1>Delete</h1>
    <SubmitBox type="delete" path="store/" />
    
    <h1>AddStore</h1>
    <SubmitBox :submitKeys="addStoreKeys" type="post" path="store" />

    <h1>Login</h1>
    <SubmitBox :submitKeys="loginKeys" type="post" path="login"/>

    <h1>SignUp</h1>
    <SubmitBox :submitKeys="signUpKeys" type="post" path="sign-up"/>
    
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
      addStoreKeys: ["name", "desription", "maxPersonnel", "lat", "lon", "category", "logo"],

    };
  },
  methods: {
    signUp() {
      console.log(this.userObj);
      this.clearForm();
    },
    clearForm() {
      (this.userId = null),
        (this.password = null),
        (this.name = null),
        (this.address = null),
        (this.src = null);
    },
  },
};
</script>

<style>
</style>