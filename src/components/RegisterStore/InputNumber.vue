<template>
  <article class="boxSize">
    <label class="subTitle">{{ title }}</label>
    <input type="text" class="input" placeholder="-없이 입력해주세요" required />
    <p class="explanation">{{ description }}</p>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped>
/* 항목 컨테이너 */
.boxSize {
  width: 414px;
  height: 180px;

  box-sizing: border-box;

  padding: 0px 20px;
  border-bottom: 1px solid #e3e3e3;
}
/* 각 항목 제목 */
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
/* 선택됐을 때 테두리 보라색 */
input:focus {
  outline: none;
  border: 1px solid #f700ff;
  border-radius: 10px;
}

.input {
  width: 374px;
  height: 58px;

  border: 1px solid #c2c2c2;
  box-sizing: border-box;
  border-radius: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: -0.3px;

  padding-left: 19px;
  margin-top: 14px;
}

.explanation {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  letter-spacing: -1px;

  color: #696969;

  margin-top: 10px;
}
</style>