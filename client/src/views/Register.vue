<template>
  <div id="Register">
    <div class="title">用户注册</div>
    <div class="content">
      <form>
        <app-input name="昵称" placeholder="例如：会飞的煤气罐" v-model="user.name"></app-input>
        <app-input name="邮箱" placeholder="请填写QQ邮箱" v-model="user.email"></app-input>
        <app-input name="密码" placeholder="请填写密码" v-model="user.password"></app-input>
        <app-input name="确认密码" placeholder="请确认密码" v-model="password2"></app-input>
      </form>
    </div>
    <div class="btn-group">
      <app-button :disabled="isDisabled" @click="registerSubmit">注册</app-button>
    </div>
    <div class="header-cancel">
      <router-link to="/login">取消</router-link>
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
        name: "",
        email: "",
        password: ""
      },
      password2: ""
    };
  },
  methods: {
    registerSubmit() {
      let erxp = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      if (erxp.test(this.user.email)) {
        if (
          this.user.email &&
          this.user.name &&
          this.user.password &&
          this.password2 &&
          this.user.password.length > 4 &&
          this.user.password.length < 16
        ) {
          if (this.user.password == this.password2) {
            this.$axios.post("/register", this.user).then(res => {
              if (res.code == 0) {
                alert("注册成功!");
                this.$router.push({ path: "/login" });
              } else return alert(res.msg);
            });
          } else return alert("两次密码不一致，请重新输入!");
        } else return alert("注册选项不能为空,密码必须大于4位并且小于16位!");
      } else return alert("邮箱输入有误，请重新输入!");
    }
  },
  computed: {
    isDisabled() {
      if (
        this.user.email &&
        this.user.name &&
        this.user.password &&
        this.password2
      )
        return true;
      else return false;
    }
  },
  components: {
    "app-input": Input,
    "app-button": Btn
  }
};
</script>

<style scoped lang="stylus">
@import '../common/css/variate.styl'
#Register
  .title
    text-align center
    font-size $font20
    padding 80px 0
    font-weight 500
    letter-spacing $spacing
  .header-cancel
    position absolute
    top 0
    left 0
    padding 20px
    a
      color $green_color
      font-size $font14
</style>