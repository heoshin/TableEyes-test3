<template>
  <div>
    <!-- <header>
    <p>테이블 아이즈</p>
  </header> -->

    <section class="storeMain">
      <article class="information">
        <p class="informationFont">정보를 입력해주세요</p>
        <div class="ownerInformation">
          <div class="MainCheckBox">
            <img src="../assets/img/check.png" alt="" class="checkImg" />
          </div>
          <a href="#">
            <div class="informationBox">
              <p class="boxTitle">사업자 정보</p>
              <p class="boxContent">
                사업자 등록증의 상표, 사업자 등록증의 대표자 입력, 사업자
                등록번호
              </p>
            </div>
          </a>
        </div>

        <div class="storeInformation">
          <div class="uncheckBox">
            <img src="../assets/img/uncheck.png" alt="" class="uncheckImg" />
          </div>
          <a href="">
            <div class="informationBox">
              <p class="boxTitle">가게 정보</p>
              <p class="boxContent">
                사업자 등록증의 상표, 사업자 등록증의 대표자 입력, 사업자
                등록번호
              </p>
            </div>
          </a>
        </div>
      </article>
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
      <!-- <article class="openStoreButton">
      <a href="#"><button class="openButton">입점하기</button></a>
    </article> -->
    </section>
    <!-- 사업자 정보 페이지 -->
    <div class="BusinessInformationPage">
      <!-- <header></header> -->
      <form>
        <section>
          <div class="titleBox">
            <p class="title">사업자 정보를 등록해주세요</p>
          </div>
          <article class="boxSize">
            <label class="subTitle">사업자 등록증의 상호</label>
            <input type="text" class="input" required />
            <p class="explanation">사업자 등록증의 상호를 입력해주세요</p>
          </article>
          <article class="boxSize">
            <label class="subTitle">사업자 등록증의 대표자</label>
            <input type="text" class="input" required />
            <p class="explanation">사업자 등록증의 대표자를 입력해주세요</p>
          </article>
          <article class="boxSize">
            <label class="subTitle">사업자 등록번호</label>
            <input
              type="text"
              class="input"
              placeholder="-없이 입력해주세요"
              required
            />
            <p class="explanation">사업자 등록번호를 입력해주세요</p>
          </article>
        </section>

        <!-- <footer>
        <a href="#"><button type="submit" class="next">등록하기</button></a>
      </footer> -->
      </form>
    </div>
    <!-- 가게정보페이지-1 -->
    <div class="StoreInformationPage">
      <header>
        <div class="progressBox">
          <div class="progress-chart">
            <div class="progress-bar" style="width: 25%"></div>
          </div>
          <div class="progressTextBox">
            <span>1</span><span class="progressFont">/4</span>
          </div>
        </div>
      </header>
      <form>
        <section>
          <div class="titleBox">
            <p class="title">기본정보를 입력해주세요</p>
          </div>
          <article class="boxSize">
            <label class="subTitle">가게명</label>
            <input type="text" class="input" required />
            <p class="explanation">
              고객들에게 보여질 가게 이름을 입력해주세요
            </p>
          </article>
          <article class="boxSize">
            <label class="subTitle">업장주소</label>
            <input type="text" class="input" required />
            <p class="explanation">가게의 위치를 입력해주세요</p>
          </article>
        </section>

        <footer>
          <a href="./newStore-2.html" type="submit">
            <button class="next" onclick="location.href='./newStore-2.html'">
              다음으로
            </button></a
          >
        </footer>
      </form>
    </div>
    <!-- 가게정보페이지-3 -->
    <!-- <header>
    <div class="progressBox">
      <div class="progress-chart">
        <div class="progress-bar" style="width: 75%"></div>
      </div>
      <div class="progressTextBox">
        <span>1</span><span class="progressFont">/4</span>
      </div>
    </div>
  </header> -->
    <form>
      <section>
        <div class="titleBox">
          <p class="title">전화번호를 입력해주세요</p>
        </div>
        <article class="boxSize">
          <label class="subTitle">업주전화</label>
          <input
            type="text"
            class="input"
            placeholder="-없이 입력해주세요"
            required
          />
          <p class="explanation">업주전화를 입력해주세요</p>
        </article>
        <article class="boxSize">
          <label class="subTitle">가게전화</label>
          <input
            type="text"
            class="input"
            placeholder="-없이 입력해주세요"
            required
          />
          <p class="explanation">가게의 전화를 입력해주세요</p>
        </article>
      </section>

      <!-- <footer>
      <a href="./newStore-2.html" type="submit">
      <button class="next" onclick="location.href='./newStore-2.html'">
        다음으로
      </button>
      </a>
    </footer> -->
    </form>
    <!-- <header>
      <div class="progressBox">
        <div class="progress-chart">
          <div class="progress-bar" style="width: 100%"></div>
        </div>
        <div class="progressTextBox">
          <span>4</span><span class="progressFont">/4</span>
        </div>
      </div>
    </header> -->
    <form>
      <section>
        <div class="titleBox">
          <p class="title">카테고리 / 편의시설 설정</p>
        </div>
        <article class="boxSize">
          <p class="subTitle">카테고리</p>
          <div class="categoryList">
            <div class="categoryBox" id="ft" onclick="changer(0)">
              <div class="imgCircle">
                <img
                  src="../assets/img/black/Cafe.png"
                  alt=""
                  class="categoryImg"
                />
              </div>
              <!--.categoryImg.src = "../assets/img/black/B-call.png" -->
              <span class="categoryName">카페</span>
            </div>
            <div class="categoryBox" onclick="changer(1)">
              <div class="imgCircle">
                <img
                  src="../assets/img/black/Game.png"
                  alt=""
                  class="categoryImg"
                />
              </div>
              <span class="categoryName">게임</span>
            </div>
            <div class="categoryBox" onclick="changer(2)">
              <div class="imgCircle">
                <img
                  src="../assets/img/black/Sing.png"
                  alt=""
                  class="categoryImg"
                />
              </div>
              <span class="categoryName">노래</span>
            </div>
            <div class="categoryBox" onclick="changer(3)">
              <div class="imgCircle">
                <img
                  src="../assets/img/black/Sport.png"
                  alt=""
                  class="categoryImg"
                />
              </div>
              <span class="categoryName">스포츠</span>
            </div>
            <div class="categoryBox" onclick="changer(4)">
              <div class="imgCircle">
                <img
                  src="../assets/img/black/Other.png"
                  alt=""
                  class="categoryImg"
                />
              </div>
              <span class="categoryName">기타</span>
            </div>
          </div>
        </article>
        <article class="facilitiesBox">
          <p class="subTitle">편의시설</p>
          <div class="checkingManager" style="margin-right: 40px">
            <div class="checkBox">
              <input type="checkbox" id="ck-1" /><label for="ck-1"
                >주차가능</label
              >
            </div>
            <div class="checkBox">
              <input type="checkbox" id="ck-2" /><label for="ck-2"
                >인터넷</label
              >
            </div>
            <div class="checkBox">
              <input type="checkbox" id="ck-3" /><label for="ck-3"
                >단체석</label
              >
            </div>
            <div class="checkBox">
              <input type="checkbox" id="ck-4" /><label for="ck-4"
                >지역화폐</label
              >
            </div>
            <div class="checkBox">
              <input type="checkbox" id="ck-5" /><label for="ck-5"
                >대관서비스</label
              >
            </div>
            <div class="checkBox">
              <input type="checkbox" id="ck-6" /><label for="ck-6"
                >유아 놀이방</label
              >
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
              <input type="checkbox" id="ck-9" /><label for="ck-9"
                >흡연실</label
              >
            </div>
            <div class="checkBox">
              <input type="checkbox" id="ck-10" /><label for="ck-10"
                >콘센트</label
              >
            </div>
          </div>
          <div class="checkingManager">
            <div class="checkBox">
              <input type="checkbox" id="ck-11" /><label for="ck-11"
                >24시간 운영</label
              >
            </div>
            <div class="checkBox">
              <input type="checkbox" id="ck-12" /><label for="ck-12"
                >노키즈존</label
              >
            </div>
            <div class="checkBox">
              <input type="checkbox" id="ck-13" /><label for="ck-13"
                >주차가능</label
              >
            </div>
          </div>
        </article>
      </section>

      <!-- <footer>
        <a href="./newStore-2.html" type="submit"
          ><button class="next" onclick="location.href='./newStore-2.html'">
            다음으로
          </button></a
        >
      </footer> -->
    </form>
  </div>
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
  color: #000;
}

