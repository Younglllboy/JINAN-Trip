<template>
    <div class="carousel" @mouseenter="startCarousel" @mouseleave="stopCarousel">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(image, index) in images" :key="index" class="carousel-item">
          <img :src="image" :alt="'Image ' + (index + 1)">
        </div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'CarouSel',
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentIndex: 0,
        interval: null
      };
    },
    methods: {
      startCarousel() {
        this.interval = setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }, 1000); // Change image every 2 seconds
      },
      stopCarousel() {
        clearInterval(this.interval);
      }
    },
    destroyed() {
      clearInterval(this.interval);
    }
  };
  </script>
  
  <style scoped>
  .carousel {
    overflow: hidden;
  width: 100%;
  height: 100%; /* Make height responsive */
  position: relative;
  }
  
  .carousel-inner {
    display: flex;
  transition: transform 0.5s ease;
  height: 100%; /* Ensure inner container takes full height */
  }
  
  .carousel-item {
    min-width: 100%;
  height: 100%; /* Ensure items take full height */
  box-sizing: border-box;
  }
  
  .carousel-item img {
    width: 100%;
  height: 100%; /* Make images responsive */
  display: block;
  object-fit: cover; /* Ensure images cover the container */
  }
  </style>
  