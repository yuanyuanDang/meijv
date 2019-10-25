<template>
  <div class="shopping-trolley">
    <div class="header">
      <img class="background" src="../assets/images/home/juxing2@2x.png" />
      <div class="header-center">
        <span>购物车</span>
        <a href="/store"><img src="../assets/images/home/xiajiantou.svg"/></a>
      </div>
    </div>
    <div class="content">
      <van-checkbox-group
        v-model="result"
        ref="checkboxGroup"
        @change="onChange($event)"
      >
        <div
          class="content-check"
          v-for="(item, index) in contentCheck"
          :key="index"
        >
          <van-checkbox class="checkbox" :name="item.name"></van-checkbox>
          <img :src="item.src" />
          <div class="content-right">
            <p>{{ item.p1 }}</p>
            <p>{{ item.p2 }}</p>
            <p>{{ item.p3 }}</p>
            <van-stepper
              v-model="item.value"
              class="stepper"
              button-size="20px"
            />
          </div>
        </div>
      </van-checkbox-group>
    </div>
    <van-checkbox class="all-checked" v-model="checked" @click="checkAll"
      >全选</van-checkbox
    >
    <div class="account">
      <p>
        合计：<span>￥{{ account }}</span>
      </p>
      <p>
        <span>去付款</span> <img src="../assets/images/home/juxing2@2x.png" />
      </p>
    </div>
  </div>
</template>

<script>
import tu from "../assets/images/shopping-trolley/tu@2x.png";
export default {
  name: "shopping-trolley",
  data() {
    return {
      result: [],
      checked: false,
      value: 1,
      contentCheck: [
        {
          name: "a",
          src: tu,
          p1: "大1.5匹 变频空调挂机 冷暖壁挂式智能云控",
          p2: "限时特惠  新品",
          p3: "￥ 2299.00",
          value: 1
        },
        {
          name: "b",
          src: tu,
          p1: "大1.5匹 变频空调挂机 冷暖壁挂式智能云控",
          p2: "限时特惠  新品",
          p3: "￥ 2299.00",
          value: 1
        },
        {
          name: "c",
          src: tu,
          p1: "大1.5匹 变频空调挂机 冷暖壁挂式智能云控",
          p2: "限时特惠  新品",
          p3: "￥ 2299.00",
          value: 1
        }
      ],
      checked_all: [],
      account: 0
    };
  },
  methods: {
    checkAll() {
      if (this.checked_all === 3) {
        this.$refs.checkboxGroup.toggleAll(false);
      } else {
        this.$refs.checkboxGroup.toggleAll(true);
      }
    },
    onChange(res) {
      this.text = res;
      this.checked_all = res.length;
      if (res.length === 3) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  }
};
</script>
<style>
body {
  background-color: #eeeeee;
}
</style>
<style lang="scss" scoped>
@import "../assets/stylesheets/views/shopping-trolley.scss";
</style>
