<template>
    <div class="register">
      <h2>注册</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">用户名:</label>
          <input type="text" v-model="username" id="username" required>
        </div>
        <div class="form-group">
          <label for="password">密码:</label>
          <input type="password" v-model="password" id="password" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">确认密码:</label>
          <input type="password" v-model="confirmPassword" id="confirmPassword" required>
        </div>
        <button type="submit">注册</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterIn',
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      handleSubmit() {
        // 在这里处理注册逻辑
        if (this.password !== this.confirmPassword) {
          alert('密码不匹配');
          return;
        }
        alert(`注册成功: ${this.username}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .register {
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
  }
  .form-group {
    margin: 15px 0;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  button {
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #555;
  }
  </style>
  