<template>
  <article>
    <div class="reviewPhotoBox">
      <div class="reviewPhoto"></div>
      <div class="reviewPhoto"></div>
      <div class="reviewPhoto">
        <span class="reviewPhotoPlus">+99</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
.reviewPhotoBox {
		display: flex;
		justify-content: space-between;

    width: 414px;
    padding: 14px 20px;
    
		box-sizing: border-box;

    text-align: center;
    line-height: 90px;

    border-bottom: 1px solid #E9E9E9;
    
}

.reviewPhotoPlus {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.7px;
    
    color: #FFFFFF;
}

.reviewPhoto {
    float: left;
    width: 116px;
    height: 85px;

    background: #C4C4C4;
    border-radius: 10px;
}
</style>