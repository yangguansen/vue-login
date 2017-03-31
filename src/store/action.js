import axios from 'axios'

export default {
    submit (context,obj) {
        if(Object.keys(obj).some(function (key) {
               return obj[key] == ''
            })){
            alert('用户名和密码不能为空');
        } else {
            //axios.get('http://127.0.0.1/vue/login.php',{
            //        params:{
            //            username:obj.username,
            //            password:obj.password
            //        }
            //    }).
            //    then(function(res){
            //        console.log(res.data);
            //    }).
            //    catch(function (err) {
            //        console.log(err)
            //    })
            context.dispatch('login',obj);
        }
    },
    login ({commit},obj){
        var count = JSON.parse(localStorage.getItem('user'));
        if (!count){
            alert("该用户不存在，请先注册!");
            return;
        }
        for(var i = 0; i < count.count.length; i++){
            var user = count.count[i]
            if(user.username == obj.username && user.password == obj.password) {
                commit('SHOW_USER',{
                    username:obj.username,
                    password:obj.password
                })
                alert("登录成功!")
            } else {
                alert("密码错误")
            }
            return;
        }
        alert("该用户不存在，请先注册!");
    },
    register ({commit,state},{username,password}){
        var newUser = {
            username:username,
            password:password
        }

        var userDB = JSON.parse(localStorage.getItem(state.database))
        if(userDB == null){
            var user = {
                count:[newUser]
            }
        } else {
            userDB.count.push(newUser);
            var user = {
                count:userDB.count
            }
        }
        localStorage.setItem(state.database,JSON.stringify(user))

        alert("注册成功！")
    }
}
