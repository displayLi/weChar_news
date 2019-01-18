<template>
  <nav id="navBar">
    <ul>
      <li v-for="(item,index) in navList" :key="index" @click="flag = index">
        <router-link :to="item.path">
          <p class="icons">
            <img v-if="flag != index" :src="item.icon">
            <img v-if="flag == index" :src="item.active">
          </p>
          <p>{{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      navList: [
        {
          name: "消息",
          path: "/message",
          icon: require("../assets/msg.png"),
          active: require("../assets/msg-active.png")
        },
        {
          name: "通讯录",
          path: "/tongxunlu",
          icon: require("../assets/tongxunlu.png"),
          active: require("../assets/tongxunlu-active.png")
        },
        {
          name: "发现",
          path: "/faxian",
          icon: require("../assets/faxian.png"),
          active: require("../assets/faxian-active.png")
        },
        {
          name: "我",
          path: "/me",
          icon: require("../assets/wo.png"),
          active: require("../assets/wo-active.png")
        }
      ],
      flag: 0
    };
  },
  methods: {},
  watch: {
    $route(to, from) {
      if (to.path)
        this.flag = this.navList.findIndex(item => item.path == to.path);
    }
  },
  created() {
    if (location.pathname) {
      this.flag = this.navList.findIndex(
        item => item.path == location.pathname
      );
    }
  }
};
</script>

<style scoped lang="stylus">
#navBar
  position fixed
  left 0
  bottom 0
  width 100%
  height 60px
  border-top 1px solid #e5e5e5
  background-color #f9f9f9
  ul
    display flex
    height 100%
    justify-content space-around
    align-items center
    li
      text-align center
      flex 1
      a
        p.icons
          width 30px
          height 30px
          margin 0 auto
          img
            width 100%
            height 100%
        p
          font-size 12px
          text-align center
      .router-link-active
        color #56AE65
</style>