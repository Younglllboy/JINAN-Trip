<template>
    <div class="food">
      <h1>济南地道美食</h1>
      <div class="gallery">
        <foog-card></foog-card>
      </div>
    </div>
  </template>
  
  <script>
import FoogCard from '@/components/FoogCard.vue';
  export default {
  components: { FoogCard },
    name: 'FoodPage'
  };
  </script>
  
  <style scoped>
  .food {
    text-align: center;
  }
  .gallery {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .gallery img {
    width: 45%;
    margin: 10px;
  }
  </style>
  