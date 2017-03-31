const SHOW_USER = 'SHOW_USER'

export default {
    [SHOW_USER] (state,value) {
        console.log("账户："+value.username,value.password)
        state.username = value.username;
        state.password = value.password;
    }
}






