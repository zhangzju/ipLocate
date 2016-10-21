<template>
  <div class="container">
    <div class="header">
      <nav class="nav">
  <div class="nav-left">
    <a class="nav-item is-brand" href="#">
      <img src="http://bulma.io/images/bulma-type.png" alt="Bulma logo">
    </a>
  </div>

  <div class="nav-center">
    <a class="nav-item" href="#">
      <span class="icon">
        <i class="fa fa-github"></i>
      </span>
    </a>
    <a class="nav-item" href="#">
      <span class="icon">
        <i class="fa fa-twitter"></i>
      </span>
    </a>
  </div>

  <div class="nav-right nav-menu">
    <router-link to="/index" class="nav-item">首页</router-link>
    <router-link to="/weather" class="nav-item">天气</router-link>
    <router-link to="/news" class="nav-item">消息</router-link>

    <span class="nav-item">
      <a class="button" >
        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
        <span>Weibo</span>
      </a>
      <a class="button is-primary" href="#">
        <span class="icon">
          <i class="fa fa-download"></i>
        </span>
        <span>More</span>
      </a>
    </span>
  </div>
</nav>
    </div>
    <div class="section">
      <router-view></router-view>
    </div>
    <div class="footer">
      <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
      </p>
      <p>
        <a class="icon" href="https://github.com/jgthms/bulma">
          <i class="fa fa-github"></i>
        </a>
      </p>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import '../../static/bulma.css'

export default {
  name: "app"
}

</script>

<style>
.section {
  height: 670px;
}
</style>
