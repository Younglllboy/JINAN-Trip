<template>
  <div class="culture">
    <h1>济南的文化</h1>
    <p>感受济南独特的文化魅力。</p>
    <video class="video" src="../assets/culture.mp4" autoplay muted loop></video>
    <div class="description">
      <p>
        济南作为山东省的省会，不仅有着悠久的历史，还拥有丰富多彩的文化。以下是济南文化的几个重要方面：
<br>
泉水文化
济南以其丰富的泉水资源而闻名，被誉为“泉城”。全市有72名泉，其中最著名的是趵突泉、大明湖、五龙潭、黑虎泉等。泉水文化深深融入济南人的生活，形成了独特的城市景观和生活方式。趵突泉每年吸引大量游客前来观赏，泉水节等活动也极具特色。
<br>
历史文化遗产
济南拥有众多历史文化遗产，包括：
<br>
千佛山：这座山是济南的标志性景点之一，山上有许多石刻佛像，始建于隋唐时期。
大明湖：济南市中心的天然湖泊，以其秀丽的风景和丰富的历史文化背景而著名。
灵岩寺：位于长清区，是中国四大古刹之一，有着悠久的佛教文化传统。
<br>
文学艺术
济南是许多著名文学家和艺术家的故乡或创作地：
<br>
李清照：南宋时期著名的女词人，其婉约的词风和独特的艺术成就对后世产生了深远影响。李清照和她的丈夫赵明诚在济南生活多年，留下了大量的文学作品。
辛弃疾：南宋时期的著名词人，他的豪放派词作在中国文学史上占有重要地位。
<br>
民间艺术
济南的民间艺术丰富多样，包括：
<br>
剪纸：济南剪纸艺术以其精湛的技艺和丰富的题材闻名。
皮影戏：济南的皮影戏有着悠久的历史，是当地重要的民间娱乐形式。
鲁绣：鲁绣是山东省的传统刺绣技艺，济南是其重要传承地之一，以其细腻的针法和丰富的图案著称。
<br>
曲艺文化
济南是中国曲艺的重要发源地之一，拥有丰富的曲艺传统：
<br>
山东快书：这种说唱艺术形式以其快速的节奏和幽默的表演风格广受欢迎。<br>
山东梆子：这是山东地区的传统戏曲剧种，以其激昂的唱腔和生动的表演风格著称。
<br>
饮食文化
济南的饮食文化也十分丰富：
<br>
鲁菜：作为中国八大菜系之一的鲁菜发源地，济南以其精致的烹饪技艺和丰富的菜品闻名。著名的菜肴有九转大肠、爆炒腰花、糖醋鲤鱼等。
泉水宴：利用济南的天然泉水烹饪的菜肴，鲜美可口，独具风味。
教育和学术
<br>
济南是山东省的教育和学术中心，拥有多所著名高等院校和科研机构：
<br>
山东大学：作为中国著名的综合性大学之一，山东大学在学术研究和人才培养方面具有重要影响。
山东师范大学：该校以其优质的师范教育和丰富的学术资源在全国享有盛誉。
<br>
济南的文化底蕴深厚，无论是历史遗迹、文学艺术、民间艺术，还是饮食文化，都展示了这座城市丰富多彩的文化魅力。
      </p>
    </div>
    <div class="animated-circle"></div>
  </div>
</template>
  
  <script>
export default {
  name: "CulturePage",
};
</script>
  
  <style scoped>
.culture {
  position: relative;
  text-align: center;
  padding: 20px;
  min-height: 500px; /*确保容器足够高*/
}
.video {
  width: 1500px; /* 根据需要调整视频大小 */
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.animated-circle {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  background: url("../assets/donghua2.png") no-repeat center center;
  background-size: cover;
  animation: rotate 3s linear infinite;
}
.description {
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: left;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
  