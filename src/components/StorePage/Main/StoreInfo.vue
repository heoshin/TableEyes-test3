<template>
  <article>
    <p class="storeInformation">영업정보</p>
    <div class="storeInformationBox">
      <span class="InformationTitle">영업시간</span>
      <span class="InformationContent">9:00~10:00</span>
      <span class="InformationTitle">휴무일</span>
      <span class="InformationContent">-</span>
    </div>
    <p class="storeInformationL">위치</p>
    <div class="storeInformationBox">
      <span class="InformationTitle">부산 해운대구 좌동로 12</span>
      <span href="#" class="copy">복사</span>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
.storeInformation:before {
  content: "";
  background-image: url("../../../assets/img/clock.png");
  background-size: 24px 24px;
  width: 24px;
  height: 24px;
  display: inline-block;
  transform: translateY(20%);
  margin-right: 4px;
  margin-left: 16px;
  margin-top: 20px;
}

.storeInformation {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
}

.storeInformationBox {
  margin-top: 8px;
  width: 394px;
  padding-left: 20px;
}

.InformationTitle {
  margin-right: 22px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  color: #7e7e7e;
}

.InformationContent {
  margin-right: 45px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
}
/* 기본정보란-위치 */
.storeInformationL:before {
  content: "";
  background-image: url("../../../assets/img/location.png");
  background-size: 24px 24px;
  width: 24px;
  height: 24px;
  display: inline-block;
  transform: translateY(25%);
  margin-right: 4px;
  margin-left: 16px;
  margin-top: 35px;
}

.storeInformationL {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
}

.copy:before {
  content: "";
  background-image: url("../../../assets/img/copy.png");
  background-size: 13px 13px;
  width: 13px;
  height: 13px;
  display: inline-block;
  transform: translateY(25%);
}

.copy {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  color: #0075ff;
}
</style>