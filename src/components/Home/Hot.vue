<template>
  <article class="hot">
    <p class="font">요즘 내주변 HOT</p>
    <div class="scroll">
      <ul>
        <a href="#">
          <li>
            <div>
              <p class="hot-f1">학사당구장</p>
              <p class="hot-f2">부산 동구 초량동 **</p>
              <span class="subStar"><span style="width: 63%"></span></span>
              <p class="hot-f3">3.1</p>
            </div>
          </li>
        </a>

        <a href="#">
          <li>
            <div>
              <p class="hot-f1">학사당구장</p>
              <p class="hot-f2">부산 동구 초량동 **</p>
              <span class="subStar"><span style="width: 50%"></span></span>
              <p class="hot-f3">2.5</p>
            </div>
          </li>
        </a>

        <a href="#">
          <li>
            <div>
              <p class="hot-f1">학사당구장</p>
              <p class="hot-f2">부산 동구 초량동 **</p>
              <span class="subStar"><span style="width: 68%"></span></span>
              <p class="hot-f3">3.5</p>
            </div>
          </li>
        </a>
        <a href="#">
          <li>
            <div>
              <p class="hot-f1">학사당구장</p>
              <p class="hot-f2">부산 동구 초량동 **</p>
              <span class="subStar"><span style="width: 68%"></span></span>
              <p class="hot-f3">3.5</p>
            </div>
          </li>
        </a>
      </ul>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
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

.hot {
  width: 414px;
  height: 385px;
  margin: 0 auto;
}

.hot .font {
  margin-left: 28px;
}

.hot .scroll {
  width: inherit;
  overflow-x: scroll;
}

.scroll::-webkit-scrollbar {
  display: none;
}

.hot .scroll ul {
  width: 850px;
  height: 220px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-left: 5px;
  margin-bottom: 150px;
}
.hot .scroll ul a li {
  width: 200px;
  height: 220px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  position: relative;
}
.hot .scroll ul a div {
  width: inherit;
  height: 100px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  padding: 10px;
}
.hot .scroll ul a div p {
  color: white;
  float: right;
}
.hot .scroll ul a div .hot-f1 {
  font-size: 20px;
  font-weight: bold;
}
.hot .scroll ul a div .hot-f2 {
  font-size: 12px;
}
.hot .scroll ul a div .hot-f3 {
  color: #b64ae9;
  position: absolute;
  bottom: 16px;
  left: 155px;
}

.subStar {
  width: 90px;
}
.subStar,
.subStar span {
  display: inline-block;
  height: 17px;
  overflow: hidden;
  background: url("../../assets/img/star.png") no-repeat;
  background-size: auto 34px;

  position: absolute;
  bottom: 18px;
  left: 58px;
}
.subStar span {
  background-position: left bottom;
  line-height: 0;
  vertical-align: top;

  position: absolute;
  bottom: 0px;
  left: 0px;
}
</style>