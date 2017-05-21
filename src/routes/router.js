const Login = resolve => require(['../page/login.vue'], resolve);		//实现组件按需加载
const Register = resolve => require(['../page/register.vue'], resolve);

export default [{
    path: '/page/login',
    component: Login
},{
    path: '/page/register',
    component: Register
}]

