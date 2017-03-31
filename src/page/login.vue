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

        <button @click="save()">提交</button>
    </div>
</template>

<script>

    export default {
        name: 'login',
        data:function(){
            return{
                username:this.username,
                password:this.password
            }
        },
        methods:{
            save:function(){
                var obj = {};
                obj.username = this.username || '';
                obj.password = this.password || '';
                this.$store.dispatch('submit',obj)
            }
        }
    }
</script>

<style scoped>
    .login>div{
        padding: 10px;
    }
</style>
