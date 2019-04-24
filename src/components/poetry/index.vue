<template>
  <div class='container'>
    <vue-markdown class='post' v-for='item in posts'>{{item}}</vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
const data = require.context("./data", false, /.md/);

export default {
  name: "Tshirt",
  data() {
    return {
      posts: data
        .keys()
        .map(path => require("./data/" + path.replace("./", "")))
    };
  },
  components: {
    VueMarkdown
  }
};
</script>

<style scoped lang='scss'>
.container {
  width: 60%;
  text-align: center;
  img {
    width: 17vw;
    height: 17vw;
    object-fit: contain;
    margin: 10px;
  }
}
</style>

<style>
h1 {
  text-align: center;
}
</style>

