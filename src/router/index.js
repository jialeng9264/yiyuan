import Vue from 'vue'
import Router from 'vue-router'

const Shouye = () => import('@view/shouye')
const Jiaoyizhongxin = () => import('@view/jiaoyizhongxin')
const Qixiegongying = () => import('@view/qixiegongying')
const Yaopinzhaobiao = () => import('@view/yaopinzhaobiao')
const Haocaizhaobiao = () => import('@view/haocaizhaobiao')
const Help = () => import('@view/help')
const Lianxi = () => import('@view/lianxi')
const Xiangmumingcheng = () => import('@view/xiangmumingcheng')
const Zhuce = () => import('@view/zhuce')
const Zhaobiaogonggao = () => import('@view/zhaobiaogonggao')
const Zhuanjia = () => import('@view/zhuanjia/zhuanjia')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect:'/'
    },
    {
      path:'/',
      name:'shouye',
      component:Shouye
    },
    {
      path:'/jiaoyizhongxin',
      name:'jiaoyizhongxin',
      component:Jiaoyizhongxin
    },
    {
      path:'/qixiegongying',
      name:'qixiegongying',
      component:Qixiegongying
    },
    {
      path:'/yaopinzhaobiao',
      name:'yaopinzhaobiao',
      component:Yaopinzhaobiao
    },
    {
      path:'/haocaizhaobiao',
      name:'haocaizhaobiao',
      component:Haocaizhaobiao
    },
    {
      path:'/help',
      name:'help',
      component:Help
    },
    {
      path:'/lianxi',
      name:'lianxi',
      component:Lianxi
    },
    {
      path:'/xiangmumingcheng',
      name:'xiangmumingcheng',
      component:Xiangmumingcheng
    },
    {
      path:'/zhuce',
      name:'zhuce',
      component:Zhuce
    },
    {
      path:'/zhaobiaogonggao',
      name:'zhaobiaogonggao',
      component:Zhaobiaogonggao
    },
    {
      path:'/zhuanjia',
      name:'zhuanjia',
      component:Zhuanjia
    }
  ],
  mode:'hash'
})
