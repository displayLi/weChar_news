<template>
  <div id="input_group">
    <label :for="name">{{name}}</label>
    <input
      :type="type"
      :value="val"
      :placeholder="placeholder"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    name: String,
    val: String,
    placeholder: String
  }
};
</script>

<style scoped lang="stylus">
#input_group
  box-sizing border-box
  padding 6px
  margin 10px 30px
  border-bottom 1px solid #eee
  label
    display inline-block
    width 20%
    padding-right 20px
  input
    width 70%
    outline none
    padding 4px
    font-size 16px
</style>