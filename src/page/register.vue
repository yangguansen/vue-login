<template>
    <div class="login">
        <div>
            <label>用户名:</label>
            <input type="text" placeholder="请输入用户名" v-model="username"/>
        </div>
        <div>
            <label>密&nbsp;&nbsp;&nbsp;码:</label>
            <input type="text" placeholder="请输入密码" v-model="password"/>
        </div>

        <button @click="register()">注册</button>
    </div>
</template>

<script>

    export default {
        name: 'register',
        data:function(){
            return{
                username:this.username,
                password:this.password
            }
        },
        methods:{
            register:function(){
                var obj = {};
                obj.username = this.username || '';
                obj.password = this.password || '';
                this.$store.dispatch('register',obj)
            }
        }
    }
</script>

<style scoped>
    .login>div{
        padding: 10px;
    }
</style>
