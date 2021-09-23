<template>
  <article>
    <div class="mainBar">
      <ul>
        <li class="ative">
          <a href="./storePage.html">정보</a>
        </li>
        <li class="unative">
          <a href="#">좌석</a>
        </li>
        <li class="unative">
          <a href="./review.html">리뷰</a>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style>
.mainBar {
  width: 414px;
  height: 59px;

  border-bottom: 2px solid #ebebeb;
}

.mainBar ul li {
  float: left;
  width: 33.333%;
  height: 60px;

  line-height: 60px;
  text-align: center;
}

.mainBar ul li a {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
}
/* 메인바-선택됐을때아닐때 */
.unative a {
  color: #868686;
}

.ative {
  box-sizing: border-box;
  border-top: 5px inset #D35400;
  color: #531000;
}

</style>