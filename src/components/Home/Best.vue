<template>
  <article class="price">
    <div class="price-box">
      <p class="font">가격대별 BEST</p>
      <ul>
        <li>만원이하</li>
        <li>1~2만원</li>
        <li>3~4만원</li>
        <li>5~6만원</li>
      </ul>
    </div>
    <hr />
    <div id="rivew-box">
      <ul>
        <a href="./storePage.html">
          <li>
            <div class="img-box"></div>
            <div class="txt-box">
              <span class="mainStar"><span style="width: 100%"></span></span>
              <p>5.0</p>
            </div>
          </li>
        </a>
        <li>
          <div class="img-box"></div>
          <div class="txt-box">
            <span class="mainStar"><span style="width: 84%"></span></span>
            <p>4.2</p>
          </div>
        </li>
        <li>
          <div class="img-box"></div>
          <div class="txt-box">
            <span class="mainStar"><span style="width: 72%"></span></span>
            <p>3.8</p>
          </div>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {};
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

.price {
  height: initial;
  padding-top: 20px;
  border-top: 12px solid #eeeeee;
}
.price div {
  width: 380px;
  margin: 0 auto;
}
.font {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
}
.price .price-box ul {
  width: inherit; height: 40px;
}
.price .price-box ul li {
  width: 78px;
  height: 24px;
  border: 2px solid #a3a3a3;
  border-radius: 40px;
  text-align: center;
  float: left;
  margin: 0 5px;
  cursor: pointer;
  background-color: white;
}
.price #rivew-box ul li {
  width: inherit; height: 110px;
  box-shadow: 0px 2px 7px #646464;
  border-radius: 20px;
  margin: 15px 0;
  cursor: pointer;
  background-color: white;
}
.price #rivew-box ul li .img-box {
  float: left;
  width: 110px;
  height: inherit;
  background-color: #bebebe;
  border-radius: 20px 0 0 20px;
}
.price #rivew-box ul li .txt-box {
  float: left;
  width: calc(100% - 110px);
  height: inherit;
  box-sizing: border-box;
  position: relative;
}

.price #rivew-box ul li .txt-box p {
  position: absolute;
  bottom: 15px;
  left: 108px;
  color: #646464;
}
.mainStar {
  width: 74px;
}
.mainStar,
.mainStar span {
  display: inline-block;
  height: 14px;
  overflow: hidden;
  background: url("../..//assets/img/star.png") no-repeat;
  background-size: auto 28px;

  position: absolute;
  bottom: 18px;
  left: 23px;
}
.mainStar span {
  background-position: left bottom;
  line-height: 0;
  vertical-align: top;

  position: absolute;
  bottom: 0px;
  left: 0px;
}
</style>