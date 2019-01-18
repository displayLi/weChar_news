<template>
  <div id="UserDetails">
    <div class="header" v-if="userDetail.name">
      <app-header
        :isShowMore="true"
        :isShowReturn="true"
        title="详细信息"
        moreRightUrl="more"
      ></app-header>
    </div>
    <section class="user">
      <div class="userDir">
        <span class="user-avatar">
          <img :src="userDetail.avatar" alt>
        </span>
        <div class="infos">
          <p class="name">{{userDetail.name}}</p>
          <p class="email">邮箱：{{userDetail.email}}</p>
        </div>
      </div>
    </section>
    <app-button :disabled="true" type="button" @click="gotoMessage">发消息</app-button>
  </div>
</template>

<script>
import Header from "../components/Header";
import Btn from "../components/Btn";
export default {
  name: "userDetails",
  data() {
    return {
      userDetail: {}
    };
  },
  methods: {
    gotoMessage() {
      this.$router.push({ name: "char", params: { detail: this.userDetail } });
    }
  },
  components: {
    "app-header": Header,
    "app-button": Btn
  },
  created() {
    this.userDetail = this.$route.params.detail;
    this.userDetail = JSON.parse(sessionStorage.userDetail);
  }
};
</script>

<style scoped lang="stylus">
.header
  position fixed
  width 100%
  z-index 9
.user
  padding-top 50px
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
</style>