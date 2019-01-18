<template>
  <div id="Me">
    <div class="header">
      <app-header title="我" moreRightUrl="add"></app-header>
    </div>

    <section style="padding-top:50px">
      <div class="userDir">
        <span class="user-avatar">
          <img :src="userInfo.avatar" alt>
        </span>
        <div class="infos">
          <p class="name">{{userInfo.name}}</p>
          <p class="email">邮箱：{{userInfo.email}}</p>
        </div>
      </div>
      <div id="Components" style="padding-bottom:60px;">
        <i class="lines"></i>
        <list-box getimage="wechar-zf" path="/" names="支付"></list-box>
        <i class="lines"></i>
        <list-box getimage="wechar-sc" path="/" names="收藏"></list-box>
        <list-box getimage="wechar-xc" path="/" names="相册"></list-box>
        <list-box getimage="wechar-kb" path="/" names="卡包"></list-box>
        <list-box getimage="wechar-bq" path="/" names="表情"></list-box>
        <i class="lines"></i>
        <list-box getimage="wechar-setting" path="/" names="设置"></list-box>
        <div @click="logout">
          <list-box getimage="wechar-logout" path names="退出登录"></list-box>
        </div>
        <i class="lines"></i>
      </div>
    </section>
  </div>
</template>

<script>
import ListBox from "../components/ListBox";
import Header from "../components/Header";
export default {
  name: "me",
  data() {
    return {
      userInfo: {}
    };
  },
  components: {
    "app-header": Header,
    "list-box": ListBox
  },
  methods: {
    logout() {
      this.$router.push({ path: "/login" });
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userInfo");
    }
  },
  created() {
    this.userInfo = JSON.parse(sessionStorage.userInfo);
  }
};
</script>

<style scoped lang="stylus">
#Me
  .header
    position fixed
    width 100%
    z-index 9
  .userDir
    box-sizing border-box
    padding 20px 30px
    .user-avatar
      display inline-block
      vertical-align sub
      width 60px
      height 60px
      box-shadow 0 2px 10px rgba(0, 0, 0, 0.2)
      border-radius 5px
      border 1px solid #eee
      overflow hidden
      img
        width 100%
        height 100%
    .infos
      margin-left 20px
      display inline-block
      line-height 30px
      .name
        font-size 18px
        font-weight bold
        color black
      .email
        font-size 14px
  .lines
    display block
    width 100%
    height 6px
    background-color #f0f0f0
</style>