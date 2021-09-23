<template>
  <div class="storeBar">
    <a href="#" class="B-call">
      <i>전화</i>
    </a>
    <a href="#" class="B-heart">
      <i>{{heart}}</i>
    </a>
    <a href="#" class="B-share">
      <i>공유</i>
    </a>
    <a href="#" class="B-emptyseat">
      <i>{{filledSeat}}/{{totalSeat}}</i>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    heart:Number,
    filledSeat:Number,
    totalSeat:Number,
  },
};
</script>

<style scoped>
.storeBar {
  margin-top: 29px;

  width: 414px;
  background-color: #ffff;

  text-align: center;
  line-height: 120px;

  border-bottom: 12px solid #ebebeb;

  overflow: hidden;
}

.storeBar a.B-call {
  background-image: url(../../../assets/img/B-call.png);
  background-size: 37px 38px;
  border-right: 0.1px solid #f5f5f5;
}

.storeBar a.B-heart {
  background-image: url(../../../assets/img/B-heart.png);
  background-size: 29px 26px;
  border-right: 0.1px solid #f5f5f5;
}

.storeBar a.B-share {
  background-image: url(../../../assets/img/B-share.png);
  background-size: 35px 35px;
  border-right: 0.1px solid #f5f5f5;
}

.storeBar a.B-emptyseat {
  background-image: url(../../../assets/img/B-emptyseat.png);
  background-size: 32px 33px;
}

.storeBar a {
  display: block;
  float: left;
  height: 74px;
  width: 102px;
  background: 50% 50% no-repeat;
  overflow: hidden;
}

.storeBar i {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
}
</style>