<template>
  <div class="reviewBox">
    <div class="mainreview-title">
      <div>
        <span class="MRT-name">사용자</span>
        <span class="MRT-date">2020.1.4</span>
      </div>
      <span class="MRT-star"><span style="width: 50%"></span></span>
    </div>
    <div class="mainreview-rating">
      <div class="MRR-photo"></div>
      <div class="MRR-Rating">
        <ul>
          <li>
            <div class="MRR-Rating-chart">
              <div class="MRR-Rating-bar" style="width: 90%"></div>
            </div>
            <span class="MRR-Rating-score">4.5</span>
            <span class="MRR-Rating-name">친절도</span>
          </li>
          <li>
            <div class="MRR-Rating-chart">
              <div class="MRR-Rating-bar" style="width: 78%"></div>
            </div>
            <span class="MRR-Rating-score">3.9</span>
            <span class="MRR-Rating-name">청결도</span>
          </li>
          <li>
            <div class="MRR-Rating-chart">
              <div class="MRR-Rating-bar" style="width: 40%"></div>
            </div>
            <span class="MRR-Rating-score">2.0</span>
            <span class="MRR-Rating-name">편의성</span>
          </li>
          <li>
            <div class="MRR-Rating-chart">
              <div class="MRR-Rating-bar" style="width: 100%"></div>
            </div>
            <span class="MRR-Rating-score">5.0</span>
            <span class="MRR-Rating-name">분위기</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="mainreview-textPhoto">
      <p class="MRT-text">
        dksjdfaksjfalkjdfalskjdflaskdjflakjsdfaslkdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      </p>
    </div>
    <span class="MRG-num">198</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.reviewBox {
    width: 414px;

    border-bottom: 1px solid #E3E3E3;
    margin-bottom: 15px;

    box-sizing: border-box;
		padding:  0px 20px;
}

.mainreview-title {
		display: flex;
		justify-content: space-between;

    height: 50px;

    margin-top: 6px;
}

.MRT-name:before {
    content:"";
    background-image: url("../../../assets/img/review-sad.png");
    background-image: url("../../../assets/img/review-smile.png") ;
    background-size:35px 35px;
    width: 35px;
    height:35px;
    display:inline-block;

    margin-right: 15px;
    transform: translateY(25%);
}

.MRT-name {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.3px;
    margin-right: 5px;
}

.MRT-date {
    margin-left: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;

    letter-spacing: -0.3px;

    color: #A6A6A6;
}

.MRT-star{ 
    width: 104px;
    margin-top: 15px;
}

.MRT-star, .MRT-star span {
    display: inline-block;
    height: 20px;
    overflow:hidden;
    background: url(../../../assets/img/star.png)no-repeat;
    background-size: auto 40px;
}

.MRT-star span {
    background-position: left bottom;
    line-height: 0;
    vertical-align: top;
}

.mainreview-rating {
    width: 394px;
    overflow: hidden;

    margin-top: 10px;
}

.MRR-photo {
    float: left;
    width: 169px;
    height: 137px;
    background-color: #C4C4C4;
    border-radius: 10px;

    margin-right: 30px;
}

.MRR-Rating {
    float: left;

    width: 180px;
    height: 99px;
}

.MRR-Rating ul li {
    margin-bottom: 3px;
}

.MRR-Rating-chart {
    display: inline-block;
    width: 122px;
    background: #EFEFEF;
    border-radius: 10px;
    height: 12px;

    transform: translateY(35%);
}

.MRR-Rating-bar {
    display: inline-block;
    border-radius: 10px;
    height: 12px;
    background: #F4B350;

    transform: translateY(-44%);
}

.MRR-Rating-score {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    letter-spacing: -0.3px;

    margin-left: 10px;
}

.MRR-Rating-name {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    
    letter-spacing: -0.3px;
    
    color: #767676;   
    
    margin-left: 4px;
}

.mainreview-textPhoto {
    margin-top: 14px;

    width: 380px;
}

.mainreview-text {
    float: left;
    width: 160px;

    margin-right: 24px;
}

.MRT-text {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;

    word-wrap: break-word;
}

.MRG-num {
    display: block;

    width: 60px;
    height: 20px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    letter-spacing: -0.3px;
    
    margin-bottom: 16px;

    margin-top: 10px;
}

.MRG-num:before {
    content:"";
    background-image: url("../../../assets/img/good.png") ;
    background-size:20px 20px;
    width: 20px;
    height: 20px;
    display:inline-block;
    transform: translateY(20%);

    margin-right: 7px;
}
</style>