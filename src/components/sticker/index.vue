<template>
  <div class='container'>
    <div v-lazy-container="{ selector: 'img' }">
      <img v-for='item in data' :data-src='item' />
    </div>
  </div>
</template>

<script>
const data = require.context("./data");

export default {
  name: "Sticker",
  data() {
    return {
      data: data.keys().map(path => require("./data/" + path.replace("./", "")))
    };
  },
  created() {
    console.log("2222");
  }
};
</script>

<style scoped lang='scss'>
.container {
  width: 95%;
  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 17vw;
    height: 17vw;
    object-fit: contain;
    margin: 10px;
  }
}
</style>

