<template>
  <article class="message">
  <div class="message-header">
    {{title}}新闻
  </div>
  <div class="message-body">
    <a v-bind:href="link" class="is-large">{{text}}</a>
    <p>{{date}}</p>
  </div>
</article>
</template>
<script>
export default {
  name: 'Message',

  props: ['title','text', 'date', 'link'],

  data(){
    return {
    }
  }

}
</script>
<style>

</style>
