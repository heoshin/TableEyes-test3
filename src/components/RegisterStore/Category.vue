<template>
  <div>
    <article class="boxSize">
      <p class="subTitle">카테고리</p>
      <div class="categoryList">
        <div class="categoryBox" id="ft" onclick="changer(0)">
          <div class="imgCircle">
            <img
              src="@/assets/img/black/Cafe.png"
              alt=""
              class="categoryImg"
            />
          </div>
          <!--.categoryImg.src = "../assets/img/black/B-call.png" -->
          <span class="categoryName">카페</span>
        </div>
        <div class="categoryBox" onclick="changer(1)">
          <div class="imgCircle">
            <img
              src="@/assets/img/black/Game.png"
              alt=""
              class="categoryImg"
            />
          </div>
          <span class="categoryName">게임</span>
        </div>
        <div class="categoryBox" onclick="changer(2)">
          <div class="imgCircle">
            <img
              src="@/assets/img/black/Sing.png"
              alt=""
              class="categoryImg"
            />
          </div>
          <span class="categoryName">노래</span>
        </div>
        <div class="categoryBox" onclick="changer(3)">
          <div class="imgCircle">
            <img
              src="@/assets/img/black/Sport.png"
              alt=""
              class="categoryImg"
            />
          </div>
          <span class="categoryName">스포츠</span>
        </div>
        <div class="categoryBox" onclick="changer(4)">
          <div class="imgCircle">
            <img
              src="@/assets/img/black/Other.png"
              alt=""
              class="categoryImg"
            />
          </div>
          <span class="categoryName">기타</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.boxSize {
  width: 414px;
  height: 180px;

  box-sizing: border-box;

  padding: 0px 20px;
  border-bottom: 1px solid #e3e3e3;
}

.subTitle {
  display: inline-block;

  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.3px;

  margin-top: 23px;

  width: 300px;
}

.categoryList {
  display: flex;
  justify-content: space-between;
}

.categoryBox {
  display: inline-block;
  text-align: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  letter-spacing: -0.3px;
}

.categoryImg {
  width: 25px;
  height: 25px;

  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}

.imgCircle {
  position: relative;
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ebeef3;

  margin-bottom: 10px;
  margin-top: 15px;
}
</style>