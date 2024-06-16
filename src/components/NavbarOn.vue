<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/springs">Springs</router-link></li>
        <li><router-link to="/food">Food</router-link></li>
        <li><router-link to="/attractions">Attractions</router-link></li>
        <li><router-link to="/history">History</router-link></li>
        <li><router-link to="/culture">Culture</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarOn'
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 10px;
  }
  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  nav ul li {
    margin: 0 10px;
  }
  nav ul li a {
    color: white;
    text-decoration: none;
  }
  nav ul li a:hover {
    text-decoration: underline;
  }
  </style>
  