<template>
  <div>
    <h1>Get</h1>
    <SubmitBox type="get" />
    <h1>SignUp</h1>
    <SubmitBox :submitKeys="signUpKeys" path="sign-up" />
    <h1>Login</h1>
    <SubmitBox :submitKeys="loginKeys" path="login" />
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