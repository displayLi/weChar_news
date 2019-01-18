<template>
  <div id="Headers">
    <i class="return" v-if="isShowReturn" @click="$router.go(-1)">
      <svg
        t="1547452954434"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1098"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M314.257949 511.802956c107.013345 97.707837 211.700314 193.089297 316.387282 288.470757l160.520018 146.561755c23.263771 20.937394 27.916525 44.201164 11.631885 62.812181-18.611017 20.937394-41.874787 18.611017-65.138558-4.652754-162.846395-144.235378-321.040036-290.797134-481.560054-435.032512-9.305508-9.305508-18.611017-16.28464-27.916525-23.263771-20.937394-18.611017-20.937394-48.853919-2.326377-65.138558L602.728706 139.582624c44.201164-41.874787 90.728706-81.423198 134.92987-123.297984 23.263771-20.937394 51.180296-18.611017 65.138558 4.652754 11.631885 18.611017 6.979131 39.54841-13.958262 60.485804C674.846395 186.110166 560.853919 290.797134 444.535065 395.484102c-41.874787 34.895656-83.749575 74.444066-130.277116 116.318854z"
          p-id="1099"
          fill="#707070"
        ></path>
      </svg>
    </i>
    <div class="title">{{title}}</div>
    <i class="more" v-if="isShowMore" @click="$emit('click')">
      <img :src="imageUrl">
    </i>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    moreRightUrl: String,
    isShowMore: {
      type: Boolean,
      default: false
    },
    isShowReturn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {
    imageUrl() {
      return require("../assets/" + this.moreRightUrl + ".png");
    }
  },
  created() {}
};
</script>

<style scoped lang="stylus">
@import '../common/css/variate.styl'
#Headers
  width 100%
  background-color $header_color
  line-height 50px
  text-align center
  border-bottom 1px solid $border_color
  position relative
  z-index inherit
  .title
    font-size 18px
    letter-spacing $spacing
  .return, .more
    position absolute
    left 0
    top 50%
    width 30px
    height 30px
    padding 8px
    transform $y_center
    z-index 10
    background rgba(249,249,249,.7)
    svg
      width 20px
      margin-bottom 4px
      line-height 30px
  .more
    left auto
    right 5px
    img
      width 80%
      height 80%
      margin-bottom 4px
</style>