<template>
  <article>
    <div class="seatColorBox">
      <div class="seatInfoDiv">
        <div class="ColorBox" style="background-color: #988daf"></div>
        <span class="seatFont">이용중</span>
      </div>
      <div class="seatInfoDiv">
        <div class="ColorBox" style="background-color: #d1d4e7"></div>
        <span class="seatFont">이용가능</span>
      </div>
      <div class="seatInfoDiv">
        <div class="ColorBox" style="background-color: #000000"></div>
        <span class="seatFont">이용불가</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
/* 이용가능성 3개 틀 */
.seatColorBox {
    display: flex;
    justify-content: space-between;

    width: 414px;
    box-sizing: border-box;
    padding: 41px 30px;
}
/* 이용가능성에 따른 색 표시 */
.ColorBox {
    float: left;
    width: 20px;
    height: 20px;

    border-radius: 2px;
    margin-right: 15px;
}

/* 이용가능성에 따른 색 표시 설명글 */
.seatFont {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    letter-spacing: -0.3px;

    color: #8E8DAF;
}
</style>