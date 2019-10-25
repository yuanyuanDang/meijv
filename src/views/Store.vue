<template>
  <div class="store-container">
    <header>
      <a href="/user" class="store-input">
        <img
          src="../../src/assets/images/search/sousuo@2x.png"
          class="cast-about"
        />
        <span>输入你想搜索的内容</span>
      </a>
      <img
        src="../../src/assets/images/shopping/gouwuche@2x.png"
        class="shopping-cart"
      />
      <img
        src="../../src/assets/images/shopping/kefu@2x.png"
        class="shopping-cart"
      />
    </header>
    <!--轮播图-->
    <van-swipe :autoplay="3000" class="van-swipe" indicator-color="#ffffff">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.picture" style="width: 100%; height: 100%" />
      </van-swipe-item>
    </van-swipe>
    <!--商品分类-->
    <van-row
      type="flex"
      justify="space-around"
      style="margin-top: 0.5rem;padding: 0 0.15rem"
      class="van-row"
    >
      <van-col span="7">
        <div class="product-classification">
          <img
            src="../../src/assets/images/shopping/juixing@2x.png"
            style="width:100%;height: 2.1rem"
          />
          <div class="text-desc">
            <p>AR预览</p>
            <span>定制您的</span>
            <span>专属智能生活</span>
          </div>
        </div>
      </van-col>
      <van-col span="7">
        <div class="product-classification">
          <img
            src="../../src/assets/images/shopping/tu1@2x.png"
            style="width:100%;height: 2.1rem"
          />
          <div class="text-desc">
            <p>全屋定制</p>
            <span>定制您的</span>
            <span>专属智能生活</span>
          </div>
        </div>
      </van-col>
      <van-col span="7">
        <div class="product-classification">
          <img
            src="../../src/assets/images/shopping/juixing1@2x.png"
            style="width:100%;height: 2.1rem"
          />
          <div class="text-desc">
            <p>商品回收</p>
            <span>定制您的</span>
            <span>专属智能生活</span>
          </div>
        </div>
      </van-col>
    </van-row>
    <!--滚动标签-->
    <van-tabs
      :swipe-threshold="5"
      v-model="active"
      animated
      color="rgb(99,144,232)"
    >
      <van-tab
        v-for="(item, index) in a"
        @click="onClick(item.id)"
        :title="item.test"
        :key="index"
      >
      </van-tab>
    </van-tabs>
    <!--瀑布流-->
    <div class="waterfall">
      <div class="item" v-for="(water, index) in waterfall" :key="index">
        <div class="item-content">
          <img :src="water.imgsArr" />
          <p>{{ water.p }}</p>
          <b>{{ water.b }}</b>
          <span>{{ water.span }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import picture1 from "../../src/assets/images/shopping/0.png";
import picture2 from "../../src/assets/images/shopping/1.jpg";
import picture3 from "../../src/assets/images/shopping/2.jpg";
import picture4 from "../../src/assets/images/shopping/3.jpg";
import picture5 from "../../src/assets/images/shopping/4.jpg";

import picture11 from "../../src/assets/images/shopping/42.png";
import picture12 from "../../src/assets/images/shopping/tu@2x.png";
import picture13 from "../../src/assets/images/shopping/pic1.png";
import picture14 from "../../src/assets/images/shopping/pic2.png";
// import picture15 from '../../src/assets/images/shopping/pic3.png'

export default {
  name: "Store",
  data() {
    return {
      active: "",
      images: [
        { picture: picture1 },
        { picture: picture2 },
        { picture: picture3 },
        { picture: picture4 },
        { picture: picture5 }
      ],
      a: [
        { id: 1, test: "推荐" },
        { id: 2, test: "空调" },
        { id: 3, test: "冰箱" },
        { id: 4, test: "洗衣机" },
        { id: 5, test: "手机" },
        { id: 6, test: "电视" },
        { id: 7, test: "生活电器" }
      ],
      waterfall: [
        {
          imgsArr: picture14,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture11,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture12,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture13,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture14,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture12,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture13,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture11,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture12,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture13,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture14,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture11,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture12,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture13,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture14,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture13,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture12,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        },
        {
          imgsArr: picture11,
          p: "美的 布谷 防漏壶嘴 隐藏式底座",
          b: "￥99.00",
          span: "PRO会员￥94"
        }
      ]

      // imgsArr: [
      //   {src: picture11, href: 'javascript:void(0)'},
      //   {src: picture12, href: 'javascript:void(0)'},
      //   {src: picture13, href: 'javascript:void(0)'},
      //   {src: picture12, href: 'javascript:void(0)'},
      //   {src: picture11, href: 'javascript:void(0)'},
      //   {src: picture13, href: 'javascript:void(0)'},
      //   {src: picture15, href: 'javascript:void(0)'},
      //   {src: picture14, href: 'javascript:void(0)'},
      //   {src: picture13, href: 'javascript:void(0)'},
      //   {src: picture11, href: 'javascript:void(0)'},
      // ],
    };
  }
};
</script>
