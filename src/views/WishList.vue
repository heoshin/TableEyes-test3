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
</style>