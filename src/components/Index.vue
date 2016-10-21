<template>
  <div>
    <message :title='keys' :text='content' :date='date' :link='link' ></message>
  <div class="card is-fullwidth">
  <header class="card-header">
    <p class="card-header-title">
      Weather
    </p>
    <a class="card-header-icon">
      <i class="fa fa-angle-down"></i>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
      <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <small>11:09 PM - 1 Jan 2016</small> -->
      <weather></weather>
    </div>
  </div>
  <footer class="card-footer">
    <a class="card-footer-item" :click=fresh()>更新</a>
    <a class="card-footer-item">切换</a>
  </footer>
</div>
</div>
</template>
<script>
import message from './Message.vue'
import weather from './Weather.vue'

export default {
    name: "Index",

    components: {
      message,
      weather
    },

    data () {
      return {
        keys: '国际',
        date:"2016-10-21 22:38",
        content: '\“汉语桥\”观摩营营员走进云大附中 体验中学校园特色课堂',
        link:"http:\/\/mini.eastday.com\/mobile\/161021223843431.html?qid=juheshuju",
      }
    },

    methods: {
      fresh(){

      },

      change(){

      }
    },

}

</script>
<style>

</style>
