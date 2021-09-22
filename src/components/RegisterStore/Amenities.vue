<template>
  <article class="facilitiesBox">
    <p class="subTitle">편의시설</p>
    <div class="checkingManager" style="margin-right: 40px">
      <div class="checkBox">
        <input type="checkbox" id="ck-1" /><label for="ck-1">주차가능</label>
      </div>
      <div class="checkBox">
        <input type="checkbox" id="ck-2" /><label for="ck-2">인터넷</label>
      </div>
      <div class="checkBox">
        <input type="checkbox" id="ck-3" /><label for="ck-3">단체석</label>
      </div>
      <div class="checkBox">
        <input type="checkbox" id="ck-4" /><label for="ck-4">지역화폐</label>
      </div>
      <div class="checkBox">
        <input type="checkbox" id="ck-5" /><label for="ck-5">대관서비스</label>
      </div>
      <div class="checkBox">
        <input type="checkbox" id="ck-6" /><label for="ck-6">유아 놀이방</label>
      </div>
      <div class="checkBox">
        <input type="checkbox" id="ck-7" /><label for="ck-7"
          >남녀 화장실 구분</label
        >
      </div>
      <div class="checkBox">
        <input type="checkbox" id="ck-8" /><label for="ck-8"
          >장애인 편의시설</label
        >
      </div>
      <div class="checkBox">
        <input type="checkbox" id="ck-9" /><label for="ck-9">흡연실</label>
      </div>
      <div class="checkBox">
        <input type="checkbox" id="ck-10" /><label for="ck-10">콘센트</label>
      </div>
    </div>
    <div class="checkingManager">
      <div class="checkBox">
        <input type="checkbox" id="ck-11" /><label for="ck-11"
          >24시간 운영</label
        >
      </div>
      <div class="checkBox">
        <input type="checkbox" id="ck-12" /><label for="ck-12">노키즈존</label>
      </div>
      <div class="checkBox">
        <input type="checkbox" id="ck-13" /><label for="ck-13">주차가능</label>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
.subTitle {
  display: inline-block;

  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.3px;

  margin-top: 23px;

  width: 300px;
}

.facilitiesBox {
  width: 414px;
  box-sizing: border-box;
  padding: 0px 20px;
}

.checkingManager {
  width: 167px;
  float: left;
  margin-top: 15px;
}

.checkBox label {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  letter-spacing: -0.3px;

  color: #6f7198;
}

.checkBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  width: 161px;

  margin-bottom: 7px;
}

input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + label {
  width: 154px;
  height: 19px;
  vertical-align: middle;
  background: url(../../assets/img/uncheck.png) right no-repeat;
  background-size: 15px;
  cursor: pointer;
}

input[type="checkbox"]:checked + label {
  background: url(../../assets/img/check.png) right no-repeat;
  background-size: 15px;
}
</style>