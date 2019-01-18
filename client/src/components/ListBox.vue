<template>
  <router-link :to="path" id="ListBox">
    <span class="imageBox">
      <img :src="imagesUrl">
    </span>
    <span class="listName">{{names}}</span>
    <i class="icon-goto">
      <svg
        t="1547457532345"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1953"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="200"
        height="200"
      >
        <path
          d="M671.5392 512L332.1344 172.544a32 32 0 0 1 45.2608-45.2096l358.4 358.4a37.12 37.12 0 0 1 0 52.5312l-358.4 358.4a32 32 0 0 1-45.2608-45.2608L671.5904 512z"
          p-id="1954"
          fill="#8a8a8a"
        ></path>
      </svg>
    </i>
  </router-link>
</template>

<script>
export default {
  name: "ListBox",
  props: {
    getimage: String,
    names: String,
    path: String
  },
  computed: {
    imagesUrl() {
      return require("../assets/" + this.getimage + ".png");
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../common/css/variate.styl'
#ListBox
  width 100%
  box-sizing border-box
  padding 0 15px
  height 50px
  background-color #fff
  border-bottom 1px solid #e0e0e0
  position relative
  .imageBox
    width 30px
    height 30px
    display inline-block
    margin-top 10px
    vertical-align middle
    img
      width 100%
      height 100%
  .listName
    display inline-block
    padding-left 25px
    font-size $font18
    vertical-align middle
    margin-top 10px
  .icon-goto
    display inline-block
    width 20px
    height 20px
    position absolute
    right 15px
    top 50%
    transform $y_center
    svg
      width 100%
      height 100%
      vertical-align middle
</style>