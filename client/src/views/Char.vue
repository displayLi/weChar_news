<template>
  <div id="UserDetails">
    <div class="header" v-if="userDetail.name">
      <app-header
        :isShowMore="true"
        :isShowReturn="true"
        :title="userDetail.name"
        moreRightUrl="more"
      ></app-header>
    </div>
    <section>聊天界面</section>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "userDetails",
  data() {
    return {
      userDetail: {}
    };
  },
  components: {
    "app-header": Header
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
section
  padding-top 60px
</style>