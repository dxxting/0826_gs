import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

export default [
        {
            path: '/',
            component:Home
        },
    {
            name:'search',
            path: '/search/:keyword?',
            component: Search,
            props:route=>({keyword:route.params.keyword,keyword2:route.query.keyword2})
        },
        {
            path: '/register',
            component: Register,
            meta: {//需要隐藏footer的路由添加此函数
                isHidefooter:true
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                isHidefooter:true
            }
        }

    ]