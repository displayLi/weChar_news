<template>
  <div id="newsList">
    <div class="new-container">
      <div class="news-avatar">
        <img :src="userAvatar">
      </div>
      <div class="news-content">
        <div class="user-name">
          <p>{{userName}}</p>
        </div>
        <div class="news-article">
          <p>{{article}}</p>
        </div>
        <div class="news-image clearfix" v-if="imageNews.length > 0">
          <ul>
            <li v-for="(item,index) in imageNews" :key="index" v-if="item">
              <img @click="$emit('click',$event.target.getAttribute('src'))" :src="item" alt>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="createTimer clearfix">
      <span>{{getTimer}}</span>
      <i class="flag">
        <svg
          t="1547543656982"
          class="icon"
          style
          viewBox="0 0 1792 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8306"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M1280 1024H512C230.4 1024 0 793.6 0 512S230.4 0 512 0h768c281.6 0 512 230.4 512 512s-230.4 512-512 512z"
            fill="#EAEBED"
            p-id="8307"
          ></path>
          <path
            d="M422.4 512m-115.2 0a115.2 115.2 0 1 0 230.4 0 115.2 115.2 0 1 0-230.4 0Z"
            fill="#999999"
            p-id="8308"
          ></path>
          <path
            d="M908.8 512m-115.2 0a115.2 115.2 0 1 0 230.4 0 115.2 115.2 0 1 0-230.4 0Z"
            fill="#999999"
            p-id="8309"
          ></path>
          <path
            d="M1395.2 512m-115.2 0a115.2 115.2 0 1 0 230.4 0 115.2 115.2 0 1 0-230.4 0Z"
            fill="#999999"
            p-id="8310"
          ></path>
        </svg>
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsList",
  props: {
    userAvatar: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    article: String,
    imageNews: {
      type: Array,
      default: []
    },
    timer: String
  },
  data() {
    return {};
  },
  computed: {
    getTimer() {
      let data = this.timer.toString().replace(/[T,Z]/g, "");
      return data.substr(0, 10) + "　" + data.substr(10, 8);
    }
  }
};
</script>

<style scoped lang="stylus">
#newsList
  box-sizing border-box
  padding 30px 0 12px 0
  border-bottom 1px solid #eee
  .new-container
    margin 0 16px
    .news-avatar
      width 45px
      height 45px
      border-radius 4px
      overflow hidden
      display inline-block
      font-size 0
      vertical-align top
      img
        width 100%
        height 100%
    .news-content
      display inline-block
      font-size 0
      margin-left 10px
      width 80%
      .user-name
        p
          font-size 16px
          line-height 16px
          font-weight 600
          color #49879e
      .news-article
        padding 8px 0
        p
          font-size 14px
          line-height 20px
      .news-image
        ul
          li
            width 80px
            height 80px
            float left
            font-size 0
            margin 0 4px 4px 0
            overflow hidden
            img
              width 100%
              height 100px
              object-fit cover
  .createTimer
    margin-left 70px
    span
      font-size 12px
    .flag
      display inline-block
      width 30px
      height 16px
      vertical-align middle
      float right
      margin-right 20px
      background-color #eee
      border-radius 4px
      svg
        width 100%
        height 100%
</style>