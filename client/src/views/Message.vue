<template>
  <div id="Message">
    <app-header title="消息" :isShowMore="true" moreRightUrl="add"></app-header>
    <div class="userList">
      <app-friend
        v-for="(item,index) in friendList"
        :avatar="item.avatar"
        :userName="item.name"
        :key="index"
        @click="gotoUserDetail(item)"
      ></app-friend>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Friend from "../components/Friend";
export default {
  name:'message',
  data() {
    return {
      moreRightUrl:'',
      friendList: [],
    }
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
  components:{
    "app-header": Header,
    "app-friend": Friend
  },
  created(){
    this.getUserInfo()
  }
};
</script>

<style scoped>
</style>