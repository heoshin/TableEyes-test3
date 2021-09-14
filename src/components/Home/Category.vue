<template>
  <article class="choice">
    <div>
      <a href="#">
        <span></span>
        <p>전체</p>
      </a>
      <a href="#">
        <span></span>
        <p>영화</p>
      </a>
      <a href="#">
        <span></span>
        <p>노래방</p>
      </a>
      <a href="#">
        <span></span>
        <p>스포츠</p>
      </a>
      <a href="#">
        <span></span>
        <p>pc방</p>
      </a>
      <a href="#">
        <span></span>
        <p>보드게임</p>
      </a>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
* {margin: 0; padding: 0;}
ul {list-style: none;}
a {text-decoration: none;}

.choice {
  width: 414px;
  height: 289px;
  margin-bottom: 10px;

  box-sizing: border-box;
  padding: 0px 15px;
}
.choice div {
  width: 414px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.choice div a {
  color: black;
  margin-right: 30px;
  margin-top: 20px;
}
.choice div a span {
  display: block;
  width: 90px;
  height: 90px;
  background-color: #c4c4c4;
  border-radius: 50%;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
}
.choice div a p {
  margin-top: 5px;
  text-align: center;
}
.choice a:hover span {
  background-color: #6a6a6a;
}


</style>