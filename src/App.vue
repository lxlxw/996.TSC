<template>
  <div id="app">
    <div class='info'>
      <img class='logo' :src='logo' />
      <h1>996.TSC</h1>
      <p>996.TSC：996，The Surrounding Culture (周边文化)</p>
      <p><a href='https://github.com/996icu/996.ICU' target="_blank">996.ICU</a>衍生出来的周边文化，旨在让更多人知道并加入 996.ICU 的活动中来</p>
      <strong>此项目担任<a href='https://github.com/996icu/996.ICU' target="_blank">996.ICU</a>的文化宣传工作</strong>
      <p>号召大家为此项目贡献相关周边，包括但不限于：表情包、文化衫、海报、Logo、壁纸、媒体报道、精彩讨论文章...</p>
      <a href='https://github.com/lxlxw/996.TSC#周边贡献标准' target="_blank">我也要做贡献～</a>
      <div class='footer'>
        <iframe src="https://ghbtns.com/github-btn.html?user=lxlxw&repo=996.TSC&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
        <a href="https://996.icu" target='_blank'><img src="https://img.shields.io/badge/link-996.icu-red.svg"></a></div>
    </div>
    <div class='tab-bar'>
      <el-button size="medium" :type='primary("sticker")' @click='route("/sticker")'>表情包</el-button>
      <el-button size="medium" :type='primary("joke")' @click='route("/joke")'>段子</el-button>
      <el-button size="medium" :type='primary("screenshot")' @click='route("/screenshot")'>截图</el-button>
      <el-button size="medium" :type='primary("tshirt")' @click='route("/tshirt")'>文化衫</el-button>
      <el-button size="medium" :type='primary("poster")' @click='route("/poster")'>海报</el-button>
      <el-button size="medium" :type='primary("music")' @click='route("/music")'>音乐</el-button>
      <el-button size="medium" :type='primary("poetry")' @click='route("/poetry")'>诗歌</el-button>
      <el-button size="medium" :type='primary("video")' @click='route("/video")'>视频</el-button>
      <el-button size="medium" :type='primary("logo")' @click='route("/logo")'>Logo</el-button>
      <el-button size="medium" :type='primary("wallpaper")' @click='route("/wallpaper")'>壁纸</el-button>
      <el-button size="medium" :type='primary("media")' @click='route("/media")'>媒体报道</el-button>
      <el-button size="medium" :type='primary("article")' @click='route("/article")'>讨论文章</el-button>
    </div>
    <router-view />
    <vue-progress-bar></vue-progress-bar>
    <div v-show="display" @click="top()" class="page-top">
      <i class="el-icon-caret-top"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      logo: require("./assets/logo.png"),
      display: false
    };
  },
  methods: {
    primary(route) {
      if (this.$route.name === route) {
        return "success";
      }
      return "";
    },
    route(name) {
      this.$router.push(name);
    },
    isPC() {
      //是否为PC端
      const userAgentInfo = navigator.userAgent;
      return [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
      ].every(val => {
        return userAgentInfo.indexOf(val) === -1;
      })
    },
    top() {
      scrollTo(0,0);
    },
    onscroll() {
      this.display = window.scrollY >= 450;
    }
  },
  created() {
    if (!this.isPC()) {
      // window.alert("为了最佳体验，请在电脑端使用本网站！");
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onscroll);
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start();
      next();
    });
    this.$router.afterEach((to, from) => {
      this.$Progress.finish();
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onscroll)
  }
};
</script>

<style lang='scss' scoped>
#app {
  margin: 80px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  > .tab-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: fit-content;
    margin: auto;
    padding: 0 100px;
    margin-bottom: 50px;
  }
  iframe {
    margin: 20px 0;
  }

  .footer {
    display: flex;
    align-items: center;
    a img {
      display: block;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 10px 15px 10px;
    img.logo {
      width: 100px;
      height: 100px;
    }
  }

  .page-top {
    background-color: #fff;
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 40px;
    height: 40px;
    size: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),
                0px 2px 2px 0px rgba(0,0,0,0.14),
                0px 1px 5px 0px rgba(0,0,0,0.12);
    z-index: 5;

    i {
      color: #67C23A;
      display: block;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>

<style lang='scss'>
#_hj-f5b2a1eb-9b07_feedback_minimized
  > div._hj-f5b2a1eb-9b07_feedback_minimized_label
  > div._hj-f5b2a1eb-9b07_feedback_minimized_label_text {
  transform: none !important;
}

@media (max-width: 640px) {
  #app {
    > .tab-bar {
      margin: 0 !important;
      width: 90vw !important;
      > button {
        margin: 5px !important;
      }
    }
    .container:not(.post) img {
      width: 80vw !important;
      height: 80vw !important;
    }
    .container.post {
      width: 90vw !important;
    }
  }
}
</style>
