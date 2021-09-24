<template>
  <article>
    <div class="reviewBar">
      <span class="reviewBar-title">리뷰</span>
      <span class="reviewBar-num">{{reviewCount}}</span>
      <div class="reviewBar-Photo">
        <input type="checkbox" />
        <span>사진리뷰만</span>
      </div>
      <span class="reviewBar-bar"> | </span>
      <span>
        <select class="reviewBar-date">
          <option>최신순</option>
          <option>최신순</option>
          <option>최신순</option>
        </select>
      </span>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    reviewCount: Number,
  }
};
</script>

<style>
.reviewBar {
  width: 414px;

  padding-bottom: 10px;
  border-bottom: 9px solid #ebebeb;
}

.reviewBar-title {
  margin-left: 20px;
  margin-top: 15px;

  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 17px;

  color: #777777;
}

.reviewBar-num {
  display: inline-block;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0.7px;

  color: #acacac;
}

.reviewBar-Photo {
  margin-left: 60px;

  display: inline-block;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.7px;
}

.reviewBar-bar {
  margin-left: 11px;
  margin-right: 11px;
  color: #d7d7d7;
}

.reviewBar-date {
  width: 65px;
  border: 0px;
  background: url(../../../assets/img/down.png) no-repeat 1%;
  text-align-last: right;
  appearance: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.7px;

  direction: rtl;
}
</style>