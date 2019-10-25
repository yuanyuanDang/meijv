<template>
  <div class="home-container">
    <div class="header">
      <img class="background" src="../assets/images/home/juxing2@2x.png" />
      <div class="header-left">
        <span>宫润夏的家 </span>
        <img src="../assets/images/home/xiajiantou.svg" />
      </div>
      <div class="header-right">
        <img src="../assets/images/home/qiandao@2x.png" />
        <img src="../assets/images/home/yuyin@2x.png" />
      </div>
    </div>
    <div class="add-equipment">
      <div class="add-equipment-top">
        <span>我的设备</span>
        <img src="../assets/images/home/jiahao1@2x.png" />
      </div>
      <div class="add-equipment-bottom">
        <div class="equipment" v-for="(item, index) in equipment" :key="index">
          <p>{{ item.text }}</p>
          <div>
            <img :src="item.img1" />
            <img @click="color($event, index)" :src="item.img2" />
          </div>
        </div>
      </div>
    </div>
    <div class="controls">
      <div class="control-top">
        <span>一键控制</span>
        <img src="../assets/images/home/jiahao1@2x.png" />
      </div>
      <div
        v-for="(item, index) in control"
        :data-index="index"
        :key="index"
        :class="item.class"
      >
        <img src="../assets/images/home/juxing2@2x.png" />
        <p>{{ item.text1 }}{{ item.checked }}</p>
        <p>{{ item.text2 }}</p>
        <van-switch
          v-model="item.checked"
          size="24px"
          inactive-color="#7b91e7"
          active-color="#ffffff"
          class="switch"
          v-on:change="select($event, index)"
        />
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import equipment_img2 from "../assets/images/home/kaiguan1@2x.png";
import equipment_img1 from "../assets/images/home/kaiguan@2x.png";
import Tabbar from "../components/Tabbar.vue";

export default {
  name: "Home",
  components: {
    Tabbar
  },
  computed: {
    ...mapState(["title"]),
    ...mapState("homeModule", ["home_title"])
  },
  data() {
    return {
      equipment: [
        {
          img1: equipment_img1,
          img2: equipment_img1,
          text: "空调 | 客厅",
          blue: true
        },
        {
          img1: equipment_img2,
          img2: equipment_img2,
          text: "加湿器 | 客厅",
          blue: false
        },
        {
          img1: equipment_img2,
          img2: equipment_img2,
          text: "热水器 | 浴室",
          blue: false
        },
        {
          img1: equipment_img2,
          img2: equipment_img2,
          text: "冰箱 | 厨房",
          blue: false
        }
      ],
      control: [
        {
          text1: "回家",
          text2: "电热水器开机80℃、空调25℃、天然气开",
          checked: false,
          class: "control"
        },
        {
          text1: "离家",
          text2: "四路开关一键关闭",
          checked: true,
          class: "control select-control"
        },
        {
          text1: "睡眠",
          text2: "每天21:00扫地机器人工作、区域清扫",
          checked: false,
          class: "control"
        },
        {
          text1: "起床",
          text2: "电热水器开机60℃",
          checked: false,
          class: "control"
        },
        {
          text1: "一键开灯",
          text2: "四路开关一键打开",
          checked: false,
          class: "control"
        },
        {
          text1: "定时清扫",
          text2: "每天21:00扫地机器人工作、区域清扫",
          checked: false,
          class: "control"
        },
        {
          text1: "定时布防",
          text2: "每天09:00网关开启布防模式",
          checked: false,
          class: "control"
        },
        {
          text1: "自定义模式",
          text2: "点击添加自定义模式",
          checked: false,
          class: "control"
        }
      ]
    };
  },
  methods: {
    select(e, i) {
      this.control[i].checked = e;
      if (e === true) {
        this.control[i].class = "control select-control";
      } else if (e === false) {
        this.control[i].class = "control";
      }
    },
    color(e, i) {
      if (this.equipment[i].blue) {
        this.equipment[i].img2 = equipment_img2;
        this.equipment[i].blue = false;
      } else {
        this.equipment[i].img2 = equipment_img1;
        this.equipment[i].blue = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheets/views/home-view";
</style>
