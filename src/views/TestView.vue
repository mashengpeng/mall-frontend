<template>
  <div class="msp">
    <div class="header">
      <div class="logo">logo</div>
      <div class="banner1">banner1</div>
      <div class="banner2">banner2</div>
    </div>
    <div>菜单</div>
    <div class="body">
      <div class="main">
        <div class="a">
          <div class="one"></div>
          <div class="two"></div>
        </div>
        <div>
          <div class="three"></div>
          <div class="four"></div>
          <div class="five"></div>
          <div class="six"></div>
        </div>
      </div>
      <div class="main-right">
        <div class="seven"></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="footer"></div>
  </div>
</template>

<script setup></script>
<style scoped>
.footer {
  width: 960px;
  height: 60px;
  background-color: rgb(221, 221, 221);
}

.seven ~ div {
  margin-top: 10px;
}

.body::after {
  content: "";
  display: block;
  clear: both;
}

.body {
  width: 960px;
  margin-bottom: 10px;
}

.main,
.main-right {
  float: left;
}

.main-right > div {
  width: 200px;
  height: 130px;
  border: 1px solid;
}

.a::after {
  content: "";
  display: block;
  clear: both;
}

.a {
  margin-bottom: 10px;
}

.a + div > div {
  border: 1px solid;
  width: 180px;
  height: 200px;
  float: left;
}

.three ~ div {
  margin-left: 10px;
}

.one {
  margin-right: 10px;
}

.one,
.two {
  width: 370px;
  height: 200px;
  border: 1px solid;
  float: left;
}

.main {
  width: 750px;
  height: 410px;
  margin-right: 10px;
}

.header + div {
  width: 960px;
  height: 30px;
  background-color: rgb(221, 221, 221);
  text-align: center;
  line-height: 30px;
  margin-bottom: 10px;
}

.header div {
  background-color: rgb(221, 221, 221);
  text-align: center;
}

.header div {
  float: left;
  height: 80px;
  line-height: 80px;
}

.header {
  width: 960px;
}

.logo {
  width: 200px;
}

.banner1 {
  width: 540px;
  margin: 0 10px;
}

.banner2 {
  width: 200px;
}

.header::after {
  content: "";
  display: block;
  clear: both;
  margin-bottom: 10px;
}
</style>
