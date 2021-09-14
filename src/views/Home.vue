<template>
  <div class="base">
    <header>
      <Slide />
    </header>
    <section>
      <Category />
      <Best />
      <div class="banner"></div>
      <Hot/>
    </section>
  </div>
</template>

<script>
import Slide from "@/components/Home/Slide.vue";
import Category from "@/components/Home/Category.vue";
import Best from "@/components/Home/Best.vue";
import Hot from "@/components/Home/Hot.vue";

export default {
  components: {
    Slide,
    Category,
    Best,
    Hot,

  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}

/* 기본 틀 모드 */
.base {
  width: 414px;
}

/* 슬라이드쪽 */
.base header {
  width: 414px;
  height: 196px;
  margin-bottom: 20px;
}

/* 이벤트 */
.base section .banner {
  height: 151px;
  background-color: lightgray;
  border-radius: 15px;
}


</style>