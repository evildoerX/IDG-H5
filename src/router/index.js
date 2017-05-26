import Hello from '@/components/Hello'
import Login from '../components/Login.vue'
import NotFound from '../components/404.vue'
import AppMain from '../components/layout/AppMain.vue'
import Home from '../view/Home.vue'
import Button from '../view/DataEntry/button.vue'

let routes = [{
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: AppMain,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true, //只有一个节点
        children: [
            { path: '/home', component: Home, name: '主页', hidden: false }
        ]
    },
    {
        path: '/',
        component: AppMain,
        name: '数据输入',
        iconCls: 'fa fa-address-card',
        leaf: true, //只有一个节点
        children: [
            { path: '/button', component: Button, name: '按钮', hidden: false }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
