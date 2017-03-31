<template>
  <div class="app">
    <img src="./assets/logo.png">
    <h1></h1>
    <h2>{{ msg }}</h2>
    <div v-if="user == ''">
      <div class="link">
        <router-link to="/page/login">登录</router-link>
        <router-link to="/page/register">注册</router-link>
      </div>
      <router-view></router-view>
    </div>
    <div v-else>
      <div>欢迎您,<span>{{ user }}</span></div>
    </div>

  </div>

</template>

<script>

  import store from './store/index.js' // import 刚创建的 store
  export default {
    name: 'app',
    data:function() {
      return {
        msg: '首页'
      }
    },
    computed:{
      user:function(){
        return store.getters.user
      }
    },
    store:store
  }

</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  .link{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100px;
    height: 30px;
    line-height: 31px;
    text-decoration: none;
    color: #fff;
    border-radius: 6px;
  }
  .link a{
    width: 50px;
  }
.link .router-link-active{
  background-color: #ca2a2a;
  width: 50px;
  height: 30px;
  display: inline-block;
  color: #fff;
  border-radius: 4px;
}
</style>
