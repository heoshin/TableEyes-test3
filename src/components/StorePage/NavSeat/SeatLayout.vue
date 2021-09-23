<template>
  <div>
    <div id="bgr" style="display: none">
      <div id="BlackWindow" @click="CloseModal()"></div>
      <!-- <div onclick="CloseModal()" id="backgroundModal"></div> -->
      <div
        class="seatArry"
        style="position: fixed; bottom: 25em; z-index: 55"
      ></div>
      <div class="seatSelectionBox">
        <div class="seatSelectMainBox">
          <img
            src="@/assets/img/close.png"
            alt="닫는창"
            id="Close-icon"
            @click="CloseModal()"
          />
          <p>좌석선택</p>
          <div class="seatSelectInfoBox">
            <div class="seatSelectPhoto"></div>
            <div class="seatSelectInfo">
              <!-- 선택창 파트 -->
              <div>
                <div class="seatSelect" @click="controlSelect()">
                  <p id="select-title">좌석 선택</p>
                  <span id="select-icon"></span>
                </div>
                <div id="option">
                  <p @click="table(0)">1번 테이블</p>
                  <p @click="table(1)">2번 테이블</p>
                </div>
              </div>

              <!-- 이용가능 파트 -->
              <div class="seatSelectInfoDiv">
                <div class="selectColorBox"></div>
                <span class="selectSeatFont">이용가능</span>
              </div>
            </div>
          </div>
        </div>

        <div class="seatSelectSubBox">
          <div class="seatStyle">
            <span class="seatStyleTitle">일반석</span>
            <span class="seatStylePlus">창가자리</span>
          </div>
        </div>
      </div>
    </div>
    <article>
      <div class="seatArry" @click="OpenModal()"></div>
    </article>
  </div>
</template>

<script>
export default {
  methods:{
    OpenModal() {
        let open = $('#bgr')
        open.fadeIn();
        $('.seatSelectionBox').animate({
            'bottom': '0'
        },500)
    },

    CloseModal() {
        let select = document.getElementsByClassName('seatSelect')[0]
        let title = document.getElementById('select-title')
        let icon = document.getElementById('select-icon')
        let option = document.getElementById('option')
        let close = $('#bgr')

        close.fadeOut()

        if (option.style.display !== 'block') return 0

        select.style.backgroundColor  = '#fff'
        title.innerText = '좌석 선택'
        title.style.color = '#000'
        icon.style.background = "url('../../../assets/img/화살표-다운.png')"
        option.style.display = 'none'
    },

    OpenSelect(settings) {
        let { select, title, icon, option } = settings

        option.style.display = 'block'
        select.style.backgroundColor  = '#F3F6F9'
        title.innerText = '좌석'
        title.style.color = '#8E8DAF'
        icon.style.background = "url('../../../assets/img/화살표-업.png')"
    },

    CloseSelect(settings) {
        let { select, title, icon, option } = settings
        
        option.style.display = 'none'
        select.style.backgroundColor  = '#fff'
        title.innerText = '좌석 선택'
        title.style.color = '#000'
        icon.style.background = "url('../../../assets/img/화살표-다운.png')"
    },

    controlSelect() {
        let select = document.getElementsByClassName('seatSelect')[0]
        let title = document.getElementById('select-title')
        let icon = document.getElementById('select-icon')
        let option = document.getElementById('option')

        let settings = {
            select,
            title,
            icon,
            option,
        }

        if (option.style.display === "none") 
            return OpenSelect(settings)
        CloseSelect(settings)
    },

      table(choose) {
        console.log(choose)
    },
  },
};
</script>

<style>
/* 자리 패치도 */
.seatArry {
  width: 296px;
  height: 428px;

  margin: 0 59px 80px;
  background: #f3f1f8;
  border-radius: 10px;

  cursor: pointer;
}

/* 배경 */
#BlackWindow {
  position: fixed; top: 0;

  width: 414px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
/* 셀렉트 전체 */
.seatSelectionBox {
  width: 414px;

  overflow: hidden;

  background-color: white;
  border-radius: 30px 30px 0px 0px;

  position: fixed;
  bottom: -400px;
}
#Close-icon {
  display: block;

  max-width: 20px;

  border-radius: 50%;

  margin-left: 93%;
  cursor: pointer;
}
#Close-icon:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
/* 파트 1 */
.seatSelectMainBox {
  box-sizing: border-box;
  padding: 30px 20px 20px;
}
/* 좌석선택 */
.seatSelectMainBox > p {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
}
.seatSelectInfoBox {
  display: flex;
  justify-content: space-between;

  margin: 10px 0;
}
.seatSelectPhoto {
  display: inline-block;

  width: 115px;
  height: 115px;

  background: url("http://img.tf.co.kr/article/home/2019/02/14/20194969155015405210.jpg");
  background-size: 115px 115px;

  border-radius: 15px;
}

/* 선택 창 */
.seatSelect {
  width: 248px;
  height: 54px;

  border: 1px solid #c5c9e1;
  border-radius: 10px;

  position: relative;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: -0.3px;

  margin: 10px 0;

  cursor: pointer;
}
/* 아이콘 */
#select-icon {
  position: absolute;
  right: 10%;
  top: 15px;

  display: inline-block;
  width: 25px;
  height: 25px;
  background: url(../../../assets/img/화살표-다운.png);
}
/* 선택창 좌석선택 */
.seatSelect > p {
  margin: 15px;

  display: inline-block;
}
/* 선택 창 */
#option {
  width: 248px;
  height: 105px;
  background-color: #fff;

  position: fixed;
  margin-top: -16px;

  border: 1px solid #c5c9e1;
  border-radius: 0 0 10px 10px;
  border-top: none;

  display: none;
}
#option > p {
  line-height: 50px;
  margin: 0 20px;
  border-top: 1px solid #f0f0f9;

  cursor: pointer;
}
/* 이용가능 뭍음 */
.seatSelectInfoDiv {
  margin-left: 10px;

  display: flex;
  align-items: center;
}
/* 이용가능 옆 내묘 */
.selectColorBox {
  width: 13px;
  height: 13px;

  border-radius: 2px;
  margin-right: 13px;
  background-color: #d1d4e7;
}
/* 이용가능 */
.selectSeatFont {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  letter-spacing: -0.3px;

  color: #8e8daf;
}
/* 파트 2 */
.seatSelectSubBox {
  width: 414px;
  height: 154px;

  overflow: hidden;

  padding: 0px 20px;
  box-sizing: border-box;

  background: #f3f1f8;
}
.seatStyle {
  width: 374px;
  height: 53px;

  background-color: #fff;
  border-radius: 10px;

  margin-top: 17px;

  padding: 17px 19px;
  box-sizing: border-box;
}
/* 일반석 */
.seatStyleTitle {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;

  letter-spacing: 0.7px;

  float: left;
}
/* 창가자리 */
.seatStylePlus {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;

  letter-spacing: -0.3px;

  color: #8e8daf;
  float: right;
}

.seatStylePlus:before {
  content: "";
  background-image: url("../../../assets/img/별.png");
  background-size: 12px 12px;
  width: 12px;
  height: 12px;
  display: inline-block;

  transform: translateY(1px);

  margin-right: 2px;
}
</style>