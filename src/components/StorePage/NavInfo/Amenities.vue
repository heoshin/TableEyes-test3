<template>
  <article>
    <div class="amenities">
      <p>편의시설</p>
    </div>
    <div class="scroll">
      <AmenitiesList 
        img=https://t1.daumcdn.net/cfile/tistory/99F09B345C49795004
        categoryTitle="주차가능"
      />
      <AmenitiesList 
        img=https://t1.daumcdn.net/cfile/tistory/99F09B345C49795004
        categoryTitle="송하야"
      />
      <AmenitiesList 
        img=https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Coraz%C3%B3n.svg/1200px-Coraz%C3%B3n.svg.png
        categoryTitle="사랑해"
      />
      <AmenitiesList 
        img=https://t1.daumcdn.net/cfile/tistory/99F09B345C49795004
        categoryTitle="송하양ㄹ"
      />
      <AmenitiesList 
        img=https://cdn.edujin.co.kr/news/photo/201906/31061_52606_5811.jpg
        categoryTitle="반가웡"
      />
    </div>
  </article>
</template>

<script>
import AmenitiesList from "@/components/StorePage/NavInfo/AmenitiesList.vue";

export default {
  components: {
    AmenitiesList,
  },
};
</script>

<style scoped>
.amenities p {
  margin-top: 29px;
  margin-left: 20px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
}

.scroll {
  padding-left: 20px;
  margin-top: 20px;

  width: 394px;
  height: 110px;

  white-space: nowrap;
  overflow-x: visible;
  overflow-y: hidden;

  border-bottom: 12px solid #ebebeb;
}

.scroll::-webkit-scrollbar {
  display: none;
}
</style>