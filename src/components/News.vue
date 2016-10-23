<template>
  <div>
  <div v-for="item in news">
    <message :title='item.category' :text='item.title' :date='item.date' :link='item.url'></message>
  </div>
  </div>
</template>
<script>
import message from './Message'

export default {
    name: "Index",

    components:{
      message
    },

    data(){
      return {
        news:[
          {
            category: "国际",
            title:"外媒：印度GDP增速已超中国 医疗教育仍远远落后",
            date:"2016-10-23 01:25",
            url:"http:\/\/mini.eastday.com\/mobile\/161023012557545.html?qid=juheshuju"
          }
        ]
      }
    },

    // ready(){
    //   this.$http.get('http://v.juhe.cn/toutiao/index',{
    //     type: 'guoji',
    //     key: '92fd55e2615b1ad201c8e9fad0764d82'
    //   }).then((data)=>{
    //     this.$set('news',data.result.data)
    //   }).then((error)=>{
    //       console.error("data not found!");
    //   })
    // },

    ready() {
      let topNews = [
        {
          category: "国际",
          title:"外媒：印度GDP增速已超中国 医疗教育仍远远落后",
          date:"2016-10-23 01:25",
          url:"http:\/\/mini.eastday.com\/mobile\/161023012557545.html?qid=juheshuju"
        },
        {
          category: "国际",
          title:"外媒：印度GDP增速已超中国 医疗教育仍远远落后",
          date:"2016-10-23 01:25",
          url:"http:\/\/mini.eastday.com\/mobile\/161023012557545.html?qid=juheshuju"
        }
      ]
      this.$set('news', topNews);
    },

}

</script>
<style>

</style>
