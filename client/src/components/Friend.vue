<template>
  <section id="Friend" @click="$emit('click')">
    <ul class="list-container">
      <li class="avatar">
        <img :src="avatar" alt>
      </li>
      <li class="userName">
        <span>{{userName}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "friend",
  props: {
    avatar: String,
    userName: String
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="stylus">
#Friend
  width 100%
  box-sizing border-box
  border-bottom 1px solid #eee
  padding 0 20px
  .list-container
    li
      display inline-block
      vertical-align middle
    .avatar
      width 40px
      height 40px
      border-radius 5px
      overflow hidden
      img
        width 100%
        height 100%
    .userName
      span
        padding-left 20px
        line-height 50px
        font-size 16px
</style>