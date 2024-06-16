<template>
    <div class="food">
      <h1>济南地道美食</h1>
      <div class="gallery">
        <img src="../assets/food1.png" alt="Food 1">
        <img src="../assets/logo.png" alt="Food 2">
      </div>
    </div>
  </template>
  
  <script>
  export default {
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
  