<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <h1>SignUp</h1>
        <SubmitBox :submitKeys="signUpKeys" path="sign-up" />
      </v-col>
      <v-col cols="12" sm="10" md="8" lg="6">
        <h1>Login</h1>
        <SubmitBox :submitKeys="loginKeys" path="login" />
      </v-col>
    </v-row>
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