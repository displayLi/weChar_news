<template>
  <div id="Home">
    <router-view/>
    <app-navbar/>
  </div>
</template>

<script>
import navBar from "../components/navBar";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    "app-navbar": navBar
  }
};
</script>
