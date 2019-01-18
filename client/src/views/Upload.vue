<template>
  <div id="Upload">
    <div class="header">
      <app-header
        title="　　"
        :isShowReturn="true"
        @click="postImgData"
        :isShowMore="true"
        moreRightUrl="wechar-post"
      ></app-header>
    </div>
    <div class="upload-container">
      <textarea v-model="text" placeholder="这一刻的想法..."></textarea>
    </div>
    <section id="img_uplaod" class="clearfix">
      <!-- upload -->
      <div
        class="isImg"
        v-for="(imgUrl,index) in fileDatas"
        :key="index"
        v-if="fileDatas.length > 0"
      >
        <img :src="imgUrl" alt>
        <i class="removeImgs" @click="removeImgs(index)">
          <svg
            t="1547566059410"
            class="icon"
            style
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2090"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="200"
            height="200"
          >
            <path
              d="M583.168 523.776L958.464 148.48c18.944-18.944 18.944-50.176 0-69.12l-2.048-2.048c-18.944-18.944-50.176-18.944-69.12 0L512 453.12 136.704 77.312c-18.944-18.944-50.176-18.944-69.12 0l-2.048 2.048C46.08 98.304 46.08 129.536 65.536 148.48l375.296 375.296-375.296 375.296c-18.944 18.944-18.944 50.176 0 69.12l2.048 2.048c18.944 18.944 50.176 18.944 69.12 0l375.296-375.296 375.296 375.296c18.944 18.944 50.176 18.944 69.12 0l2.048-2.048c18.944-18.944 18.944-50.176 0-69.12l-375.296-375.296z"
              fill="#2c2c2c"
              p-id="2091"
            ></path>
          </svg>
        </i>
      </div>
      <div class="upload-btns" v-if="fileDatas.length < 9">
        <button class="btn_upload">
          <input type="file" name="file" @change="getFile($event)" multiple accept="image/*">
        </button>
      </div>
    </section>
  </div>
</template>

<script>
var formData = new FormData();
import Header from "../components/Header";
export default {
  name: "upload",
  data() {
    return {
      text: "",
      fileDatas: []
    };
  },
  methods: {
    getFile({ target: { files } }) {
      Array.from(files).forEach(file => {
        let imgUrl = this.getObjectURL(file);
        this.fileDatas.push(imgUrl);
        formData.append("file", file);
      });
    },
    removeImgs(index) {
      this.fileDatas.splice(index, 1);
      return;
    },
    postImgData() {
      if (this.fileDatas.length > 0 || this.text) {
        formData.delete("text");
        formData.append("text", this.text);

        this.$axios.post("/upload", formData).then(res => {
          if (res.code == 0) {
            formData.delete("text");
            formData.delete("file");
            this.$router.go(-1);
          } else {
            return alert(res.msg);
          }
        });
      }
    },
    getObjectURL(file) {
      let url = null;
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    }
  },
  components: {
    "app-header": Header
  }
};
</script>

<style scoped lang="stylus">
#Upload
  .upload-container, .upload-btns
    box-sizing border-box
    padding 20px
    textarea
      width 100%
      height 60px
      outline none
      border 0
      font-size 14px
      background transparent
  #img_uplaod
    margin 0 auto
    box-sizing border-box
    padding 20px
    .upload-btns, .isImg
      width 30%
      height 7rem
      float left
      margin-right 8px
      margin-bottom 8px
      position relative
      padding 0
    .btn_upload
      width 100%
      height 100%
      outline none
      border none
      background url('../assets/upload.png') no-repeat
      background-size 100% 100%
      input
        display inline-block
        width 100%
        height 100%
        opacity 0
    .isImg
      img
        width 100%
        height 100%
        object-fit cover
      .removeImgs
        width 20px
        height 20px
        background-color #ccc
        position absolute
        right -6px
        top -6px
        border-radius 50%
        svg
          width 65%
          height 65%
          margin 3px
</style>