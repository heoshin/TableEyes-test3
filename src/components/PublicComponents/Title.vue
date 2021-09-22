<template>
  <header>
    <img src="@/assets/img/left.png" alt="" />
    <p class="headerTitle">{{ title }}</p>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
header {
  display: inline-block;

  width: 414px;
  height: 110px;

  box-sizing: border-box;
  padding: 0px 20px;

  border-bottom: 12px solid #e6e6e6;
}

header img {
  width: 15px;
  height: 29px;

  margin-left: 11px;
  transform: translateY(15%);
}

.headerTitle {
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: -0.3px;

  margin-top: 46px;
  margin-left: 10px;
}
</style>