section {
  margin-top: 120px;
  margin-bottom: 110px;
}

header {
  overflow: hidden;
  position: fixed;

  top: 0;
  left: 38%;
  background-color: #fff;

  width: 414px;
  height: 97px;

  border-bottom: 12px solid #e6e6e6;
}

footer {
  position: fixed;

  bottom: 0;
  left: 38%;

  background-color: #fff;
}

header p {
  display: inline-block;
  margin-left: 21px;
  margin-top: 46px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: -0.3px;
}

.storeMain {
  box-sizing: border-box;
  padding: 0px 20px;
}

.information {
  height: 330px;
  margin-bottom: 69px;
}

.informationFont,
.doubleCheckFont {
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
}

.informationFont {
  margin-left: 15px;
  margin-bottom: 40px;
  margin-top: 50px;
}

.informationFont::before,
.doubleCheckFont::before {
  content: "";
  background-image: url("../assets/img/Rectangle.png");
  background-size: 20px 20px;
  width: 20px;
  height: 20px;
  display: inline-block;

  margin-right: 9px;
  transform: translateY(8%);
}

.ownerInformation {
  width: 374px;
  height: 120px;

  margin-bottom: 22px;
  border-radius: 15px;
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.1);
}

.storeInformation {
  width: 374px;
  height: 120px;

  border-radius: 15px;
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.1);
}

