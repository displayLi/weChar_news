<template>
  <div id="LookImg">
    <div class="header">
      <app-header title="查看图片" :isShowReturn="true"></app-header>
    </div>
    <div class="look-imgs" v-if="showImg">
      <img :src="showImg" alt>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "lookImg",
  computed: {
    showImg() {
      return this.$route.params.imgUrl;
    }
  },
  components: {
    "app-header": Header
  }
};
</script>

<style scoped lang="stylus">
#LookImg
  position absolute
  width 100%
  top 0
  left 0
  bottom 0
  background-color #000
  .look-imgs
    width 100%
    position absolute
    padding-top 50px
    top 50%
    left 50%
    transform translate(-50%, -50%)
    img
      width 100%
      object-fit contain
</style>