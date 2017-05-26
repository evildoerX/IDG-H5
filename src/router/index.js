import Hello from '@/components/Hello'
import NotFound from '../components/404.vue'
import AppMain from '../components/layout/AppMain.vue'
import Home from '../view/Home.vue'
import Button from '../view/DataEntry/button.vue'
import Input from '../view/DataEntry/input.vue'
import Toast from '../view/Feedback/Toast.vue'
import Login from '../view/Combination/account/login.vue'

let routes = [
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
            { path: '/button', component: Button, name: 'Button', hidden: false },
            { path: '/input', component: Input, name: 'Input', hidden: false }
        ]
    },
    {
        path: '/',
        component: AppMain,
        name: '账号',
        iconCls: 'fa fa-address-card',
        leaf: true, //只有一个节点
        children: [
            { path: '/login', component: Login, name: '按钮', hidden: false },
        ]
    },
    {
        path: '/',
        component: AppMain,
        name: 'Feedback',
        iconCls: 'fa fa-address-card',
        leaf: true, //只有一个节点
        children: [
            { path: '/toast', component: Toast, name: 'Toast', hidden: false },
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
