<template>
  <div class="content">
  <h1>{{city}}</h1>
  <nav class="level">
  <div class="level-item has-text-centered">
    <p class="heading">Temperature</p>
    <p class="title">{{temperature}}%C</p>
  </div>
  <div class="level-item has-text-centered">
      <p class="heading">Humidityg</p>
    <p class="title">{{humidity}}</p>
  </div>
  <div class="level-item has-text-centered">
    <p class="heading">Info</p>
    <p class="title">{{info}}</p>
  </div>
  <div class="level-item has-text-centered">
    <p class="heading">Wind</p>
    <p class="title">{{direct}}-{{power}}</p>
  </div>
</nav>
  <a class="button is-danger">{{chuanyi[0]}}</a>
  <blockquote>{{chuanyi[1]}}</blockquote>
  <a class="button is-info">{{yundong[0]}}</a>
  <blockquote>{{yundong[1]}}</blockquote>
  <a class="button is-success">{{ziwaixian[0]}}</a>
  <blockquote>{{ziwaixian[1]}}</blockquote>
  </ul>
</div>
</template>
<script>
export default {
  name: 'Weather',

  data(){
    return {
      city: '深圳',
      temperature:"26",
			humidity:"98",
			info:"阴",
      direct:"西南风",
			power:"3级",
      chuanyi:[
						"热",
						"天气热，建议着短裙、短裤、短薄外套、T恤等夏季服装。"
					],
      yundong:[
        		"较不宜",
        		"有降水，且风力较强，气压较低，推荐您在室内进行低强度运动；若坚持户外运动，须注意避雨防风。"
        	],
      ziwaixian:[
        		"弱",
        		"紫外线强度较弱，建议出门前涂擦SPF在12-15之间、PA+的防晒护肤品。"
        	]
    }
  }

}
</script>
<style>

</style>
