<template>
  <article class="doubleCheck">
    <div class="doubleCheckBox">
      <p class="doubleCheckFont">마지막으로</p>
      <a href="#">
        <button class="checkButton">
          <span class="ButtonFont">+확인하기</span>
        </button>
      </a>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
.doubleCheck {
  height: 177px;
  margin-bottom: 55px;
}

.doubleCheckBox {
  width: 374px;
  height: 177px;

  background: #ffffff;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  padding: 0px 25px;
}

.doubleCheckFont {
  margin-top: 22px;
  margin-left: -7px;
}

.checkButton {
  width: 324px;
  height: 73px;

  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 10px;

  background-color: #ffffff;
  margin-top: 30px;
}

.ButtonFont {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.3px;

  color: #1400ff;
}

.informationFont,
.doubleCheckFont {
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
}

.informationFont::before,
.doubleCheckFont::before {
  content: "";
  background-image: url("../../assets/img/Rectangle.png");
  background-size: 20px 20px;
  width: 20px;
  height: 20px;
  display: inline-block;

  margin-right: 9px;
  transform: translateY(8%);
}
</style>
