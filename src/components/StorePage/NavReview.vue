<template>
  <div>
    <AllReviewAvg
      totalStar="3.1"
      totalKindStar="3.0"
      totalcleanStar="2.5"
      totalConvenienceStar="4.0"
      totalAtmosphereStar="5.0"
    />
    <ReviewBar reviewCount="040207" />
    <ReviewPhotoBar/>
    <PhotoReview />
    <NormalReview />
  </div>
</template>

<script>
import AllReviewAvg from "@/components/StorePage/NavReview/AllReviewAvg.vue";
import ReviewBar from "@/components/StorePage/NavReview/ReviewBar.vue";
import ReviewPhotoBar from "@/components/StorePage/NavReview/ReviewPhotoBar.vue";
import PhotoReview from "@/components/StorePage/NavReview/PhotoReview.vue";
import NormalReview from "@/components/StorePage/NavReview/NormalReview.vue";

export default {
  components: {
    AllReviewAvg,
    ReviewBar,
    ReviewPhotoBar,
    PhotoReview,
    NormalReview,
  },
};
</script>

<style>
</style>