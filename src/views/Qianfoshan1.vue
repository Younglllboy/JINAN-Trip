<template>
    <div class="qianfoshan1">
        <h1>济南千佛山概览</h1>
    <div class="image-container">
      <img src="@/assets/qianfoshan.png" alt="千佛山">
    </div>
    <div class="description">
      <p>
        千佛山位于中国山东省济南市历下区，是一座具有悠久历史和文化底蕴的名山。千佛山以其秀丽的自然风光和丰富的人文景观而著称，是济南三大名胜之一。
      </p>
      <p>
        千佛山的主要特色包括：
      </p>
      <ul>
        <li><strong>千佛崖：</strong>刻有众多佛像，形成了壮观的千佛崖。</li>
        <li><strong>兴国禅寺：</strong>山上的古寺庙，有着深厚的佛教文化背景。</li>
        <li><strong>自然风光：</strong>山上绿树成荫，景色宜人，是市民休闲、登山的好去处。</li>
        <li><strong>登山步道：</strong>修葺一新的步道方便游客攀登，沿途风景优美。</li>
      </ul>
      <p>
        无论是春天的花海，还是秋天的红叶，千佛山都是游客们喜爱的旅游胜地。欢迎您来感受大自然的美丽与宁静。
      </p>
    </div>
      <router-view /><!--next-->
    </div>
  </template>
  
  <script>
  export default {
    name: 'QianFoshan1'
  };
  </script>
  
  <style scoped>
  /* History页面的样式 */
  .qianfoshan-overview {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
  text-align: left;
}

.image-container {
  margin-bottom: 0px;
  text-align: left;
}

img {
  max-width: 100%;
  height: 400px;
  width: 600px;
  border-radius: 8px;
}

.description {
  text-align: left;
}

.description p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
}

.description ul {
  list-style-type: disc;
  padding-left: 20px;
  margin: 20px 0;
}

.description li {
  margin-bottom: 10px;
  font-size: 1.1em;
}
  </style>