<template>
  <div id="Tongxunlu">
    <div class="header">
      <app-header :isShowMore="true" title="通讯录" moreRightUrl="tianjiahaoyou"></app-header>
    </div>
    <div class="userList">
      <div class="search">
        <input type="text" placeholder="搜索联系人" v-model="searchText">
      </div>
      <app-friend
        v-for="(item,index) in searchUsers"
        :avatar="item.avatar"
        :userName="item.name"
        :key="index"
        @click="gotoUserDetail(item)"
      ></app-friend>
      <div
        v-if="searchUsers.length > 0"
        class="numUsers"
        style="padding:20px 0; text-align:center; color:#666"
      >{{searchUsers.length}}位联系人</div>
    </div>

    <div
      v-if="searchUsers.length == 0"
      class="numUsers"
      style="padding:20px 0; text-align:center; color:#666"
    >暂无联系人</div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Friend from "../components/Friend";
export default {
  name: "tongxunlu",
  data() {
    return {
      moreRightUrl: "",
      friendList: [],
      searchText: ""
    };
  },
  methods: {
    getUserInfo() {
      this.$axios("/getAllUser").then(res => {
        if (res.code == 0) {
          this.friendList = res.data;
        } else return alert(res.msg);
      });
    },
    gotoUserDetail(item) {
      if (item) {
        this.$router.push({ name: "userDetails", params: { detail: item } });
        sessionStorage.userDetail = JSON.stringify(item);
      }
    }
  },
  computed: {
    searchUsers() {
      if (this.searchText !== "" && this.friendList.length > 0) {
        return this.friendList.filter(item => {
          return item.name.match(this.searchText);
        });
      } else return this.friendList;
    }
  },
  components: {
    "app-header": Header,
    "app-friend": Friend
  },
  created() {
    this.getUserInfo();
  }
};
</script>

<style scoped lang="stylus">
#Tongxunlu
  .header
    position fixed
    width 100%
    z-index 9
  .userList
    padding-top 50px
    .search
      box-sizing border-box
      padding 10px
      width 100%
      background #f0f0f0
      input
        padding 6px 0
        width 100%
        font-size 15px
        outline none
        border-radius 5px
        text-align center
</style>