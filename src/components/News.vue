<template>
  <div>
    <message></message>
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
            title: "国际",
            text:"外媒：印度GDP增速已超中国 医疗教育仍远远落后",
            date:"2016-10-23 01:25",
            link:"http:\/\/mini.eastday.com\/mobile\/161023012557545.html?qid=juheshuju"
          }
        ]
      }
    },

    ready(){
      var that = this;
    }

}

</script>
<style>

</style>
