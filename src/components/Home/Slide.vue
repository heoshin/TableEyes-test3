<template>
  <div class="slide">
    <input type="radio" name="a" id="slide1" checked />
    <input type="radio" name="a" id="slide2" />
    <input type="radio" name="a" id="slide3" />
    <ul id="sli">
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="bullets">
      <label for="slide1">&nbsp;</label>
      <label for="slide2">&nbsp;</label>
      <label for="slide3">&nbsp;</label>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {margin: 0; padding: 0;}
ul {list-style: none;}
a {text-decoration: none;}

.slide {
  width: inherit; height: inherit;
  position: relative;
  overflow: hidden;
}
.slide ul {
  width: 1656px; height: inherit;
  animation: sli 8s infinite;
}
.slide input[type="radio"] {
  display: none;
}
.slide ul li {
  width: 414px;
  height: inherit;
  float: left;
}
.slide ul li:nth-child(1) {
  background-color: khaki;
}
.slide ul li:nth-child(2) {
  background-color: lavender;
}
.slide ul li:nth-child(3) {
  background-color: pink;
}

/* 돌아가는 친구 동골이 모양 세팅 */
.slide .bullets {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  bottom: 0;
}
.bullets label {
  display: inline-block;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.55);
  width: 10px;
  height: 10px;
  cursor: pointer;
}

/* 빙글뱅글 뱅뱅 */
@keyframes sli {
  form {
    margin-left: 0;
  }
  33% {
    margin-left: -414px;
  }
  66% {
    margin-left: -828px;
  }
  to {
    margin-left: 0;
  }
}

/* 동골이 선텍하면 색깔 바뀜 히히 */
.slide input[type="radio"]:nth-child(1):checked ~ .bullets label:nth-child(1) {
  background-color: #fff;
}
.slide input[type="radio"]:nth-child(2):checked ~ .bullets label:nth-child(2) {
  background-color: #fff;
}
.slide input[type="radio"]:nth-child(3):checked ~ .bullets label:nth-child(3) {
  background-color: #fff;
}
</style>