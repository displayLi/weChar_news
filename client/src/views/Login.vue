<template>
  <div id="Login">
    <div class="title">用户登录</div>
    <div class="content">
      <form>
        <app-input name="账号" placeholder="请输入邮箱" v-model="user.email"></app-input>
        <app-input name="密码" type="password" placeholder="请输入密码" v-model="user.password"></app-input>
      </form>
      <div class="btn-group">
        <app-button :disabled="isDisabled" @click="loginSubmit">登录</app-button>
      </div>
    </div>
    <div class="footer-nav">
      <router-link to="/register">注册账号</router-link>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input";
import Btn from "../components/Btn";
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  components: {
    "app-input": Input,
    "app-button": Btn
  },
  computed: {
    isDisabled() {
      if (this.user.email && this.user.password) return true;
      else return false;
    }
  },
  methods: {
    loginSubmit() {
      let erxp = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      if (erxp.test(this.user.email)) {
        this.$axios.post("/login", this.user).then(res => {
          if (res.code == 0) {
            sessionStorage.userInfo = JSON.stringify({
              id: res.data.id,
              name: res.data.name,
              avatar: res.data.avatar,
              email: res.data.email
            });
            sessionStorage.token = res.data.token;
            this.$router.push({ path: "/" });
          } else return alert(res.data.msg);
        });
      } else return alert("请输入正确的邮箱!");
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../common/css/variate.styl'
#Login
  .title
    text-align center
    font-size $font20
    padding 80px 0
    font-weight 500
    letter-spacing $spacing
  .footer-nav
    position absolute
    bottom 40px
    left 50%
    transform $x_center
    padding 0 20px
    border-left $spacing solid #cccccc
    border-right $spacing solid #cccccc
</style>