<template>
  <div id="Faxian">
    <div class="header">
      <app-header title="发现" moreRightUrl="add"></app-header>
    </div>
    <!-- 列表组件 -->
    <div class="content-list" id="Components">
      <list-box getimage="pengyouquan" path="/moments" names="朋友圈"></list-box>
      <i class="lines"></i>
      <list-box getimage="wechar-sys" path="/" names="扫一扫"></list-box>
      <list-box getimage="wechar-yyy" path="/" names="摇一摇"></list-box>
      <i class="lines"></i>
      <list-box getimage="wechar-kyk" path="/" names="看一看"></list-box>
      <list-box getimage="wechar-souyisou" path="/" names="搜一搜"></list-box>
      <i class="lines"></i>
      <list-box getimage="wechar-fjdr" path="/" names="附近的人"></list-box>
      <list-box getimage="wechar-plp" path="/" names="漂流瓶"></list-box>
      <i class="lines"></i>
      <list-box getimage="wechar-gw" path="/" names="购物"></list-box>
      <list-box getimage="wechar-games" path="/" names="游戏"></list-box>
      <i class="lines"></i>
      <list-box getimage="wechar-xcx" path="/" names="小程序"></list-box>
      <i class="lines"></i>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import ListBox from "../components/ListBox";
export default {
  name: "faxian",
  data() {
    return {
      moreRightUrl: ""
    };
  },
  components: {
    "app-header": Header,
    "list-box": ListBox
  }
};
</script>

<style scoped lang="stylus">
.header
  position fixed
  width 100%
  z-index 9
.content-list
  padding 50px 0 60px 0
  .lines
    display block
    width 100%
    height 6px
    background-color #f0f0f0
</style>