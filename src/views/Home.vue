<template>
  <div class="home-container">
    <!--Home-->
    <van-button type="primary">submit</van-button>
    <van-icon name="close" />
    <van-icon name="chat" dot />
    <van-icon name="chat" info="9" />
    <van-icon name="chat" info="99+" />
    <van-picker :columns="columns" @change="onChange" />
    <h1>{{ title }}</h1>
    <h1>{{ home_title }}</h1>
    <div class="box"></div>
    <div class="box1"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "vant";

export default {
  name: "Home",
  computed: {
    ...mapState(["title"]),
    ...mapState("homeModule", ["home_title"])
  },
  data() {
    return {
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"]
    };
  },
  methods: {
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    }
  }
};
</script>
