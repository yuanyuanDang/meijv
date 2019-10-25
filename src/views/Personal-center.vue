<template>
  <div class="personal-center">
    <div class="header">
      <a href="/mine">
        <img src="../../src/assets/images/shopping/back.svg" />
      </a>
      <span>个人中心</span>
    </div>
    <a href="javascript:void (0)" class="change-picture">
      <span>更换头像</span>
      <img
        src="../../src/assets/images/mine/right-333.svg"
        class="right-next"
      />
      <img
        src="../../src/assets/images/shopping-serve/yuan@2x.png"
        class="yuan"
      />
    </a>
    <div class="section">
      <a href="javascript:void (0)" class="description-item">
        <span class="left-span">昵称</span>
        <img
          src="../../src/assets/images/mine/right-333.svg"
          class="right-icon"
        />
        <span class="right-span">夏天</span>
      </a>
      <a href="javascript:void (0)" class="description-item">
        <span class="left-span">姓名</span>
        <img
          src="../../src/assets/images/mine/right-333.svg"
          class="right-icon"
        />
        <span class="right-span">宫夏润</span>
      </a>
      <a href="javascript:void (0)" class="description-item">
        <span class="left-span">性别</span>
        <img
          src="../../src/assets/images/mine/right-333.svg"
          class="right-icon"
        />
        <span class="right-span">男</span>
      </a>
      <a href="javascript:void (0)" class="description-item">
        <span class="left-span">生日</span>
        <img
          src="../../src/assets/images/mine/right-333.svg"
          class="right-icon"
        />
        <span class="right-span">1997-07-13</span>
      </a>
      <a href="javascript:void (0)" class="description-item">
        <span class="left-span">我的地址</span>
        <img
          src="../../src/assets/images/mine/right-333.svg"
          class="right-icon"
        />
        <span class="right-span"></span>
      </a>
    </div>

    <div class="section">
      <a href="javascript:void (0)" class="description-item">
        <span class="left-span">手机号</span>
        <img
          src="../../src/assets/images/mine/right-333.svg"
          class="right-icon"
        />
        <span class="right-span">136****666</span>
      </a>
      <a href="javascript:void (0)" class="description-item">
        <span class="left-span">邮箱号</span>
        <img
          src="../../src/assets/images/mine/right-333.svg"
          class="right-icon"
        />
        <span class="right-span">summer@163.com</span>
      </a>
      <a href="javascript:void (0)" class="description-item">
        <span class="left-span">绑定社交号</span>
        <img
          src="../../src/assets/images/mine/right-333.svg"
          class="right-icon"
        />
        <span class="right-span">去绑定</span>
      </a>
      <a href="javascript:void (0)" class="description-item">
        <span class="left-span">修改密码</span>
        <img
          src="../../src/assets/images/mine/right-333.svg"
          class="right-icon"
        />
        <span class="right-span"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "personal-center"
};
</script>

<style scoped lang="scss">
@import "../assets/stylesheets/views/personal-center-view";
</style>
<style lang="scss">
html {
  background: #eeeeee;
}
</style>
