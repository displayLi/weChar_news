<template>
  <div id="Scroll" ref="scroll_wrapper" :style="'height:' + innerHeights">
    <div>
      <!-- 下拉刷新 -->
      <div class="pulldown" :class="{current:LoadFlag.isLoading}">
        <div class="clear">
          <div class="fl">
            <img width="16" src="../assets/scroll_load.gif" alt>
            <div class="fl">{{LoadFlag.loadingText}}</div>
          </div>
        </div>
      </div>
      <!-- slot -->
      <slot></slot>
      <!-- 下拉加载 -->
      <div class="pullup">
        <div class="clear" v-if="!isDone">
          <div class="fl">
            <img width="16" src="../assets/scroll_load.gif" alt="">
            <div class="fl">加载中...</div>
          </div>
        </div>
        <div class="list-donetip" v-else>
          <slot name="doneTip">没有更多数据</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  data() {
    return {
      scrollDom: {},
      innerHeights: "",
      LoadFlag: {
        isLoading: false,
        loadingText: "下拉刷新"
      },
      isDone:false
    };
  },
  mounted() {
    //  初始化 betterScroll
    this.$nextTick(_ => {
      this.scrollInit();
    });

    // 监听resize
    window.addEventListener("resize", () => {
      this.$nextTick(_ => {
        this.innerHeights = window.innerHeight + "px";
      });
    });
  },
  methods: {
    refreh(){
      this.innerHeights = window.innerHeight + "px";
      this.scrollDom.refresh();
    },
    scrollInit() {
      if (this.$refs.scroll_wrapper) {
        this.innerHeights = window.innerHeight + "px";
        this.scrollDom = new BScroll(this.$refs.scroll_wrapper, {
          probeType: 1,
          click: true
        });

        this.scrollDom.on('scroll', down => {
          this.LoadFlag.loadingText = "下拉刷新"
          if(down.y > 60) {
            this.LoadFlag.isLoading = true;
            this.LoadFlag.loadingText = "释放刷新"
          }else {
            return 
          }
        })

        this.scrollDom.on('touchEnd', down => {
          if(down.y > 60) {
            this.LoadFlag.loadingText = "刷新中..."
            this.$parent.getInterface();
            this.$parent.$data.iconFlag = true
          }
        })

        // 派发滚动到底部事件用户上拉加载
        this.scrollDom.on('scrollEnd', () => {
          if (this.scrollDom.y <= this.scrollDom.maxScrollY) {
            this.$parent.upgetDatas();
          }
        });

      } else return;
    }
  }
};
</script>

<style scoped lang="stylus">
.current {
  margin-top 50px
}
#Scroll
  width 100%
  height 100%
  .pulldown, .pullup
    width 100%
    height 50px
    position relative
    color #888
    transition .5s all
    .clear
      padding 10px 0px
      font-size 0.28rem
      position absolute
      left 50%
      transform translate(-50%, 0)
      .fl
        display inline-block
        line-height 30px
        vertical-align middle
        img
          margin-right 4px
          vertical-align middle
    .list-donetip
      text-align center
      line-height 50px
      font-size 14px
</style>