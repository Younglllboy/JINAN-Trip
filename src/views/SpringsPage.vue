<template>
  <div class="spring-overview">
    <h1>济南泉水之美</h1>
    <div class="image-container">
      <img src="@/assets/daminghu.png" alt="济南泉城" @mouseover="animateImage" @mouseleave="resetImage">
    </div>
    <div class="description">
      <p>
        济南，素有“泉城”之美誉，是中国著名的泉水城市。这里拥有众多美丽的泉水景观，以下是一些著名的泉水景点。
      </p>

      <h2 @click="toggleSection('baotu')">趵突泉 <span :class="{'arrow-down': baotuOpen, 'arrow-right': !baotuOpen}"></span></h2>
      <transition name="fade">
        <div v-if="baotuOpen" class="image-container">
          <img src="@/assets/daminghu.png" alt="趵突泉">
        </div>
      </transition>
      <transition name="fade">
        <p v-if="baotuOpen">
          趵突泉是济南最著名的泉水之一，被誉为“天下第一泉”。泉水从地下涌出，水柱高达数米，气势磅礴，四季恒温，水质清澈。
        </p>
      </transition>

      <h2 @click="toggleSection('daming')">大明湖 <span :class="{'arrow-down': damingOpen, 'arrow-right': !damingOpen}"></span></h2>
      <transition name="fade">
        <div v-if="damingOpen" class="image-container">
          <img src="@/assets/daminghu.png" alt="大明湖">
        </div>
      </transition>
      <transition name="fade">
        <p v-if="damingOpen">
          大明湖是济南市区最大的天然湖泊，由众多泉水汇集而成。湖中碧波荡漾，景色宜人，湖畔还有许多历史遗迹和名胜古迹，是游客休闲娱乐的好去处。
        </p>
      </transition>

      <h2 @click="toggleSection('wulong')">五龙潭 <span :class="{'arrow-down': wulongOpen, 'arrow-right': !wulongOpen}"></span></h2>
      <transition name="fade">
        <p v-if="wulongOpen">
          五龙潭公园内有多个泉眼，水流清澈见底，环境幽静宜人。这里的泉水被誉为“济南七十二名泉”之一，吸引了众多游客前来观赏。
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpringOverview',
  data() {
    return {
      baotuOpen: false,
      damingOpen: false,
      wulongOpen: false
    };
  },
  methods: {
    toggleSection(section) {
      this[`${section}Open`] = !this[`${section}Open`];
    },
    animateImage(event) {
      event.target.style.transform = "scale(1.1)";
    },
    resetImage(event) {
      event.target.style.transform = "scale(1)";
    }
  }
};
</script>

<style scoped>
.spring-overview {
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
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}

.arrow-right::before, .arrow-down::before {
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 8px;
  vertical-align: middle;
  border-style: solid;
  border-width: 6px 4px 0 4px;
  border-color: #444 transparent transparent transparent;
}

.arrow-down::before {
  border-width: 4px 6px 4px 6px;
  border-color: transparent transparent #444 transparent;
}

.image-container {
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
