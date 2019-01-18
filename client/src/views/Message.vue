<template>
  <div id="Message">
    <app-header title="消息" :isShowMore="true" moreRightUrl="add"></app-header>
    <div>message</div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name:'message',
  data() {
    return {
      moreRightUrl:''
    }
  },
  components:{
    "app-header": Header
  }
};
</script>

<style scoped>
</style>