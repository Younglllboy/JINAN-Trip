<template>
    <div class="welcome">
      <img src="@/assets/jinan-map.png" alt="济南地图" class="map-image">
    </div>
     
</template>
  
  <script>
  export default {
    name: 'JinanMap'
  };
  </script>
  
  <style scoped>
  .welcome {
    text-align: center;
  }
  
  .map-image {
    width: 20;
    height: 20;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>