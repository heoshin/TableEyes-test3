<template>
  <article>
    <div class="storeReviewAvg">
      <div class="allAvg">
        <p class="allAvg-title">전체평점</p>
        <p class="allAvg-num">{{ totalStar }}</p>
        <span class="allAvg-star"><span :style="totalStarWidth"></span></span>
      </div>
      <div class="allRating">
        <ul>
          <li>
            <div class="allRating-chart">
              <div class="allRating-bar" :style="totalKindStaWidth"></div>
            </div>
            <span class="allRating-score">{{ totalKindStar }}</span>
            <span class="allRating-name">친절도</span>
          </li>
          <li>
            <div class="allRating-chart">
              <div class="allRating-bar" :style="totalcleanStarWidth"></div>
            </div>
            <span class="allRating-score">{{ totalcleanStar }}</span>
            <span class="allRating-name">청결도</span>
          </li>
          <li>
            <div class="allRating-chart">
              <div class="allRating-bar" :style="totalConvenienceStarWidth"></div>
            </div>
            <span class="allRating-score">{{ totalConvenienceStar }}</span>
            <span class="allRating-name">편의성</span>
          </li>
          <li>
            <div class="allRating-chart">
              <div class="allRating-bar" :style="totalAtmosphereStarWidth"></div>
            </div>
            <span class="allRating-score">{{ totalAtmosphereStar }}</span>
            <span class="allRating-name">분위기</span>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    totalStar: Number,
    totalKindStar: Number,
    totalcleanStar: Number,
    totalConvenienceStar: Number,
    totalAtmosphereStar: Number,
  },
  data() {
    return {
      totalStarWidth: {
        width: this.totalStar * 20 + "%",
      },
      totalKindStaWidth: {
        width: this.totalKindStar * 20 + "%",
      },
      totalcleanStarWidth: {
        width: this.totalcleanStar * 20 + "%",
      },
      totalConvenienceStarWidth: {
        width: this.totalConvenienceStar * 20 + "%",
      },
      totalAtmosphereStarWidth: {
        width: this.totalAtmosphereStar * 20 + "%",
      },
    };
  },
};
</script>

<style scoped>
.storeReviewAvg {
  width: 414px;
  height: 135px;

  border-bottom: 1px solid #e3e3e3;
}

.allAvg {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 20px 40px 10px 30px;

  width: 98px;
  height: 104px;

  float: left;
}

.allAvg-title {
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  letter-spacing: 6px;

  color: #919191;
}

.allAvg-num {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  letter-spacing: 1.7px;

  color: #000000;
}

.allAvg-star {
  width: 88px;
}

.allAvg-star,
.allAvg-star span {
  display: inline-block;
  height: 17px;
  overflow: hidden;
  background: url(../../../assets/img/star.png) no-repeat;
  background-size: auto 34px;
}

.allAvg-star span {
  background-position: left bottom;
  line-height: 0;
  vertical-align: top;
}

.allRating {
  float: left;
  margin-top: 20px;

  width: 229px;
  height: 99px;
}

.allRating ul li {
  margin-bottom: 7px;
}

.allRating-chart {
  display: inline-block;
  width: 163px;
  background: #efefef;
  border-radius: 10px;
  height: 14px;

  transform: translateY(35%);
}

.allRating-bar {
  display: inline-block;
  border-radius: 10px;
  height: 14px;
  background: #f4b350;

  transform: translateY(-24%);
}

.allRating-score {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  letter-spacing: -0.3px;

  margin-left: 9px;
}

.allRating-name {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;

  letter-spacing: -0.3px;

  color: #767676;

  margin-left: 4px;
}
</style>