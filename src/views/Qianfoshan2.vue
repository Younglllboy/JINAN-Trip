<template>
    <div class="qianfoshan2">
        <h1>济南千佛山旅游攻略</h1>
    <div class="description">
      <h2>概述</h2>
      <p>
        千佛山是中国山东省济南市著名的旅游景点，以其美丽的自然风光和深厚的文化底蕴吸引了众多游客。以下是详细的旅游攻略，帮助您更好地规划您的旅行。
      </p>

      <h2>最佳旅游时间</h2>
      <p>
        千佛山四季皆宜游玩。春季（3-5月）繁花似锦，气候宜人；夏季（6-8月）绿树成荫，凉爽舒适；秋季（9-11月）红叶满山，景色壮观；冬季（12-2月）银装素裹，别有一番风情。
      </p>

      <h2>交通指南</h2>
      <p>
        千佛山位于济南市历下区，交通便利。您可以选择以下几种方式到达：
      </p>
      <ul>
        <li><strong>公共交通：</strong>乘坐公交车 64 路、k51 路至千佛山站下车即可到达。</li>
        <li><strong>自驾：</strong>导航至“千佛山风景区”即可，景区内有停车场。</li>
      </ul>

      <h2>景点推荐</h2>
      <p>千佛山内有许多值得一看的景点，以下是推荐的几个：</p>
      <ul>
        <li><strong>千佛崖：</strong>崖壁上雕刻有众多佛像，宏伟壮观。</li>
        <li><strong>兴国禅寺：</strong>千年古刹，香火旺盛，佛教文化浓厚。</li>
        <li><strong>齐烟九点：</strong>登高远眺，可观赏到济南的“齐烟九点”美景。</li>
      </ul>

      <h2>注意事项</h2>
      <p>为了您的安全和舒适，请注意以下几点：</p>
      <ul>
        <li>穿舒适的登山鞋，携带足够的饮用水。</li>
        <li>尊重当地的宗教信仰，不随意拍摄佛像。</li>
        <li>保持环境整洁，不乱丢垃圾。</li>
      </ul>
    </div>
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    name: 'QianFoshan2'
  };
  </script>
  
  <style scoped>
  /* History页面的样式 */
  .qianfoshan-guide {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8em;
  color: #444;
  margin-top: 20px;
  margin-bottom: 10px;
}

.image-container {
  margin-bottom: 20px;
}

img {
  max-width: 100%;
  height: auto;
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