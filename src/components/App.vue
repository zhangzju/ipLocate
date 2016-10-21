<template>
  <div class="container"><p>hi</p>
    <router-link to="/index">首页</router-link>
    <router-link to="/weather">天气</router-link>
    <router-link to="/news">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
}

</script>

<style>
.container {
  display: flex;

}
</style>
