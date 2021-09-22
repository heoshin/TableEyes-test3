<template>
  <div>
    <Title 
      title="찜한매장"
    />
    <section>
      <NavBar />
      <article>
        <StoreCard 
          title="롯데시네마"
          photo="https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/HIUX2Y6AXDDS3HK3X5LQOO2YIQ.png"
          distance=210
          Star=2.1
          Category="영화관"
        />
        <StoreCard 
          title="ㅁㄴㅇㄻ"
          distance=1
          Star=3.4
          Category="몰랑"
        />
        <StoreCard 
          title="롯데시네마"
          distance=210
          Star=2.1
          Category="영화관"
        />
        <StoreCard 
          title="롯데시네마"
          distance=210
          Star=2.1
          Category="영화관"
        />
        <StoreCard 
          title="롯데시네마"
          distance=210
          Star=2.1
          Category="영화관"
        />
      </article>
    </section>
  </div>
</template>

<script>
import Title from "@/components/PublicComponents/Title.vue";
import StoreCard from "@/components/PublicComponents/StoreCard.vue";
import NavBar from "@/components/WishList/NavBar.vue";

export default {
  components: {
    Title,
    StoreCard,
    NavBar,
  },

  methods: {
    like(idx) {
      let img = document.querySelectorAll(".heart")[idx];

      console.log(img.src);

      if (
        img.src ===
        "file:///C:/Users/HeaJin/Desktop/Tableeyes/TableEyes-test3/src/assets/img/heart.png"
      ) {
        img.src = require("../assets/img/unheart.png");
      } else {
        img.src = require("../assets/img/heart.png");
      }
    },
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
  color: black;
}

body {
  margin-bottom: 99px;
}




/* 여기서부터 selectBox CSS*/
#modalView {
  position: absolute;
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

  color: #c9c9c9;
}

.checkImg {
  background-image: url("../assets/img/selectCheck.png");
  background-size: 19px 15px;
  width: 19px;
  height: 15px;

  margin-left: 14px;
  display: none;
  /* transform: translateY(10%); */
}
</style>