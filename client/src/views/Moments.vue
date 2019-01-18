
<template>
  <div id="Moments">
    <div class="header">
      <app-header
        title="朋友圈"
        :isShowReturn="true"
        :isShowMore="true"
        moreRightUrl="phone"
        @click="postPhone"
      ></app-header>
    </div>

    <!-- 滚动组件 -->
    <app-scroll ref="scrolls"> 
      <div class="contents" v-if="newsData.length > 0">
        <div
          class="bg-imageBox"
          :style="'background-image:url(' + getImgUrl+ newsData[0].imageUrl[0] + ')'"
        ></div>
      </div>
      <!-- 朋友圈加载图标 -->
      <i class="loading" v-show="iconFlag">
        <img src="../assets/pengyouquan.png" alt>
      </i>
      <!-- 用户信息以及头像 -->
      <div class="userInfoBox" v-if="userInfo">
        <p class="userName">{{userInfo.name}}</p>
        <div class="userAvatar">
          <img :src="userInfo.avatar" alt>
        </div>
      </div>
      <ul class="news-container">
        <li class="news-box" v-for="(item,index) in newsData" :key="index">
          <app-newsList
            :userAvatar="item.avatar"
            :userName="item.userName"
            :article="item.text"
            :imageNews="item.imageUrl"
            :timer="item.date"
            @click="gotoNewsDetail($event)"
          ></app-newsList>
        </li>
      </ul>
    </app-scroll>
  </div>
</template>

<script>
import Scroll from "../components/Scroll";
import NewsList from "../components/newsList";
import { baseUrl } from "../common/js/config";
import Header from "../components/Header";
export default {
  name: "moments",
  data() {
    return {
      newsData: [],
      userInfo: {},
      page:2,
      size:3,
      flag:true,
      iconFlag:false
    };
  },
  methods: {
    postPhone() {
      this.$router.push({ path: "/upload" });
    },
    gotoNewsDetail(imgUrl) {
      if (imgUrl) {
        this.$router.push({ name: "lookImg", params: { imgUrl } });
      }
    },
    getInterface() {
      this.$axios("/news/downRefresh").then(res => {
        if (res.code == 0) {

          setTimeout(() => {
            this.$refs.scrolls.$data.LoadFlag = {
              isLoading:false,
              loadingText:"下拉刷新"
            }
            this.iconFlag = false;
          },1000)

          this.page = 2
          this.flag = true
          this.$refs.scrolls.$data.isDone = false

          res.data.forEach(item => {
            if (item !== null) {
              item.imageUrl = item.imageUrl.split(",");
            }
          });
          
          this.newsData = res.data;
        } else {
          alert(res.msg);
        }
      });
    },
    upgetDatas() {
      if(this.flag){
        this.$axios.post("/news/upLazyload",{page:this.page,size:this.size}).then(res => {
          if (res.code == 0) {
            let flag = false;
            res.data.forEach(item => {
              if (item !== null) {
                item.imageUrl = item.imageUrl.split(",");
                this.newsData.push(item)
              } else {
                this.$refs.scrolls.$data.isDone = true;
                this.page = 2;
                this.flag = false;
                return ;
              }
            });

            this.$refs.scrolls.refreh();
            this.page++
          } else {
            alert(res.msg);
          }
        });
      }
    }
  },
  computed: {
    getImgUrl() {
      return baseUrl;
    }
  },
  components: {
    "app-header": Header,
    "app-newsList": NewsList,
    "app-scroll": Scroll
  },
  created() {
    this.userInfo = JSON.parse(sessionStorage.userInfo);
    this.getInterface();
  }
};
</script>

<style scoped lang="stylus">
#Moments
  width 100%
  height 100%
  overflow hidden
  position absolute
  .header
    position fixed
    width 100%
    z-index 9
  .contents
    width 100%
    height 200px
    paddding-top 50px
    .bg-imageBox
      width 100%
      height 100%
      background-size contain
  .userInfoBox
    position absolute
    right 30px
    top 212px
    .userName
      color white
      font-size 20px
      display inline-block
      vertical-align top
      margin 12px 20px 0 0
    .userAvatar
      width 60px
      height 60px
      display inline-block
      border-radius 6px
      box-shadow 0px 4px 8px rgba(0, 0, 0, 0.4)
      overflow hidden
      img
        width 100%
        height 100%
  .news-container
    margin-top 30px
  .loading
    display block
    position absolute
    top 64px
    left 14px
    width 35px
    height 35px
    animation rotate 2s infinite linear
    img
      width 100%
      height 100%
@keyframes rotate
  0%
    transform rotate(-360deg)
  100%
    transform rotate(0deg)
</style>