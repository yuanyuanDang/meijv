<template>
  <div class="home-container">
    <!--Home-->
    <van-button type="primary">submit</van-button>
    <van-icon name="close" />
    <van-icon name="chat" dot />
    <van-icon name="chat" info="9" />
    <van-icon name="chat" info="99+" />
    <h1>{{ title }}</h1>
    <h1>{{ home_title }}</h1>
    <div class="box"></div>
    <div class="box1"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["title"]),
    ...mapState("homeModule", ["home_title"])
  }
};
</script>