.MainCheckBox,
.uncheckBox {
  float: left;
  width: 33px;
  height: 120px;

  border-radius: 15px 0px 0px 15px;
}

.MainCheckBox {
  background: #c4c4c4;
}

.uncheckBox {
  background: #ffffff;
  border: 1px solid #fff;
  border-right: none;
  box-sizing: border-box;
}

.checkImg,
.uncheckImg {
  position: relative;
  left: 5px;
  right: 4px;
  top: 14px;
}

.informationBox {
  float: left;

  padding: 0px 14px;

  width: 338px;
  height: 120px;

  background: #ffffff;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 0px 15px 15px 0px;
  border-left: none;
}

.boxTitle {
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.3px;

  margin-top: 16px;
}

.boxContent {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.7px;

  color: #7e7e7e;

  margin-top: 16px;
}

.information {
  height: 330px;
}

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

.openStoreButton {
  width: 374px;
  height: 70px;

  margin-bottom: 46px;
}

.openButton {
  width: 374px;
  height: 70px;

  background: #e1e1e1;
  border-radius: 15px;

  border: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  letter-spacing: 4.7px;

  color: #898989;
}
/* 사업자등록페이지 */
.progressBox {
  margin: 41px 20px 3px 241px;
}

.progress-chart {
  width: 153px;
  height: 10px;

  background: #e3e3e3;
  border-radius: 10px;

  transform: translateY(35%);

  margin-bottom: 4px;
}

.progress-bar {
  border-radius: 10px;
  height: 10px;
  background: #8d8d8d;
}

.progressTextBox {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;

  letter-spacing: -0.3px;

  color: #000000;

  text-align: right;
}

.progressFont {
  color: #979797;
}
/* 큰제목 */
.titleBox {
  width: 414px;
  height: 73px;

  border-bottom: 1px solid #e3e3e3;
}

.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: -0.3px;

  line-height: 72px;

  margin-left: 20px;
}
/* 항목 컨테이너 */
.boxSize {
  width: 414px;
  height: 180px;

  box-sizing: border-box;

  padding: 0px 20px;
  border-bottom: 1px solid #e3e3e3;
}
/* 각 항목 제목 */
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
/* 선택됐을 때 테두리 보라색 */
input:focus {
  outline: none;
  border: 1px solid #f700ff;
  border-radius: 10px;
}

.input {
  width: 374px;
  height: 58px;

  border: 1px solid #c2c2c2;
  box-sizing: border-box;
  border-radius: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: -0.3px;

  padding-left: 19px;
  margin-top: 14px;
}

.explanation {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  letter-spacing: -1px;

  color: #696969;

  margin-top: 10px;
}
/* 버튼 */
footer a {
  display: inline-block;
  width: 374px;
  height: 70px;

  margin: 46px 20px;
}

.next {
  border: none;

  width: 374px;
  height: 70px;
  /* 모든 입력창에 입력이 되어 있으면 
    background: #BEBEBE;색으로 버튼색이 바껴야함 */
  background: #e1e1e1;
  border-radius: 15px;

  text-align: center;
  line-height: 70px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;

  text-align: center;
  letter-spacing: 4.7px;

  color: #ffffff;
}

.categoryList {
  display: flex;
  justify-content: space-between;
}

.categoryBox {
  display: inline-block;
  text-align: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  letter-spacing: -0.3px;
}

.categoryImg {
  width: 25px;
  height: 25px;

  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}

.imgCircle {
  position: relative;
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ebeef3;

  margin-bottom: 10px;
  margin-top: 15px;
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
  background: url(../assets/img/uncheck.png) right no-repeat;
  background-size: 15px;
  cursor: pointer;
}

input[type="checkbox"]:checked + label {
  background: url(../assets/img/check.png) right no-repeat;
  background-size: 15px;
}

footer {
  display: block;
  width: 414px;
  height: 200px;
}

footer a {
  display: inline-block;
  width: 374px;
  height: 70px;

  margin: 46px 20px;
}

.next {
  border: none;

  width: 374px;
  height: 70px;
  /* 모든 입력창에 입력이 되어 있으면 
    background: #BEBEBE;색으로 버튼색이 바뀜 */
  background: #f2cfff;
  border-radius: 15px;

  text-align: center;
  line-height: 70px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;

  text-align: center;
  letter-spacing: 4.7px;

  color: #ffffff;
}

.mdtimepicker {
  width: 414px;
}
.mdtimepicker .mdtp__wrapper {
  top: 20%;
  bottom: auto;
}
</style>