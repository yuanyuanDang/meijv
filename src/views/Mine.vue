<template>
  <div class="mine-container">
    <div class="head-pic">
      <img src="../assets/images/mine/tu@2x.png" class="banner-top" />
      <img src="../assets/images/mine/hh.jpg" class="head-portrait" />
      <img src="../assets/images/mine/right-fff.svg" class="right-white" />
      <div class="user-desc">
        <p>宫润夏</p>
        <span>积分：100</span>
      </div>
      <div class="pro-vip">PRO会员</div>
      <div class="pro-vip-center">PRO会员中心</div>
    </div>
    <div class="my-box">
      <a
        href="/personal-center"
        class="my-details"
        v-for="(detail, index) in details"
        :key="index"
      >
        <img :src="detail.way" class="detail-pic" />
        <span>{{ detail.text }}</span>
        <img src="../assets/images/mine/right-333.svg" class="right-333" />
      </a>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import pic1 from "../assets/images/mine/shangcheng@2x.png";
import pic2 from "../assets/images/mine/xiaoxi@2x.png";
import pic3 from "../assets/images/mine/shebei@2x.png";
import pic4 from "../assets/images/mine/shoucang@2x.png";
import pic5 from "../assets/images/mine/fuwu@2x.png";
import pic6 from "../assets/images/mine/shezhi@2x.png";
import Tabbar from "../components/Tabbar.vue";
export default {
  name: "Mine",
  components: {
    Tabbar
  },
  data() {
    return {
      details: [
        { way: pic1, text: "我的商城" },
        { way: pic2, text: "我的消息" },
        { way: pic3, text: "我的设备" },
        { way: pic4, text: "我的收藏" },
        { way: pic5, text: "我的服务" },
        { way: pic6, text: "我的设置" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "../assets/stylesheets/views/mine-view";
</style>
