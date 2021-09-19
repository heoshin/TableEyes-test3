<template>
  <div>
    <!-- <header>
      <p>테이블 아이즈</p>
    </header> -->

    <section class="storeMain">
      <article class="information">
        <p class="informationFont">정보를 입력해주세요</p>
        <InformationCard
          title="사업자 정보"
          description="사업자 등록증의 상표, 사업자 등록증의 대표자 입력, 사업자 등록번호"
        />
        <InformationCard
          title="매장 정보"
          description="사업자 등록증의 상표, 사업자 등록증의 대표자 입력, 사업자 등록번호"
        />
      </article>
      <InformationCheck />
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
          <InputText
            title="사업자 등록증의 상호"
            description="사업자 등록증의 상호를 입력해주세요"
          />
          <InputText
            title="사업자 등록증의 대표자"
            description="사업자 등록증의 대표자를 입력해주세요"
          />
          <InputNumber
            title="사업자 등록번호"
            description="사업자 등록번호를 입력해주세요"
          />
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
          <InputText
            title="가게명"
            description="고객들에게 보여질 가게 이름을 입력해주세요"
          />
          <InputText
            title="업장주소"
            description="가게의 위치를 입력해주세요"
          />
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
        <InputNumber title="업주전화" description="업주전화를 입력해주세요" />
        <InputNumber
          title="가게전화"
          description="가게의 전화를 입력해주세요"
        />
      </section>

      <!-- <footer>
      <a href="./newStore-2.html" type="submit">
      <button class="next" onclick="location.href='./newStore-2.html'">
        다음으로
      </button>
      </a>
    </footer> -->
    </form>

    <!-- 가게정보페이지-4 -->
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
        <Category />
        <Amenities />
      </section>

      <!-- <footer>
        <a href="./newStore-2.html" type="submit"
          ><button class="next" onclick="location.href='./newStore-2.html'">
            다음으로
          </button></a
        >
      </footer> -->
    </form>

    <!-- 가게정보확인페이지 -->
    <!-- <header>
      <p>확인하기</p>
    </header> -->
    <section>
      <article class="checkBox">
        <p class="subTitle">기본정보</p>
        <div class="subContentBox">
          <div class="contentTitle">
            <p>가게명</p>
            <p>업장주소</p>
          </div>
          <div class="content">
            <p>스타벅스</p>
            <p>해운대구 좌동로12</p>
          </div>
        </div>
      </article>
      <article class="checkBox">
        <p class="subTitle">사업자 정보</p>
        <div class="subContentBox">
          <div class="contentTitle" style="margin-right: 35px">
            <p>사업자 등록증의 상호</p>
            <p>사업자 등록증의 대표자</p>
            <p>사업자 등록번호</p>
          </div>
          <div class="content">
            <p>스타벅스</p>
            <p>사용자</p>
            <p>123-4567-8900</p>
          </div>
        </div>
      </article>
      <article class="checkBox">
        <p class="subTitle">영업시간 설정</p>
        <div class="subContentBox">
          <div class="contentTitle">
            <p>영업시간</p>
          </div>
          <div class="content">
            <div class="checkTimeBox">
              <span>9:00 PM</span>
              <span>~</span>
              <span>20:00 AM </span>
            </div>
          </div>
        </div>
      </article>
      <article class="checkBox">
        <p class="subTitle">전화번호</p>
        <div class="subContentBox">
          <div class="contentTitle">
            <p>업주전화</p>
            <p>가게전화</p>
          </div>
          <div class="content">
            <p>010-1234-5678</p>
            <p>050-2004-1009</p>
          </div>
        </div>
      </article>
      <article class="checkBox">
        <p class="subTitle">카테고리 / 편의시설</p>
        <div class="subContentBox">
          <div class="contentTitle">
            <p>카테고리</p>
            <p>편의시설</p>
          </div>
          <div class="content">
            <p>카페</p>
            <button>클릭해서보기</button>
          </div>
        </div>
      </article>
    </section>
    <!-- <footer></footer> -->
  </div>
</template>

<script>
import InformationCard from "@/components/RegisterStore/InformationCard.vue";
import InformationCheck from "@/components/RegisterStore/InformationCheck.vue";
import InputText from "@/components/RegisterStore/InputText.vue";
import InputNumber from "@/components/RegisterStore/InputNumber.vue";
import Category from "@/components/RegisterStore/Category.vue";
import Amenities from "@/components/RegisterStore/Amenities.vue";

export default {
  components: {
    InformationCard,
    InformationCheck,
    InputText,
    InputNumber,
    Category,
    Amenities,
  },
};
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
  margin-bottom: 200px;

  overflow: hidden;
}

header {
  overflow: hidden;
  position: fixed;

  top: 0;
  left: 753px;
  background-color: #fff;

  width: 414px;
  height: 97px;

  border-bottom: 12px solid #e6e6e6;
}

footer {
  position: fixed;

  bottom: 0;
  left: 753px;

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

.storeMain {
  box-sizing: border-box;
  padding: 0px 20px;
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

/* 가게정보확인페이지 */
.checkBox {
    width: 414px;

    box-sizing: border-box;

    padding-left: 20px;
    padding-bottom: 26px;

    border-bottom: 1px solid #E3E3E3;;
}

.subTitle {
    display:block;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: -0.3px;
    
    margin-top: 23px;
}

.subContentBox {
    margin-top: 14px;
    border-radius: 3px;
}

.contentTitle {
    float: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    
    letter-spacing: -0.3px;
    
    color: #6F7198;
    
    margin-right: 22px;
}

.content {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    
    letter-spacing: -0.3px;
}

/* 클릭해서보기버튼 */
.content button {
    width: 264px;
    height: 18px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    letter-spacing: -0.3px;
    
    color: #CBCBCB;

    background: #FFFFFF;
    border: 1px solid #CBCBCB;
    box-sizing: border-box;
    border-radius: 5px;
}

.content button:hover {
    color: #ffffff;
    background: #ececec;
}

/* 영업시간 정렬 */

.checkBox .subContentBox .content .checkTimeBox {
    width: 194px;
    
    display: flex;
    justify-content: space-between;
}
</style>