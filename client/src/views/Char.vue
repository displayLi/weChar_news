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
    <ul>
      <!-- 对方所说的话 -->
      <li class="clearfix" v-for="(item,index) in msgList" :key="index">
        <div v-if="item.type == 'other'" class="left-avatar">
          <span>
            <img :src="item.avatar" alt>
          </span>
          <p>{{item.msg}}</p>
        </div>

        <div v-if="item.type == 'slef'" class="right-avatar">
          <p>{{item.msg}}</p>
          <span>
            <img :src="item.avatar" alt>
          </span>
        </div>
      </li>
    </ul>
    <footer class="charInput">
      <div class="inputGroup">
        <input v-model="message" type="text">
      </div>
      <div class="postMsg">
        <button :disabled="!message" :class="{active:message}" @click="postMessage">发送</button>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Btn from "../components/Btn";
import Socket from "../socket";
export default {
  name: "userDetails",
  data() {
    return {
      userDetail: {},
      message: "",
      userInfo: {},
      msgList: []
    };
  },
  methods: {
    Sockets(config) {
      // 初始化websocket
      Socket.init(
        config,
        message => {
          let messages = JSON.parse(message)
          this.msgList.push({
            targetId: this.userDetail.id,
            selfId: this.userInfo.id,
            msg: messages.msg,
            type: "other",
            avatar: this.userDetail.avatar
          });

          sessionStorage.message = JSON.stringify(this.msgList);
        },
        err => {
          console.log(err);
        }
      );
    },
    postMessage() {
      if (this.message !== "") {
        Socket.send(
          JSON.stringify({
            targetId: this.userDetail.id,
            selfId: this.userInfo.id,
            msg: this.message
          })
        );
      }

      this.msgList.push({
        targetId: this.userDetail.id,
        selfId: this.userInfo.id,
        avatar: this.userInfo.avatar,
        msg: this.message,
        type: "slef"
      });

      sessionStorage.message = JSON.stringify(this.msgList);

      this.message = "";
    }
  },
  components: {
    "app-header": Header
  },
  mounted() {
    this.$nextTick(_ => {
      if (sessionStorage.message) {
        let storage = JSON.parse(sessionStorage.message);
        if (this.userDetail.id == storage[0].targetId) {
          this.msgList = storage;
        } else {
          this.msgList = [];
        }
      }
      
    });
  },
  created() {
    this.userDetail =
      this.$route.params.detail || JSON.parse(sessionStorage.userDetail);
    this.userInfo = JSON.parse(sessionStorage.userInfo);
    this.Sockets(this.userInfo.id);
  }
};
</script>

<style scoped lang="stylus">
#UserDetails
  width 100%
  position absolute
  top 0
  left 0
  bottom 0
  background-color #f0f0f0
  .header
    position fixed
    width 100%
    z-index 9
  ul
    padding-top 60px
    li
      box-sizing border-box
      padding 10px
      span
        display inline-block
        width 40px
        height 40px
        border-radius 6px
        overflow hidden
        vertical-align top
        img
          width 100%
          height 100%
      p
        display inline-block
        max-width 200px
        line-height 20px
        font-size 14px
        padding 6px 10px
        border-radius 4px
    .right-avatar
      float right
      p
        margin-right 10px
        vertical-align middle
        text-align left
        background-color #62d653
    .left-avatar
      float left
      p
        margin-left 10px
        vertical-align middle
        text-align left
        background-color #fff
  .charInput
    width 100%
    height 50px
    position absolute
    bottom 0
    box-sizing border-box
    padding 0 10px
    border-top 1px solid #eee
    background-color #f9f9f9
    div
      display inline-block
    .inputGroup
      width 75%
      line-height 49px
      input
        background-color #fff
        width 100%
        padding 5px 10px
        outline none
        border 1px solid #ccc
        border-radius 6px
    div
      button
        margin-left 35px
        border 0
        color #fff
        font-size 14px
        padding 5px 10px
        border-radius 5px
        background-color #75b56c
        outline none
      .active
        background-color #20af0e
</style>