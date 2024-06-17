<template>
    <nav>
      <ul>
        <li><router-link to="/">主页</router-link></li>
        <li><router-link to="/springs">泉水</router-link></li>
        <li><router-link to="/food">美食</router-link></li>
        <li><router-link to="/attractions">引力</router-link></li>
        <li><router-link to="/history">历史</router-link></li>
        <li><router-link to="/culture">文化</router-link></li>
        <li><router-link to="/contact">联系我们</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
        <li><router-link to="/login">登录</router-link></li>
        <li><router-link to="/register">注册</router-link></li>
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
    background-color: #750b0b;
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
  