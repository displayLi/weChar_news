<template>
  <button
    class="y-button"
    :class="{'is-disabled':!disabled}"
    :type="type"
    :disabled="!disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "btn",
  props: {
    type: String,
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped lang="stylus">
@import '../common/css/variate.styl'
.y-button
  display inline-block
  line-height 1
  white-space nowrap
  cursor pointer
  color #fff
  background-color $green_color
  border-color $green_color
  text-align center
  box-sizing border-box
  outline 0
  padding 12px 20px
  font-size $font16
  border-radius 4px
  width 90%
  margin-top 20px
  position relative
  left 50%
  transform $x_center
  border 0
.is-disabled, .is-disabled:focus, .is-disabled:hover
  color white
  background-color $btn_color
  border-color $btn_color
  cursor not-allowed
  pointer-events none
  border 0
</style>
