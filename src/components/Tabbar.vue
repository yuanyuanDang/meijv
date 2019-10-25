<template>
  <van-tabbar
    v-model="active"
    class="tab-bar"
    style="z-index: 100"
    route="route"
  >
    <van-tabbar-item to="/">
      <span>首页</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon1.active : icon1.normal"
      />
    </van-tabbar-item>
    <van-tabbar-item to="/store">
      <span>商城</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon2.active : icon2.normal"
    /></van-tabbar-item>

    <van-tabbar-item to="/serve">
      <span>服务</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon3.active : icon3.normal"
    /></van-tabbar-item>

    <van-tabbar-item to="/mine">
      <span>我的</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon4.active : icon4.normal"
    /></van-tabbar-item>
  </van-tabbar>
</template>

<script>
import shouye from "../assets/images/label/shouye@2x.png";
import shangc2 from "../assets/images/label/shangc@2x.png";
import shangc1 from "../assets/images/label/gouwu@2x.png";
import fuwu1 from "../assets/images/label/fuwu1@2x.png";
import fuwu2 from "../assets/images/label/fuwu@2x.png";
import wode2 from "../assets/images/label/wode@2x.png";
import wode1 from "../assets/images/label/wude@2x.png";

export default {
  name: "tabbar",
  data() {
    return {
      active: 0,
      icon1: {
        normal: shouye,
        active: shouye
      },
      icon2: {
        normal: shangc1,
        active: shangc2
      },
      icon3: {
        normal: fuwu2,
        active: fuwu1
      },
      icon4: {
        normal: wode1,
        active: wode2
      }
    };
  }
};
</script>

<style scoped></style>
