<template>
  <div>
    <div id="modalView" @click="closeModal">
      <div id="Views">
        <ul class="selectBox">
          <li v-for="(item, i) in sortKinds" :key="i">
            <a href="#" class="option" :class="{ optionSel: i == curSortIdx, optionUnSel: i != curSortIdx}" @click="select(i)">{{ item }}</a>
            <div class="checkImg" v-if="i == curSortIdx"></div>
          </li>
        </ul>
      </div>
    </div>

    <div class="KimBox">
      <span class="StoreNum">찜한 매장 24개</span>
      <div class="arrayBox" @click="openModal">
        <span id="modal">{{ sortKinds[curSortIdx] }}</span>
        <img src="@/assets/img/gray.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortKinds: ["최근순", "인기순", "리뷰많은순", "별점 높은순", "저가순"],
      curSortIdx: 0,
    };
  },
  methods: {
    openModal() {
      const modal = $("#modalView");

      $("#Views").animate(
        {
          bottom: "0",
        },
        700
      );
      modal.fadeIn();
    },

    select(idx) {
      this.curSortIdx = idx;
      this.closeModal();
    },

    closeModal() {
      const speed = 500;
      const modal = $("#modalView");

      modal.fadeOut(speed, "swing");

      document.getElementById("Views").animate(
        {
          bottom: "-400px",
        },
        speed
      );

      setTimeout(() => {
        document.querySelector("#modalView").style.display = "none";
      }, speed);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}


.KimBox {
  width: 414px;
  height: 59px;

  line-height: 59px;

  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
}

.StoreNum {
  font-family: "";
  font-style: normal;
  font-weight: normal;
  font-size: 15px;

  letter-spacing: -0.3px;

  color: #7e7e7e;
}

.arrayBox {
  display: inline-block;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;

  letter-spacing: -0.3px;

  color: #6f7198;
  cursor: pointer;
}

#modalView {
  position: absolute;
  top: 0px;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);

  width: 414px;
  height: 100%;
  display: none;
}
#Views {
  position: fixed;
  bottom: -400px;
  width: 414px;
  height: 395px;

  background-color: #fff;
  border-radius: 30px 30px 0px 0px;

  box-sizing: border-box;
  padding: 0px 20px;
  padding-top: 19px;
}

.selectBox li {
  padding: 20px 3px;
  display: flex;

  border-bottom: 1px solid #ebebeb;
}
.selectBox li a {
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;

  letter-spacing: -0.3px;
}
.optionUnSel {
  color: #c9c9c9;
}
.optionSel {
  color: black;
}

.checkImg {
  background-image: url("../../assets/img/selectCheck.png");
  background-size: 19px 15px;
  width: 19px;
  height: 15px;

  margin-left: 14px;
  /* transform: translateY(10%); */
}
</style>