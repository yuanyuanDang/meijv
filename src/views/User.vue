<template>
  <div class="user-container">
    <header>
      <div class="store-input">
        <img src="../../src/assets/images/shopping/back.png" class="back" />
        <img
          src="../../src/assets/images/search/sousuo@2x.png"
          class="cast-about"
        />
        <span>输入你想搜索的内容</span>
      </div>
    </header>
    <div class="box"></div>
    <div class="search-history">
      <div class="search-name">
        <span>历史搜索</span>
        <img
          src="../../src/assets/images/search/删除(1)copy@2x@2x.png"
          class="delete"
        />
      </div>
      <div class="search-desc">
        <a href="javascript:void (0)">空调</a>
        <a href="javascript:void (0)">冰箱</a>
        <a href="javascript:void (0)">洗衣机</a>
        <a href="javascript:void (0)">配件周边</a>
        <a href="javascript:void (0)">PRO会员</a>
        <a href="javascript:void (0)">布谷洗碗机</a>
      </div>
    </div>

    <div class="search-history">
      <div class="search-name">
        <span>大家都在买</span>
        <div></div>
        <!--                <img src="../../src/assets/images/search/删除(1)copy@2x@2x.png" class="delete"/>-->
      </div>
      <div class="search-desc">
        <a href="javascript:void (0)">空调</a>
        <a href="javascript:void (0)">冰箱</a>
        <a href="javascript:void (0)">洗衣机</a>
        <a href="javascript:void (0)">配件周边</a>
        <a href="javascript:void (0)">PRO会员</a>
        <a href="javascript:void (0)">布谷洗碗机</a>
      </div>
    </div>

    <!--<img src="../../src/assets/images/search/keyboard.png" class="keyboard" />-->
  </div>
</template>

<script>
export default {
  name: "user"
};
</script>

<style scoped lang="scss">
@import "../assets/stylesheets/views/user-view";
</style>
