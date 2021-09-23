<template>
  <div>
    <AllReviewAvg />
    <ReviewBar />
    <ReviewPhotoBar />
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