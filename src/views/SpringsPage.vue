<template>
    <div class="springs">
      <h1>济南的泉水景观</h1>
      <div class="gallery">
        <img src="../assets/logo.png" alt="Spring 1">
        <img src="../assets/logo.png" alt="Spring 2">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SpringsPage'
  };
  </script>
  
  <style scoped>
  .springs {
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
  